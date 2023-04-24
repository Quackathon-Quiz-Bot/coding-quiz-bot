// Enter new interview question sets as an array of objects, each object representing a question.
// Each question object should have 3 key value pairs.
// {
// question: "A string"
// correctAnswer: "A string"
// allAnswers: ["An array", "of strings", "including all incorrect", "and correct answers"]
// }
// The correct answer should be included in all answers so the script can compare the answer the user chose to the correct answer value.
// Add your question set to the module exports at the bottom of the file.

algorithmicQuestions = [
  {
    question: "What is an Algorithm?",
    correctAnswer:
      "A set of rules to obtain the expected output from the given input",
    allAnswers: [
      "A function for mapping through an array",
      "An API request to the server",
      "A mathematical problem",
    ],
  },
];

dataStructureQuestions = [
  {
    question: "What is an API?",
    correctAnswer: "Application Programming Interface",
    allAnswers: [
      "Application Procedure Interface",
      "Access Practical Internet",
      "Application Programming Interaction",
    ],
  },
  {
    question: "What is the name for a function that calls itself?",
    correctAnswer: "Recursive function",
    allAnswers: ["Return", "Reserve function", "While Loop"],
  },
];

module.exports = {
  dataStructureQuestions,
  algorithmicQuestions,
};
