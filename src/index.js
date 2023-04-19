require("dotenv").config();

// When adding a new question set, add it to the imports below.
const {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
} = require("../data/quizQuestions");
const { interviewQuestions } = require("../data/interviewQuestions");
const {
  Client,
  IntentsBitField,
  InteractionCollector,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  SlashCommandBuilder,
  InteractionResponse,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
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
    let quizQuestion;

  // Ignore messages from bots
  if (message.author.bot) return;

  //Check if message starts with the prefix
  if (message.content.startsWith("!quiz")) {
    message.channel.send("Generating a new quiz question...");

    //Defining the menu for selecting a language
    //If adding a set of questions for another language here is where you will add the option for it in the language selection menu.
    const select = new StringSelectMenuBuilder()
      .setCustomId("languageSelector")
      .setPlaceholder("Languages")
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

    openLanguageSelect(); //Calling the function to generate the language selection menu.

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
        const language = interaction.values[0]; // The selected language will be the only entry in the values array at index [0]

        generateQuestion(language, interaction); //Calls on the function to generate a quiz question based on the language selected.
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
    async function generateQuestion(option, interaction) {

      //HTML
      if (option == "htmlQuestions") {
        const randomIndex = Math.floor(Math.random() * htmlQuestions.length);
        quizQuestion = await htmlQuestions[randomIndex];
        console.log(quizQuestion, "line 110");
      }

      //CSS
      if (option == "cssQuestions") {
        const randomIndex = Math.floor(Math.random() * cssQuestions.length);
        quizQuestion = await cssQuestions[randomIndex];
        console.log(quizQuestion);
      }

      //JavaScript
      if (option == "javascriptQuestions") {
        const randomIndex = Math.floor(
          Math.random() * javascriptQuestions.length
        );
        quizQuestion = await javascriptQuestions[randomIndex];
        console.log(quizQuestion);
      }
    // const randomIndex = Math.floor(Math.random() * option.length);
    //     quizQuestion = await option[randomIndex];
    //     console.log(quizQuestion, "line 110");
      openQuestionMenu(interaction, quizQuestion);
    }

    //Defining the buttons for the quiz answers

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }

    //Function for sending the message to the discord channel.
    async function openQuestionMenu(interaction, quizQuestion) {
        const shuffledAnswers = shuffleArray([...quizQuestion.allAnswers, quizQuestion.correctAnswer]);
        console.log(shuffledAnswers)
        const choice1 = new ButtonBuilder()
      .setCustomId("1")
      .setLabel(`${shuffledAnswers[0]}`)
      .setStyle(ButtonStyle.Secondary);
    const choice2 = new ButtonBuilder()
      .setCustomId("2")
      .setLabel(`${shuffledAnswers[1]}`)
      .setStyle(ButtonStyle.Secondary);
    const choice3 = new ButtonBuilder()
      .setCustomId("3")
      .setLabel(`${shuffledAnswers[2]}`)
      .setStyle(ButtonStyle.Secondary);
    const choice4 = new ButtonBuilder()
      .setCustomId("4")
      .setLabel(`${shuffledAnswers[3]}`)
      .setStyle(ButtonStyle.Secondary);

    const answerChoices = new ActionRowBuilder().addComponents(
      choice1,
      choice2,
      choice3,
      choice4
    );
        console.log(quizQuestion, "is it here?")
      await interaction.reply({
        content: `${quizQuestion.question}`,
        components: [answerChoices],
      });
    }
  }
});

/* ///////////////////////////////  */
/* //     INTERVIEW QUESTIONS   //  */
/* //////////////////////////////// */

client.on("messageCreate", (message) => {
  let interviewQuestions;

  // Ignore messages from bots
  if (message.author.bot) return;

  //Check if message starts with the prefix !interview

  if (message.content.startsWith("!interview")) {
    message.channel.send("Generating an interview question...");
    const randomIndex = Math.floor(Math.random() * interviewQuestions.length);
    const selectedQuestion = interviewQuestions[randomIndex];
    console.log(selectedQuestion);
    openInterviewQuestions(message, selectedQuestion);
  }

  //Defining the buttons for the interview question answers
  const choiceA = new ButtonBuilder()
    .setCustomId("A")
    .setLabel(`AnswerChoiceA`)
    .setStyle(ButtonStyle.Secondary);
  const choiceB = new ButtonBuilder()
    .setCustomId("B")
    .setLabel(`AnswerChoiceB`)
    .setStyle(ButtonStyle.Secondary);
  const choiceC = new ButtonBuilder()
    .setCustomId("C")
    .setLabel(`AnswerChoiceC`)
    .setStyle(ButtonStyle.Secondary);
  const choiceD = new ButtonBuilder()
    .setCustomId("D")
    .setLabel(`AnswerChoiceD`)
    .setStyle(ButtonStyle.Secondary);

  const interviewAnswerChoices = new ActionRowBuilder().addComponents(
    choiceA,
    choiceB,
    choiceC,
    choiceD
  );

  async function openInterviewQuestions(message, selectedQuestion) {
    // Assuming `interaction` is available in the function
    await message.reply({
      content: `${selectedQuestion.question}`,
      components: [interviewAnswerChoices],
    });
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
