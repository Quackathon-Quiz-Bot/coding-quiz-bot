require("dotenv").config();

// When adding a new question set, add it to the imports below.
const {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
} = require("../data/quizQuestions");
const {
  dataStructureQuestions,
  algorithmicQuestions,
} = require("../data/interviewQuestions");

const questions = require("../questions.json").questions;

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
  Component,
  ComponentType,
} = require("discord.js");

const evaluateSolution = require("./evaluateSolution");

const { spawn } = require("child_process");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const prefix = "!";

client.on("ready", (c) => {
  console.log(`Quiz-bot, ${c.user.tag}, is ready to test your skills!`);
});

/* ////////////////////////////////////  */
/* //     CODING BOT HELP COMMAND    //  */
/* ///////////////////////////////////// */

client.on("messageCreate", async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if message starts with the prefix
  if (message.content.startsWith("!codingbothelp")) {
    // Defines the message that will be sent with information about the coding bot.
    const helpEmbed = new EmbedBuilder()
      .setColor("#ffce47")
      .setTitle("About the Coding Quiz Bot")
      .setDescription(
        "Coding Quiz Bot is a discord bot that generates coding questions to keep users skills sharp!"
      )
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Commands",
          value: `!quiz - Generates a new trivia question for you to answer. \n\n!interview - Generates a question about algorithms or data structures you may be asked about in an interview.\n\n!question - Generates a coding challenge for you to complete (like Codewars or Leetcode!) `,
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "Want to Contribute?",
          value: `Info about open source contributions... \n\nCheck out the issues tab to get some ideas about how you can help improve the bot, or make your own suggestions!`,
        }
      );

    //Sends the message.
    await message.channel.send({
      embeds: [helpEmbed],
    });
  }
});

/* //////////////////////////////////////////  */
/* //     CODING LANGUAGE QUIZ QUESTIONS   //  */
/* /////////////////////////////////////////// */

