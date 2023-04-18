require("dotenv").config();
const htmlQuestions = require("../data/quizQuestions");
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
    //Selects a language
    //if adding a language here is where you will add the option for it.
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

    async function openLanguageSelect() {
      await message.reply({
        content: "What language would you like a question about?",
        components: [row],
      });
      const collector = message.channel.createMessageComponentCollector({
        time: 30000, // Time limit for user interaction in milliseconds
      });

      collector.on("collect", (interaction) => {
        const language = interaction.values[0];
        console.log(language, "this is language");

        console.log(typeof language, "typeof"); //remove later
        // The selected language will be in the values array
        // Do something with the selected language
        console.log(genQuiz(language))
      });

      collector.on("end", (collected) => {
        if (collected.size === 0) {
          message.reply("You didn't select a language in time!");
        }
      });
    }

    openLanguageSelect();

    async function genQuiz(option) {
      console.log(option, "this should show html");
      console.log(htmlQuestions, "should be all of the array html");
      if (option == "htmlQuestions") {
        const randomIndex = Math.floor(Math.random() * htmlQuestions.length);
        const question = await htmlQuestions[randomIndex];
        return question
      }
      if (option == "javascriptQuestions") {
        const randomIndex = Math.floor(
          Math.random() * javascriptQuestions.length)
          const question = await javascriptQuestions[randomIndex];
          return question
        ;
      }
      if (option == "cssQuestions") {
        const randomIndex = Math.floor(Math.random() * cssQuestions.length);
        const question = await cssQuestions[randomIndex];
        return question
      }

    }

    //Selects a random question
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
    // Get ranom question from questions.json
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
