require("dotenv").config();
// When adding a new question set, add it to the imports below.
const {htmlQuestions, cssQuestions, javascriptQuestions} = require("../data/quizQuestions");
const {
  Client,
  IntentsBitField,
  InteractionCollector,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  InteractionResponse,
} = require("discord.js");
const questions = require("../questions.json").questions;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`Quiz-bot, ${c.user.tag}, is ready to test your skills!`);
});

// This can probably be deleted if we are not going to use the slash commands. 
// client.on('interactionCreate', (interaction) => {
//     if (!interaction.isChatInputCommand()) {
//         return
//     }

//     console.log(interaction.commandName)

//     if(interaction.commandName === 'quiz-question'){
//         interaction.reply("Generating a new quiz question...")
//     }
// })

client.on("messageCreate", (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;
    
    //Check if message starts with the prefix
    if (message.content.startsWith("!quiz")) {
        message.channel.send("Generating a new quiz question...");
        openLanguageSelect(); //Calling the function to generate the language selection menu.



        //Defining the menu for selecting a language
        //If adding a set of questions for another language here is where you will add the option for it in the language selection menu.
        const select = new StringSelectMenuBuilder()
        .setCustomId("languageSelector")
        .setPlaceholder("What language would you like to be quizzed on?")
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel("HTML")
            .setValue("htmlQuestions"),
            new StringSelectMenuOptionBuilder()
            .setLabel("CSS")
            .setValue("cssQuestions"),
            new StringSelectMenuOptionBuilder()
            .setLabel("JavaScript")
            .setValue("javascriptQuestions")
            );

    const row = new ActionRowBuilder().addComponents(select);

    //This is the function that generates the language selection menu.
    async function openLanguageSelect() {
      await message.reply({
        content: "What language would you like a question about?",
        components: [row],
      });
      const collector = message.channel.createMessageComponentCollector({
        time: 30000, // Time limit for user interaction in milliseconds
      });

      collector.on("collect", (interaction) => {
        const language = interaction.values[0];   // The selected language will be the only entry in the values array at index [0]

        generateQuestion(language) //Calls on the function to generate a quiz question based on the language selected.
      });

      //After 30 seconds, if a language isn't selected the request times out. 
      collector.on("end", (collected) => {
        if (collected.size === 0) {
          message.reply("Request timed out...");
        }
      });
    }

    // This is the function that generates the quiz question based on the language that's fed in as a parameter.
    // When adding a new language, add an if statement to direct the function to the right question set. 
    async function generateQuestion(option) {

        //HTML
      if (option == "htmlQuestions") {
        const randomIndex = Math.floor(Math.random() * htmlQuestions.length);
        console.log(randomIndex, "index")
        const question = await htmlQuestions[randomIndex];
        console.log(question, "question for HTML")
        return question
      }

     //CSS
      if (option == "cssQuestions") {
        const randomIndex = Math.floor(Math.random() * cssQuestions.length);
        const question = await cssQuestions[randomIndex];
        console.log(question, "question for css")
        return question
      }

      //JavaScript
      if (option == "javascriptQuestions") {
        const randomIndex = Math.floor(
          Math.random() * javascriptQuestions.length)
          const question = await javascriptQuestions[randomIndex];
          console.log(question, "question for JS")
          return question
        ;
      }
    }
  }
});

/* ///////////////////////////////  */
/* //      EXPERIMENTAL CODE    //  */
/* //////////////////////////////// */
/* //      IM WORKING ON IT..    // */
/* //      WILL DELETE IF..      // */
/* //      PROVES USELESS ...    // */
/* //////////////////////////////// */
/* ///////   SIGNED NL    ///////// */

client.on("messageCreate", (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  //Check if message starts with the prefix
  if (message.content.startsWith("!question")) {
    message.channel.send("Generating a new question...");
    // Get random question from questions.json
    // Send question to channel

    const randomIdx = Math.floor(Math.random() * questions.length);
    const question = questions[randomIdx];
    console.log(question);

    message.channel.send(
      `Question:\n${question.name}\n\n${question.description}`
    );
  }
});

client.login(process.env.TOKEN);
