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
      const shuffledAnswers = shuffleArray([
        ...quizQuestion.allAnswers,
        quizQuestion.correctAnswer,
      ]);
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

//   openLanguageSelect(); //Calling the function to generate the language selection menu.

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

client.on("messageCreate", async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  //Ignore if not prefixed with !
  if (!message.content.startsWith(prefix)) return;
  const args= message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'question'){
    //get random question from questions.json
    const question = questions[Math.floor(Math.random() * questions.length)];

    //Extract the function name and format it if it has a space and make it camelCase
    //const functionName = question.name;
    //const functionName = question.name.replace(/\s/g, '');
    const functionName = question.name.replace(/\s/g, '').replace(/^(.)/, (_, c) => c.toUpperCase());
    // const params = question.tests.map(params => `\n ${params.input}`);

    //Generate code block with the function name and params, and embedded
    const codeBlock = `\`\`\`javascript \n function ${functionName}() { \n //Your code here \n } \n \`\`\``;
    const description = ` \n ${question.description} \n`;

    console.log(codeBlock);
    console.log(question.tests);

    const embed = new EmbedBuilder()
    .setColor('#FFD801')
    .setTitle('Code Challenge')
    .setDescription(`Please write the code for the following function:\n ${description} \n\n${codeBlock}\n\nPlease write your code in the chat below.`)
    .addFields({name:'Input parameters:', value:`\n ${question.tests.map(params => `\n ${params.input}`)}`});

    const formMessage = await message.channel.send({embeds: [embed]});

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
})

const executeCode = (code) => {
  return new Promise((resolve, reject) => {
      //Spawn a new Node.js process
      const childProcess = spawn('node', ['-e', code]);
      console.log(childProcess, 'childProcess')
      console.log(code, 'code')

      let stdout = '';
      let stderr = '';

      //Capture stdout and stderr output from the child process
      childProcess.stdout.on('data', (data) => {
          stdout += data.toString();
  })

  childProcess.stderr.on('data', (data) => {
      stderr += data.toString();
  })

  //handle process exit
  childProcess.on('exit', (code) => {
      if (code === 0) {
          resolve(stdout);
      } else {
          reject(new Error(`Child process exited with code ${code}. Stderr: ${stderr}`));
      }
  })

  }

)}


client.login(process.env.TOKEN);
