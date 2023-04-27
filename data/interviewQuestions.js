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
  //Misc.
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
  {
    question: "Check if a number is prime:",
    correctAnswer:
      "const isPrime = num => { for(let i = 2; i < num; i++) if(num % i === 0) return false; return num > 1; }",
    allAnswers: [
      "const isPrime = num => { return num % 2 === 0; }",
      "fetch(`server.com/check-prime?num=` + num)",
      "const isPrime = num => { return Math.sqrt(num) % 1 === 0; }",
    ],
  },

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

dataStructureQuestions = [
  //Object Methods
  {
    question: "What does Object.keys() return in JavaScript?",
    correctAnswer: "An array of an object's enumerable property names.",
    allAnswers: [
      "Object.values() in reverse order.",
      "Returns a random property of the object.",
      "Returns the object's memory address.",
    ],
  },
  {
    question: "How to get an object's keys as an array in JavaScript?",
    correctAnswer: "Object.keys(myObject)",
    allAnswers: [
      "Object.values(myObject)",
      "Object.getOwnPropertyNames(myObject)",
      "Object.myObject.keys()",
    ],
  },
  {
    question: "How to access object property using this?",
    correctAnswer: "Use dot notation and this keyword",
    allAnswers: [
      "A function for mapping through an array",
      "An API request to the server",
      "A mathematical problem",
    ],
  },
  {
    question:
      "How can you filter out specific values from an object and return them as an array using Object.values in JavaScript? Provide an example.",
    correctAnswer: "Object.values(obj).filter(val => val !== 'specificValue')",
    allAnswers: [
      "A function for mapping through an array",
      "An API request to the server",
      "A mathematical problem",
    ],
  },

  //Array Methods
  {
    question: "Find the length of an array:",
    correctAnswer: "arr.length",
    allAnswers: ["array.length", "arr.lgth", "arr.pop"],
  },
  {
    question: "Concatenate two arrays:",
    correctAnswer: "arr1.concat(arr2)",
    allAnswers: ["array.length", "arr.lgth", "arr.pop"],
  },

  {
    question: "Check if an array includes a certain value:",
    correctAnswer: "arr.includes(value);",
    allAnswers: ["array.length", "arr.lgth", "arr.pop"],
  },

  {
    question: "Find the index of an element in an array:",
    correctAnswer: "arr.indexOf(elem);",
    allAnswers: ["array.length", "arr.lgth", "arr.pop"],
  },

  {
    question: "Convert a string to lowercase:",
    correctAnswer: "str.toLowerCase();",
    allAnswers: ["array.length", "arr.lgth", "arr.pop"],
  },
  {
    question: "Remove falsy values from an array:",
    correctAnswer: "arr.filter(Boolean);",
    allAnswers: [
      "A function for mapping through an array",
      "An API request to the server",
      "A mathematical problem",
    ],
  },
  {
    question: " Sort an array of objects by a property value:",
    correctAnswer: "arr.sort((a, b) => a.prop - b.prop);",
    allAnswers: [
      "A function for mapping through an array",
      "An API request to the server",
      "A mathematical problem",
    ],
  },
];

module.exports = {
  dataStructureQuestions,
  algorithmicQuestions,
};
