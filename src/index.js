require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')
const questions = require('../questions.json').questions

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


// client.on('interactionCreate', (interaction) => {
//     if (!interaction.isChatInputCommand()) {
//         return
//     }

//     console.log(interaction.commandName)

//     if(interaction.commandName === 'quiz-question'){
//         interaction.reply("Generating a new question...")
//     }
// })










/* ///////////////////////////////  */ 
/* //      EXPERIMENTAL CODE    //  */
/* //////////////////////////////// */
/* //      IM WORKING ON IT..    // */
/* //      WILL DELETE IF..      // */
/* //      PROVES USELESS ...    // */
/* //////////////////////////////// */
/* ///////   SIGNED NL    ///////// */

client.on('messageCreate', (message) => {
 // Ignore messages from bots
    if (message.author.bot) return;

    //Check if message starts with the prefix
    if (message.content.startsWith('!question')){
        message.channel.send("Generating a new question...")
        // Get ranom question from questions.json
        // Send question to channel

        const randomIdx = Math.floor(Math.random() * questions.length)
        const question = questions[randomIdx]
        console.log(question)

        message.channel.send(`Question:\n${question.name}\n\n${question.description}`)
    }
})

client.login(process.env.TOKEN);