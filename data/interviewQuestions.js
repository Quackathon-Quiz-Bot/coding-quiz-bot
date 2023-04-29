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

  {
    question: "What is a hash table?",
    correctAnswer: "A data structure that maps keys to values.",
    allAnswers: [
      "A table that stores only hash values.",
      "A table where only hash browns can be stored.",
      "A table where hashish is legally consumed.",
    ],
  },
  {
    question: "What is a callback function?",
    correctAnswer:
      "A function that is passed as an argument to another function and is executed when the first function is completed.",
    allAnswers: [
      "A function that calls itself",
      "A function that is used to format text",
      "A function that returns a value to another function.",
    ],
  },
  {
    question: "What is a git repository?",
    correctAnswer: "A directory where a git project is stored.",
    allAnswers: [
      "A type of file format",
      "A program for managing databases",
      "A way to delete files permanently.",
    ],
  },

  {
    question:
      "const arr = [1, 2, 3]; arr.forEach(function () {console.log('hi!');})",
    correctAnswer: "hi!",
    allAnswers: ["[1,2,3]", "1, 2, 3", "{[1,2,3], [1,2,3], [1,2,3]}"],
  },
  {
    question: "What does the map() function return in JavaScript?",
    correctAnswer: "A new array with each element mapped to a new value",
    allAnswers: [
      "A boolean value indicating if a condition is met.",
      "An object containing the original array's elements.",
      "A string representation of the mapped array's elements.",
    ],
  },

  {
    question: "Write a function to reverse a string.",
    correctAnswer: "str.split('').reverse().join('')",
    allAnswers: [
      "str.reverse()",
      "str.split('').join()",
      "str.split('').reverse().join('')",
    ],
  },
  {
    question: "Write a function to return the highest value in an array.",
    correctAnswer: "Math.max(...arr)",
    allAnswers: ["arr.max()", "Math.min(...arr)", "Math.max(...arr)"],
  },
  {
    question: "Write a function to remove all vowels from a string.",
    correctAnswer: "str.replace(/[aeiou]/gi, '')",
    allAnswers: [
      "str.replaceAll(/[aeiou]/g, '')",
      "str.split('').filter(c => !'aeiou'.includes(c)).join('')",
      "str.replace(/[aeiou]/gi, '')",
    ],
  },
  {
    question:
      "Write a function to calculate the sum of the even numbers in an array.",
    correctAnswer:
      "arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0)",
    allAnswers: [
      "arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0)",
      "arr.filter(num => num % 2 === 0).reduce((acc, num) => acc * num, 1)",
      "arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0)",
    ],
  },
  {
    question: "Write a function to find the second largest number in an array.",
    correctAnswer: "arr.sort((a, b) => b - a)[1]",
    allAnswers: [
      "arr.sort((a, b) => a - b)[1]",
      "arr.sort((a, b) => b - a)[0]",
      "arr.sort((a, b) => a - b)[arr.length - 2]",
    ],
  },
  {
    question: "What is a dynamic data structure in computer science?",
    correctAnswer:
      "A data structure that can grow or shrink in size during the execution of a program.",
    allAnswers: [
      "A data structure that has a fixed size.",
      "A data structure that is used to store data in a database.",
      "A data structure that follows the Last-In-First-Out (LIFO) principle.",
    ],
  },
  {
    question: "What is a brute-force algorithm in computer science?",
    correctAnswer:
      "An approach to that involves trying every possibility for a solution.",
    allAnswers: [
      "An algorithm that recursively breaks down a problem into subproblems.",
      "An algorithm that uses heuristics to find approximate solutions.",
      "An algorithm that applies a set of rules or procedures to solve a problem.",
    ],
  },
  {
    question:
      "What is the difference between a stack and a queue data structure?",
    correctAnswer: "Stack: LIFO, Queue: FIFO",
    allAnswers: [
      "Stack: FIFO, Queue: LIFO",
      "Stack: used for caching, Queue: used for sorting",
      "Stack: used for sorting, Queue: used for caching",
    ],
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
      "Use Object.entries() instead of Object.values()",
      "Call the filter() method on the object directly",
      "Use Object.keys() instead of Object.values()",
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
    allAnswers: ["arr1.push(arr2)", "arr1.join(arr2)", "arr1.add(arr2)"],
  },

  {
    question: "Check if an array includes a certain value:",
    correctAnswer: "arr.includes(value);",
    allAnswers: [
      "arr.include(value)",
      "arr.contains(value)",
      "arr.check(value)",
    ],
  },

  {
    question: "Find the index of an element in an array:",
    correctAnswer: "arr.indexOf(elem);",
    allAnswers: ["arr.elemIndex(elem);", "arr.find(elem);", "arr.pos(elem);"],
  },

  {
    question: "Convert a string to lowercase:",
    correctAnswer: "str.toLowerCase();",
    allAnswers: ["str.caseChange();", "str.upperCase();", "str.toLower();"],
  },
  {
    question: "Remove falsy values from an array:",
    correctAnswer: "arr.filter(Boolean);",
    allAnswers: ["arr.removeFalsy();", "arr.excludeFalsy();", "arr.cleanse();"],
  },
  {
    question: " Sort an array of objects by a property value:",
    correctAnswer: "arr.sort((a, b) => a.prop - b.prop);",
    allAnswers: [
      "arr.sortBy(a.prop, b.prop);",
      "arr.orderBy(a.prop, b.prop);",
      "arr.arrangeBy(a.prop, b.prop);",
    ],
  },
];

module.exports = {
  dataStructureQuestions,
  algorithmicQuestions,
};
