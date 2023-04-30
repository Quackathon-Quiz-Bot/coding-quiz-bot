# coding-quiz-bot
This project contains a Discord bot that generates coding questions to keep users skills sharp, built using discord.js. 


![image](https://user-images.githubusercontent.com/113493052/235358293-c15b1857-8daa-4c08-b259-2700ecd26f5e.png)

#Project Structure

├── data    -> file holding the sets of questions generated by the bot
│   ├── interviewQuestions.js 
│   ├── leetQuestions.json
│   ├── quizWuestions.js
├── src
│   ├── evaluateSolution.js    -> Helper function for leetcode style question evaluation
│   ├── index.js    -> Main bot functionality
├── tests
│   ├── evaluateSolution.tests.js    -> Helper function for leetcode style question evaluation
├── .env.sample    -> sample .env file
├── package.json
├── README.md
└── .gitignore

#Running the Bot Locally

- Install Node JS
- Create a Discord app on on the Developer Portal, add a bot with applications.commands and bot permissions. The bot must be able to read messages/view channels, send messages, and embed links.
- Clone and open the project
- Install dependencies with `npm install`
- Create a .env file following the instructions in the .env.sample file
- Run the app using `npm run start`