client.on("messageCreate", async (message) => {
  let quizQuestion;

  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if message starts with the prefix
  if (message.content.startsWith("!quiz")) {
    const generatingQuizEmbed = new EmbedBuilder()
      .setColor("#ffce47")
      .setTitle("It's Trivia Time!")
      .setDescription(`Generating a new quiz question...`);

    await message.channel.send({ embeds: [generatingQuizEmbed] });

    // Defining the menu for selecting a language
    // If adding a set of questions for another language here is where you will add the option for it in the language selection menu.
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

    openLanguageSelect(); // Calling the function to generate the language selection menu.

    // This is the function that generates the language selection menu.
    async function openLanguageSelect() {
      const embeddedLanguageSelect = new EmbedBuilder()
        .setColor("#ffce47")
        .setTitle(`What language would you like a question about?`);

      await message.channel.send({
        embeds: [embeddedLanguageSelect],
        components: [row],
      });
      const collector = message.channel.createMessageComponentCollector({
        time: 30000, // Time limit for user interaction in milliseconds
      });

      collector.on("collect", (interaction) => {
        const language = interaction.values[0]; // The selected language will be the only entry in the values array at index [0]

        generateQuestion(language, interaction); // Calls on the function to generate a quiz question based on the language selected.
        collector.stop(); // Ends the collector after the user has selected a language and a question has been generated.
      });

      // After 30 seconds, if a language isn't selected the request times out.
      collector.on("end", (collected) => {
        const timeoutEmbed = new EmbedBuilder()
          .setColor("#ffce47")
          .setTitle(`Request timed out...`);

        if (collected.size === 0) {
          message.channel.send({ embeds: [timeoutEmbed] });
        }
      });
    }

    // This is the function that generates the quiz question based on the language that's fed in as a parameter.
    // When adding a new language, add an if statement to direct the function to the right question set.
    async function generateQuestion(option, interaction) {
      // HTML
      if (option == "htmlQuestions") {
        const randomIndex = Math.floor(Math.random() * htmlQuestions.length);
        quizQuestion = await htmlQuestions[randomIndex];
        console.log(quizQuestion, "line 110");
      }

      // CSS
      if (option == "cssQuestions") {
        const randomIndex = Math.floor(Math.random() * cssQuestions.length);
        quizQuestion = await cssQuestions[randomIndex];
        console.log(quizQuestion);
      }

      // JavaScript
      if (option == "javascriptQuestions") {
        const randomIndex = Math.floor(
          Math.random() * javascriptQuestions.length
        );
        quizQuestion = await javascriptQuestions[randomIndex];
        console.log(quizQuestion);
      }

      // Sends the question after a language is selected
      openQuestionMenu(interaction, quizQuestion);
    }

    // Function for shuffling the array of answer choices
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    // Function for sending the question and answer choices to the discord channel starting a collector to listen for the answer choice, and sending feedback after the question is answered.
    async function openQuestionMenu(interaction, quizQuestion) {
      const shuffledAnswers = shuffleArray([
        ...quizQuestion.allAnswers,
        quizQuestion.correctAnswer,
      ]);
      const choice1 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[0]}`)
        .setLabel(`${shuffledAnswers[0]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice2 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[1]}`)
        .setLabel(`${shuffledAnswers[1]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice3 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[2]}`)
        .setLabel(`${shuffledAnswers[2]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice4 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[3]}`)
        .setLabel(`${shuffledAnswers[3]}`)
        .setStyle(ButtonStyle.Secondary);

      const answerChoices = new ActionRowBuilder().addComponents(
        choice1,
        choice2,
        choice3,
        choice4
      );

      const embeddedQuestion = new EmbedBuilder()
        .setColor("#ffce47")
        .setTitle(`${quizQuestion.question}`);

      const sentQuestion = await interaction.reply({
        embeds: [embeddedQuestion],
        components: [answerChoices],
      });

      const collector2 = sentQuestion.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 30000, // Time limit for user interaction in milliseconds
      });
      collector2.on("collect", (interaction2) => {
        const selectedAnswer = interaction2.customId; // The answer the user selected.
        checkAnswer(selectedAnswer, interaction2); // Check to see if the answer the user selected is the correct answer choice.
        collector2.stop(); //Ends the collector after the user has selected an answer.
      });

      // After 30 seconds, if an answer isn't selected the request times out.
      collector2.on("end", (collected) => {
        const timeoutEmbed = new EmbedBuilder()
          .setColor("#ffce47")
          .setTitle(`Request timed out...`);

        if (collected.size === 0) {
          message.channel.send({ embeds: [timeoutEmbed] });
        }
      });

      //Function for checking whether the selected answer is correct and sending feedback accordingly.
      async function checkAnswer(answerChoice, interaction2) {
        //If the chosen answer and the correct answer match, send positive feedback.
        if (answerChoice === quizQuestion.correctAnswer) {
          const successEmbed = new EmbedBuilder()
            .setColor("#00ff00")
            .setTitle("Correct!")
            .setDescription(
              `Great job, ${interaction2.user.username}! "${answerChoice}" was the correct answer!`
            );

          await interaction2.reply({
            embeds: [successEmbed],
          });
        } else {
          //If the chosen answer and the correct answer match, send positive feedback.
          const failureEmbed = new EmbedBuilder()
            .setColor("#ff0000")
            .setTitle("Incorrect!")
            .setDescription(
              `${interaction2.user.username} you selected the wrong answer... The correct answer is ${quizQuestion.correctAnswer}. Keep studying you got this!`
            );

          await interaction2.reply({
            embeds: [failureEmbed],
          });
        }
      }
    }
  }
});

/* //////////////////////////////////////////////// */
/* //    CODING INTERVIEW QUESTIONS BY SUBJECT   // */
/* //////////////////////////////////////////////// */

client.on("messageCreate", (message2) => {
  let interviewQuestions;

  // Ignore messages from bots
  if (message2.author.bot) return;

  //Check if message2 starts with the prefix !interview
  if (message2.content.startsWith("!interview")) {
    message2.channel.send("Generating an interview question...");

    //Defining the menu for selecting a subject
    //If adding a set of questions for another subject here is where you will add the option for it in the subject selection menu.
    const interviewSelect = new StringSelectMenuBuilder()
      .setCustomId("interviewSelector")
      .setPlaceholder("Subjects")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("algorithmicQuestions")
          .setValue("algorithmicQuestions"),
        new StringSelectMenuOptionBuilder()
          .setLabel("dataStructureQuestions")
          .setValue("dataStructureQuestions")
      );

    const rowInterview = new ActionRowBuilder().addComponents(interviewSelect);

    openSubjectSelect();
    //Calling the function to generate the subject selection menu.

    //This is the function that generates the subject selection menu.
    async function openSubjectSelect() {
      await message2.reply({
        content: "What subject would you like a question about?",
        components: [rowInterview],
      });
      const collector3 = message2.channel.createMessageComponentCollector({
        time: 30000, // Time limit for user interaction in milliseconds
      });

      collector3.on("collect", (interaction3) => {
        const subject = interaction3.values[0]; // The selected subject will be the only entry in the values array at index [0]

        generateSubjectQuestion(subject, interaction3); //Calls on the function to generate a quiz question based on the subject selected.
        collector3.stop();
      });

      //After 30 seconds, if a subject isn't selected the request times out.
      collector3.on("end", (collected) => {
        if (collected.size === 0) {
          message2.reply("Request timed out...");
        }
      });
    }

    // This is the function that generates the interview question based on the subject that's fed in as a parameter.
    // When adding a new subject, add an if statement to direct the function to the right question set.
    async function generateSubjectQuestion(choice, interaction3) {
      //Algorithm
      if (choice == "algorithmicQuestions") {
        const randomIndexInterview = Math.floor(
          Math.random() * algorithmicQuestions.length
        );
        interviewQuestions = await algorithmicQuestions[randomIndexInterview];
        console.log(interviewQuestions);
      }

      //Data Structures
      if (choice == "dataStructureQuestions") {
        const randomIndexInterview = Math.floor(
          Math.random() * dataStructureQuestions.length
        );
        interviewQuestions = await dataStructureQuestions[randomIndexInterview];
        console.log(interviewQuestions);
      }
      openInterviewQuestionMenu(interaction3, interviewQuestions);
    }

    //Defining the buttons for the interview answers

    function shuffleInterviewArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    //Function for sending the message to the discord channel.
    async function openInterviewQuestionMenu(interaction3, interviewQuestions) {
      const shuffledAnswers = shuffleInterviewArray([
        ...interviewQuestions.allAnswers,
        interviewQuestions.correctAnswer,
      ]);
      const choice1 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[0]}`)
        .setLabel(`${shuffledAnswers[0]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice2 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[1]}`)
        .setLabel(`${shuffledAnswers[1]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice3 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[2]}`)
        .setLabel(`${shuffledAnswers[2]}`)
        .setStyle(ButtonStyle.Secondary);
      const choice4 = new ButtonBuilder()
        .setCustomId(`${shuffledAnswers[3]}`)
        .setLabel(`${shuffledAnswers[3]}`)
        .setStyle(ButtonStyle.Secondary);

      const interviewAnswerChoices = new ActionRowBuilder().addComponents(
        choice1,
        choice2,
        choice3,
        choice4
      );

      const sentSubjectQuestion = await interaction3.reply({
        content: `${interviewQuestions.question}`,
        components: [interviewAnswerChoices],
      });

      const collector4 = sentSubjectQuestion.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 30000,
      });
      collector4.on("collect", async (interaction4) => {
        const selectedSubjectAnswer = interaction4.customId;
        checkSubjectAnswer(selectedSubjectAnswer, interaction4);
        collector4.stop();
      });
      collector4.on("end", (collected) => {
        if (collected.size === 0) {
          message2.reply("Request timed out...");
        }
      });

      async function checkSubjectAnswer(
        selectedSubjectAnswer,
        interviewInteraction
      ) {
        if (selectedSubjectAnswer === interviewQuestions.correctAnswer) {
          const successEmbed = new EmbedBuilder()
            .setColor("#00ff00")
            .setTitle("Correct!")
            .setDescription("You selected the correct answer!");

          await interviewInteraction.reply({
            embeds: [successEmbed],
          });
        } else {
          const failureEmbed = new EmbedBuilder()
            .setColor("#ff0000")
            .setTitle("Incorrect!")
            .setDescription("You selected the wrong answer!");

          await interviewInteraction.reply({
            embeds: [failureEmbed],
          });
        }
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

client.on("messageCreate", async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  //Ignore if not prefixed with !
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "question") {
    //get random question from questions.json
    const question = questions[Math.floor(Math.random() * questions.length)];

    //Extract the function name and format it if it has a space and make it camelCase
    //const functionName = question.name;
    //const functionName = question.name.replace(/\s/g, '');
    const functionName = question.name
      .replace(/\s/g, "")
      .replace(/^(.)/, (_, c) => c.toUpperCase());
    // const params = question.tests.map(params => `\n ${params.input}`);

    //Generate code block with the function name and params, and embedded
    const codeBlock = `\`\`\`javascript \n function ${functionName}() { \n //Your code here \n } \n \`\`\``;
    const description = ` \n ${question.description} \n`;

    console.log(codeBlock);
    console.log(question.tests);

    const embed = new EmbedBuilder()
      .setColor("#FFD801")
      .setTitle("Code Challenge")
      .setDescription(
        `Please write the code for the following function:\n ${description} \n\n${codeBlock}\n\nPlease write your code in the chat below.`
      )
      .addFields({
        name: "Input parameters:",
        value: `\n ${question.tests.map((params) => `\n ${params.input}`)}`,
      });

    const formMessage = await message.channel.send({ embeds: [embed] });

    //Create a message collector to collect the user's code
    // const collector = message.channel.createMessageCollector(message.channel, m => author.id === m.author.id, {time: 60000}) // 60 seconds;

    // collector.on('collect', async (inputMessage) => {
    //   //Extract the code from the message
    //   const code = inputMessage.content;

    //   try {
    //     //Evaluate the code
    //     const script = new vm.Script(code);

    //   } catch (error) {

    //   }

    // })
  }

  //Check if message starts with the prefix
  //   if (message.content.startsWith("!question")) {
  //     message.channel.send("Generating a new question...");
  //     // Get random question from questions.json
  //     // Send question to channel

  //     const randomIdx = Math.floor(Math.random() * questions.length);
  //     const question = questions[randomIdx];
  //     console.log(question);

  //     message.channel.send(
  //       `Question:\n${question.name}\n\n${question.description}`
  //     );
  //   }

  // //Checking code for errors logic
  // if (message.content.startsWith("!check")){
  //   message.channel.send("Running your code...");

  // }
});

const executeCode = (code) => {
  return new Promise((resolve, reject) => {
    //Spawn a new Node.js process
    const childProcess = spawn("node", ["-e", code]);
    console.log(childProcess, "childProcess");
    console.log(code, "code");

    let stdout = "";
    let stderr = "";

    //Capture stdout and stderr output from the child process
    childProcess.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    childProcess.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    //handle process exit
    childProcess.on("exit", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(
          new Error(`Child process exited with code ${code}. Stderr: ${stderr}`)
        );
      }
    });
  });
};

client.login(process.env.TOKEN);
