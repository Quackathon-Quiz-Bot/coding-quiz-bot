// Enter new question sets as an [array of {objects}] , each object representing a question.
// Each question object should have 3 key value pairs.
// {
// question: "A string"
// correctAnswer: "A string"
// allAnswers: ["An array of", "strings including", "three incorrect answers"]
// }
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
  {
    question: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheets",
    allAnswers: [
      "Creating Simple Styles",
      "Cascading Simple Styles",
      "Colorful Style Sheets",
    ],
  },
  {
    question:
      "How would you link your stylesheet to your HTML (in the HTML file)?",
    correctAnswer: "<link rel='stylesheet' href='style.css'>",
    allAnswers: [
      "<link rel='stylesheet'>",
      "<link rel='style.css'>",
      "<link rel='style.css' href='stylesheet'>",
    ],
  },
  {
    question: "Where in the HTML file would you link your stylesheet(s)?",
    correctAnswer: "In the <head> section",
    allAnswers: [
      "In the <body> section",
      "Outside of the <html> section",
      "Inside the <html> section, but outside of <head> and <body>",
    ],
  },
  {
    question:
      "What is the correct format for inserting comments in a CSS file?",
    correctAnswer: "/* comment */",
    allAnswers: [
      "// comment //", //javascript comment
      "<!-- comment -->", //html comment
      "# comment", //python comment
    ],
  },
  {
    question:
      "Which of these is an incorrect way to format the color white in CSS?",
    correctAnswer: "None of these",
    allAnswers: [
      "#FFFFFF", //hex
      "white", //one of CSS's default named colors
      "rgb(255, 255, 255)", //rgb
    ],
  },
  {
    question: "How would you select an element with a specific id in CSS?",
    correctAnswer: "#id",
    allAnswers: [".id", "id", "*id"],
  },
  {
    question: "How would you select elements with a specific class in CSS?",
    correctAnswer: ".class",
    allAnswers: ["#class", "class", "*class"],
  },
  {
    question:
      "Which of the following would be the correct syntax for giving all h1 elements a black font-color?",
    correctAnswer: "h1 {color: black}",
    allAnswers: ["h1: color = black", "*h1 {color = black}", "{h1: black}"],
  },
  {
    question:
      "Which of the following would be the correct syntax for selecting all p elements inside of a div with the id 'id'?",
    correctAnswer: "#id p",
    allAnswers: ["#id.p", "#id + p", "#id, p"],
  },
  {
    question:
      "Which of the following would be the correct syntax for giving all <aside> elements and anything with the class name 'class' a padding of 5 pixels?",
    correctAnswer: "aside, .class {padding: 5px}",
    allAnswers: [
      "aside, .class {padding: 5p",
      "aside .class {padding: 5px}",
      "{aside, .class: padding = 5px}",
    ],
  },
  {
    question:
      "What is the default value of the position property if not changed manually?",
    correctAnswer: "static",
    allAnswers: ["relative", "absolute", "fixed"],
  },
  {
    question: "Which of the following is a pseudo-class?",
    correctAnswer: ":hover",
    allAnswers: ["::after", "::before", "::firstletter"],
  },
  {
    question: "Which of the following is a pseudo-element?",
    correctAnswer: "::first-letter",
    allAnswers: [":hover", ":active", ":nth-child"],
  },
  {
    question:
      "How would you select for elements containing a specific attribute, such as divs containing a language attribute - <div lang='en-us'>?",
    correctAnswer: "div[lang]",
    allAnswers: ["div[lang|='en']", "div:not([lang])", "div[lang~='en-us']"],
  },
  {
    question:
      "How would you select for elements containing a specific attribute and value, such as divs containing a language attribute and the US english property - <div lang='en-us'>?",
    correctAnswer: "div[lang~='en-us']",
    allAnswers: ["div[lang|='en']", "div:not([lang])", "div[lang]"],
  },
  {
    question:
      "How would you select for elements that are the direct children of other elements, such as <li> that are the direct children of <ul>?",
    correctAnswer: "ul > li",
    allAnswers: ["ul li", "ul + li", "ul[li]"],
  },
  {
    question: "Which At-rule allows you to build custom CSS animations?",
    correctAnswer: "@keyframes",
    allAnswers: ["@media", "@animations", "@import"],
  },
  {
    question:
      "When applying specific border widths to all four-sides of a div using shorthand properties, in which order would the sides be listed?",
    correctAnswer: "div {border-width: top right bottom left}",
    allAnswers: [
      "div {border-width: top left bottom right}",
      "div {border-width: top bottom left right}",
      "div {border-width: left right top bottom}",
    ],
  },
  {
    question: "Which CSS selector has the highest specificity?",
    correctAnswer: "#id",
    allAnswers: [".class", "type", "* universal"],
  },
  {
    question: "Which CSS selector has the lowest specificity?",
    correctAnswer: "* universal",
    allAnswers: [".class", "type", "#id"],
  },
];

