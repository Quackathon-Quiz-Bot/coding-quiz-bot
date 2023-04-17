require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`Quiz-bot, ${c.user.tag}, is ready to test your skills!`)
})


client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return
    }

    console.log(interaction.commandName)

    if(interaction.commandName === 'quiz-question'){
        interaction.reply("Generating a new question...")
    }
})

client.login(process.env.TOKEN);