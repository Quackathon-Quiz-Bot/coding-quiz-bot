require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "quiz-question",
    description: "Generates new quiz question.",
  },
  {
    name: "answer",
    description: "Allows you to send your answer to the bot."
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash commands have been registered!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();