javascriptQuestions = [
  {
    question: "How do you write a standard for loop?",
    correctAnswer: "for (let i = 0; i < variable.length; i++) {}",
    allAnswers: [
      "for{let i=0; i>variable.length; i++}()",
      "for(let i=0, i<variable.length, i++){}",
      "for{const i=0: i<variable.length: i++}()",
    ],
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    correctAnswer: "array",
    allAnswers: ["string", "boolean", "integer"],
  },
  {
    question: "How do your write an if statement?",
    correctAnswer: "if(//condition){//what to do}",
    allAnswers: [
      "if //condition then //what to do",
      "if{//condition}(//what to do)",
      "if(//condition) then //what to do",
    ],
  },
  {
    question: "What does DOM stand for?",
    correctAnswer: "Document Object Model (DOM)",
    allAnswers: [
      "Direct Object Model (DOM)",
      "Data Object Model (DOM)",
      "Document Oriented Model",
    ],
  },
  {
    question: "What is the DOM (Document Object Model)?",
    correctAnswer: "The structure and organization of web documents",
    allAnswers: [
      "A programming language used to create web pages",
      "A browser extension for accessing websites",
      "A system for storing website data",
    ],
  },
  {
    question: "What is the main difference between forEach and Map",
    correctAnswer:
      "forEach modifies the array, Map creates a new one with equal length",
    allAnswers: [
      "forEach and Map both create a new array, but Map only works with numbers",
      "There is no difference, they are interchangeable",
      "Map modifies the array, forEach creates a new one with equal length",
    ],
  },
  {
    question:
      "What is the correct way to convert a string to uppercase in JavaScript?",
    correctAnswer: "myString.toUpperCase()",
    allAnswers: [
      "myString.toUpperCase",
      "toUppercase(myString)",
      "toUpperCase(myString)",
    ],
  },
  {
    question: "How do you find the length of a string in JavaScript?",
    correctAnswer: "myString.length",
    allAnswers: ["myString.length()", "myString.len", "length(myString)"],
  },
  {
    question: "What does JSON stand for?",
    correctAnswer: "JavaScript Object Notation",
    allAnswers: [
      "JavaScript Online Network",
      "JSON Object Notation",
      "Justify Organized Notation",
    ],
  },
  {
    question: "What is an example of JSON?",
    correctAnswer: `{"name":"Jessy", "age":37, "car":"Kia"}`,
    allAnswers: [
      "[1, 2, 3, 4]",
      "'{name: 'John', age: 25}'",
      "function(){return '{name: 'Jessy', age:37, car: 'Kia'}';}",
    ],
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    correctAnswer: `'===' compares values and types, while '==' compares only values`,
    allAnswers: [
      "'==' compares values and types, while '===' compares only values",
      "'==' and '===' are two different syntaxes for the same operator",
      "'===' is slower than '=='",
    ],
  },
  {
    question:
      "What is the difference between the logical OR operator (||) and the logical AND operator (&&)?",
    correctAnswer:
      "OR returns true if either operand is true, AND returns only if both are true",
    allAnswers: [
      "AND returns true if either operand is true, OR returns only if both are true",
      "OR always returns false, while AND always returns true",
      "There is no difference between the two operators",
    ],
  },
  {
    question:
      "What is the correct syntax for joining elements of an array with a separator using the `join()` method?",
    correctAnswer: "array.join(separator)",
    allAnswers: [
      "array.join",
      "join.array(separator)",
      "array.join()separator",
    ],
  },
  {
    question:
      "How do you remove the last element of an array? const array=[dog, cat, bird, hamster]",
    correctAnswer: "array.pop()",
    allAnswers: ["array.pop(hamster)", "shift.array", "array.shift()"],
  },
  {
    question:
      "How do you remove the first element of an array? const array=[dog, cat, bird, hamster]",
    correctAnswer: "array.shift()",
    allAnswers: ["array.pop(hamster)", "shift.array", "array.pop()"],
  },
  {
    question:
      "How do you add to the first element of an array? const array=[dog, cat, bird, hamster]",
    correctAnswer: "array.unshift(fish)",
    allAnswers: ["array.push(fish)", "unshift.array.fish", "array.shift(fish)"],
  },
  {
    question:
      "How do you add to the end elements of an array? const array=[dog, cat, bird, hamster]",
    correctAnswer: "array.push(fish)",
    allAnswers: ["array.unshift(fish)", "push.array.fish", "array.shift(fish)"],
  },
  {
    question:
      "How do return an element at specific index? const array=[dog, cat, bird, hamster]",
    correctAnswer: "array[0]",
    allAnswers: ["index.array(0)", "array.index[0]", "array at(index 0)"],
  },
  {
    question:
      "How do you join two or more strings using the `concat()` method?",
    correctAnswer: "string1.concat(string2)",
    allAnswers: [
      "concat(string1, string2)",
      "string1.join(string2)",
      "concat(string1).concat(string2)",
    ],
  },
  {
    question: "How do you use the `some()` method in JavaScript?",
    correctAnswer: "myArray.some(callbackFunction)",
    allAnswers: [
      "myArray.some()",
      "myArray.some(callbackFunction, initialValue)",
      "some(callbackFunction, myArray)",
    ],
  },
];

module.exports = {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
};
