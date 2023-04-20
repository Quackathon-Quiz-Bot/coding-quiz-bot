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
  { question: "", correctAnswer: "", allAnswers: ["", "", ""] },
];

javascriptQuestions = [
  { question: "How do you write a standard for loop?",
  correctAnswer: "for (let i = 0; i < variable.length; i++) {}",
   allAnswers: [
    "for{let i=0; i>variable.length; i++}()",
    "for(let i=0, i<variable.length, i++){}",
    "for{const i=0: i<variable.length: i++}()"
  ] },
  { question: "Which of the following is not a primitive data type in JavaScript?",
  correctAnswer: "array",
  allAnswers: [
    "string",
    "boolean",
    "integer"
  ] },
    { question: "How do your write an if statement?",
  correctAnswer: "if(//condition){//what to do}",
  allAnswers: [
    "if //condition then //what to do",
    "if{//condition}(//what to do)",
    "if(//condition) then //what to do"
  ] },
    { question: "What does DOM stand for?",
  correctAnswer: "Document Object Model (DOM)",
  allAnswers: [
    "Direct Object Model (DOM)",
    "Data Object Model (DOM)",
    "Document Oriented Model"
  ] },
  { question: "What is the DOM (Document Object Model)?",
  correctAnswer: "The structure and organization of web documents",
  allAnswers: [
    "A programming language used to create web pages",
    "A browser extension for accessing websites",
    "A system for storing website data"
  ] },
  { question: "What is the main difference between forEach and Map",
  correctAnswer: "forEach iterates over an array and changes its elements, while Map creates a new array with the same length",
  allAnswers: [
    "forEach and Map both create a new array, but Map only works with numbers",
    "There is no difference, they are interchangeable",
    "Map iterates over an array and changes its elements, while forEach creates a new array with the same length"
  ] },
  {
    question: "What is the correct way to convert a string to uppercase in JavaScript?",
    correctAnswer: "myString.toUpperCase()",
    allAnswers: [
    "myString.toUpperCase",
    "toUppercase(myString)",
    "toUpperCase(myString)"
    ]
    },
    {
      question: "How do you find the length of a string in JavaScript?",
      correctAnswer: "myString.length",
      allAnswers: [
      "myString.length()",
      "myString.len",
      "length(myString)"
      ]
      },
      {
        question: "What does JSON stand for?",
        correctAnswer: "JavaScript Object Notation",
        allAnswers: [
        "JavaScript Online Network",
        "JSON Object Notation",
        "Justify Organized Notation"
        ]
        },
        {
          question: "What is an example of JSON?",
          correctAnswer: `{"name":"Jessy", "age":37, "car":"Kia"}`,
          allAnswers: [
            "[1, 2, 3, 4]",
            "'{name: 'John', age: 25}'",
            "function(){return '{name: 'Jessy', age:37, car: 'Kia'}';}"
          ]
          },
          {
            question: "What is the difference between '==' and '===' in JavaScript?",
            correctAnswer: `'===' compares values and types, while '==' compares only values`,
            allAnswers: [
              "'==' compares values and types, while '===' compares only values",
              "'==' and '===' are two different syntaxes for the same operator",
              "'===' is slower than '=='"
            ]
            },
            {
              question: "What is the difference between the logical OR operator (||) and the logical AND operator (&&)?",
              correctAnswer: "The OR operator returns true if one of its operands is true, the AND operator returns true only if both are true",
              allAnswers: [
                "The AND operator returns true if one of its operands is true, the OR operator returns true only if both are true",
                "The logical OR operator always returns false, while the logical AND operator always returns true.",
                "There is no difference between the two operators."
              ]
            },
            {
              question: "What is the correct syntax for joining elements of an array with a separator using the `join()` method?",
              correctAnswer: "array.join(separator)",
              allAnswers: [
                "array.join",
                "join.array(separator)",
                "array.join()separator",
              ]
            },
            {
              question: "How do you remove the last element of an array? const array=[dog, cat, bird, hamster]",
              correctAnswer: "array.pop()",
              allAnswers: [
                "array.pop(hamster)",
                "shift.array",
                "array.shift()",
              ]
            },
            {
              question: "How do you remove the first element of an array? const array=[dog, cat, bird, hamster]",
              correctAnswer: "array.shift()",
              allAnswers: [
                "array.pop(hamster)",
                "shift.array",
                "array.pop()",
              ]
            },
            {
              question: "How do you add to the first element of an array? const array=[dog, cat, bird, hamster]",
              correctAnswer: "array.unshift(fish)",
              allAnswers: [
                "array.push(fish)",
                "unshift.array.fish",
                "array.shift(fish)",
              ]
            },
            {
              question: "How do you add to the end elements of an array? const array=[dog, cat, bird, hamster]",
              correctAnswer: "array.push(fish)",
              allAnswers: [
                "array.unshift(fish)",
                "push.array.fish",
                "array.shift(fish)",
              ]
            },






];

module.exports = {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
};
