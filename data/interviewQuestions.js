// Enter new interview question sets as an array of objects, each object representing a question.
// Each question object should have 3 key value pairs.
// {
// question: "A string"
// correctAnswer: "A string"
// allAnswers: ["An array", "of strings", "including all incorrect", "and correct answers"]
// }
// The correct answer should be included in all answers so the script can compare the answer the user chose to the correct answer value.
// Add your question set to the module exports at the bottom of the file.

interviewQuestions = [
  {
    question: "What is an API? How is it different from a web service?",
    correctAnswer:
      "An API (Application Programming Interface) is a set of protocols and tools for building software applications. A web service is a type of API that is accessed over the internet using standardized protocols such as HTTP. The main difference between an API and a web service is that an API can refer to any set of protocols for building software applications, while a web service specifically refers to an API that is accessed over the internet.",
    allAnswers: [
      "Hypertext Makeup Language",
      "HTML Markup Language",
      "Hypertext Markup Language",
      "Hyper Markup Language",
    ],
  },
  {
    question: "What is the name for a function that calls itself?",
    correctAnswer: "Recursive function",
  },
];

module.exports = {
  interviewQuestions,
};
