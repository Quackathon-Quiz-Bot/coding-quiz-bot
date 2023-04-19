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
      "Hypertext Makeup Language",
      "HTML Markup Language",
      "Hypertext Markup Language",
      "Hyper Markup Language",
    ],
  },
  {
    question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
    correctAnswer:
      "The <!DOCTYPE> declaration in HTML specifies the document type and version of HTML being used",
    allAnswers: [
      "The <!DOCTYPE> declaration in HTML specifies the color scheme of the web page",
      "The <!DOCTYPE> declaration in HTML specifies the programming language used to create the web page",
      "The <!DOCTYPE> declaration in HTML is not necessary and can be omitted",
      "The <!DOCTYPE> declaration in HTML specifies the document type and version of HTML being used",
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
