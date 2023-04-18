require('dotenv').config()
const { Client, IntentsBitField, InteractionCollector, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, InteractionResponse } = require('discord.js')
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
//         interaction.reply("Generating a new quiz question...")
//     }
// })

client.on('messageCreate', (message)=>{
 // Ignore messages from bots
 if (message.author.bot) return;

     //Check if message starts with the prefix
     if (message.content.startsWith('!quiz')){
        message.channel.send("Generating a new quiz question...")
        //Selects a language

        const select = new StringSelectMenuBuilder()
            .setCustomId('languageSelector')
            .setPlaceholder('What language would you like to be quizzed on?')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('HTML')
                    .setValue('htmlQuestions'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('CSS')
                    .setValue('cssQuestions'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('JavaScript')
                    .setValue('javascriptQuestions')
            )

            const row = new ActionRowBuilder()
                .addComponents(select);

                async function openLanguageSelect () {
                    await message.reply({
                        content: "What language would you like a question about?", 
                        components: [row],
                    })
                }

                openLanguageSelect()
        

        //Selects a random question


     }

})








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