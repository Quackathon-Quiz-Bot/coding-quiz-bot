// Enter new question sets as an array of objects, each object representing a question.
// Each question object should have 3 key value pairs.
// {
// question: "A string"
// correctAnswer: "A string"
// allAnswers: ["An array", "of strings", "including all incorrect", "and correct answers"]
// }
// The correct answer should be included in all answers so the script can compare the answer the user chose to the correct answer value.
// Add your question set to the module exports at the bottom of the file.

htmlQuestions = [
  {
    question: "What does HTML stand for?",
    correctAnswer: "Hypertext Markup Language",
    allAnswers: [
      "HTML Markup Language",
      "Hardcode Markup Language",
      "Hyper Markup Language",
    ],
  },
  {
    question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
    correctAnswer:
      "<!DOCTYPE> declaration in HTML specifies document type and version of HTML",
    allAnswers: [
      "<!DOCTYPE> programming language in HTML specifies webpage creation",
      "<!DOCTYPE> declaration in HTML is not necessary and can be omitted",
      "<!DOCTYPE> declaration in HTML sets the background color of the web page",
    ],
  },
];

cssQuestions = [
  { question: "", correctAnswer: "", allAnswers: ["", "", "", ""] },
];

javascriptQuestions = [
  { question: "", correctAnswer: "", allAnswers: ["", "", "", ""] },
];

module.exports = {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
};
