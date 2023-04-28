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
      "How would you link your scripts to your HTML (in the HTML file)?",
    correctAnswer: "<script src='script.js'></script>",
    allAnswers: [
      "<link src='script.js'></script>",
      "<link rel='script.js'></script>",
      "<script rel='script.js'></script>",
    ],
  },
  {
    question:
      "Which of the following HTML elements would be the largest heading?",
    correctAnswer: "<h1>",
    allAnswers: ["<h6>", "<head>", "<header size='large'>"],
  },
  {
    question:
      "How would you link your scripts to your HTML (in the HTML file)?",
    correctAnswer: "<script src='script.js'></script>",
    allAnswers: [
      "<link src='script.js'></script>",
      "<link rel='script.js'></script>",
      "<script rel='script.js'></script>",
    ],
  },
  {
    question:
      "Which of the following HTML elements can be used to insert a line break?",
    correctAnswer: "<br />",
    allAnswers: ["<hr />", "<break />", "<linebreak />"],
  },
  {
    question: "How would format an HTML element for a hyperlink?",
    correctAnswer: "<a href='http://www.url.com'>This is a link!</a>",
    allAnswers: [
      "<a url='http://www.url.com'>This is a link!</a>",
      "<link href='http://www.url.com'>This is a link!</link>",
      "<link url='http://www.url.com'>This is a link!</link>",
    ],
  },
  {
    question:
      "Which of the following HTML elements can be used to make a numbered list?",
    correctAnswer: "<ol>",
    allAnswers: ["<ul>", "<li>", "<list>"],
  },
  {
    question:
      "Which of the following HTML elements can be used to make a bulleted list?",
    correctAnswer: "<ul>",
    allAnswers: ["<ol>", "<li>", "<list>"],
  },
  {
    question:
      "Which of the following HTML elements can be used to make a toggle-able checkbox?",
    correctAnswer: "<input type='checkbox'>",
    allAnswers: [
      "<checkbox>",
      "<input type='check'>",
      "<input type='selection'>",
    ],
  },
  {
    question: "How would format an HTML element for inserting an image?",
    correctAnswer: "<img src='image.png'/>",
    allAnswers: [
      "<img href='image.png'/>",
      "<image src='image.png'/>",
      "<image href='image.png'/>",
    ],
  },
  {
    question: "What is the purpose of the aria-label attribute?",
    correctAnswer: "Labels an HTML element for accessibility.",
    allAnswers: [
      "It's used to add background music to a web page.",
      "It sets the font style of text on a webpage.",
      "It controls the animation speed of a webpage element.",
    ],
  },
  {
    question:
      "What is the correct format for inserting comments in an HTML file?",
    correctAnswer: "<!-- comment -->",
    allAnswers: [
      "// comment //", //javascript comment
      "/* comment */", //css comment
      "# comment", //python comment
    ],
  },
  {
    question:
      "Which HTML attribute indicates that a form input field must be filled with a value before submission?",
    correctAnswer: "required",
    allAnswers: ["validate", "mandatory", "important"],
  },
  {
    question: "Which of the following is not a valid HTML event attribute?",
    correctAnswer: "ontransitionend",
    allAnswers: ["onmouseover", "oninput", "onresize"],
  },
  {
    question:
      "Which of the following elements is used to define a container for navigation links?",
    correctAnswer: "<nav>",
    allAnswers: ["<header>", "<footer>", "<section>"],
  },
  {
    question: "What is the purpose of the 'defer' attribute in a script tag?",
    correctAnswer:
      "The script should not be executed until the page has finished parsing.",
    allAnswers: [
      "The script should be executed as soon as it is loaded.",
      "The script should be loaded asynchronously.",
      "The script should be executed before the page is loaded.",
    ],
  },
  {
    question:
      "Which of the following is not a valid value for the 'type' attribute in an input tag?",
    correctAnswer: "boolean",
    allAnswers: ["email", "password", "date"],
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
  {
    question: "What script does Javascript uses?",
    correctAnswer: "Client-side script",
    allAnswers: [
      "Server-side script",
      "Build-side script",
      "None of the above",
    ],
  },
  {
    question: "What does the `some()` method do in JavaScript?",
    correctAnswer:
      "Tests if at least 1 element in the array passes the provided function's test",
    allAnswers: [
      "Returns the 1st element that satisfies the provided testing function",
      "Tests if all elements in the array pass the provided function's test",
      "Tests if word some in within an array",
    ],
  },
  {
    question: "What does the `find()` method do in JavaScript?",
    correctAnswer:
      "Returns the value of the 1st element in an array that satisfies the function",
    allAnswers: [
      "Returns the index of the 1st element in an array that satisfies the function",
      "Removes the 1st element from an array that satisfies the function",
      "Sorts the elements of an array according to the provided testing function",
    ],
  },
  {
    question: "How do you use the `find()` method in JavaScript?",
    correctAnswer: "myArray.find(callbackFunction)",
    allAnswers: [
      "find(callbackFunction, myArray)",
      "myArray.find()",
      "find(callbackFunction, initialValue)",
    ],
  },
  {
    question: "What is recursion in JavaScript?",
    correctAnswer:
      "It's technique in which a function calls itself to solve a problem",
    allAnswers: [
      "Recursion is a built-in function in JavaScript used to solve complex problems",
      "Recursion is a method of looping through arrays in JavaScript",
      "Recursion is a way to define a function in JavaScript that returns a promise",
    ],
  },
  {
    question: "What example is a recursion function?",
    correctAnswer:
      "function fact(n) {if (n === 0) {return 1;} else {return n * fact(n - 1);} }",
    allAnswers: [
      "function myFunction(x) { return x * 2; }",
      "function add(a, b) { return a + b; }",
      "function square(x) { return x * x; }",
    ],
  },
  {
    question:
      "Why is it frowned upon to declare variables globally in JavaScript?",
    correctAnswer:
      "It can cause naming issues, affect performance & make it hard to track errors",
    allAnswers: [
      "It is not allowed in JavaScript.",
      "It makes it easy to share data between functions & that makes it easy to hack",
      "It's not frowned on & improves code readability and maintainability",
    ],
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    correctAnswer:
      "The 'this' keyword refers to the object that the function belongs to or is called on.",
    allAnswers: [
      "The 'this' keyword refers to the parent function of the current function.",
      "The 'this' keyword refers to the global object of the current execution context.",
      "The 'this' keyword refers to the last object that was created in memory.",
    ],
  },
  {
    question: "Which example is the correct way to use the 'this' keyword?",
    correctAnswer: "const myObj = { myMethod() { console.log(this); } };",
    allAnswers: [
      "const myObj = { myMethod: () => console.log(this) };",
      "function myFunction() { console.log(this); } myFunction();",
      "const myObj = { myMethod() { console.log(myObj); } };",
    ],
  },
  {
    question:
      "What happens when using 'this' as: const myObj={method:()=>console.log(this)}?",
    correctAnswer: "It would log the global object as the value of 'this'",
    allAnswers: [
      "It would log the object myObj as the value of 'this'",
      "It would throw an error because 'this' cannot be used inside an arrow function",
      "It would log 'undefined' as the value of 'this'",
    ],
  },
  {
    question: "Which symbol is used for comments in Javascript?",
    correctAnswer: "//",
    allAnswers: ["#", "/", "<!-- and -->"],
  },
  {
    question: "What is the difference between ViewState(VS) and SessionState(SS)?",
    correctAnswer: "VS stores info in the client-side while SS stores info in the server-side",
    allAnswers: [
      "VS stores info in the server-side while SS stores information in the client-side",
      "VS stores info in the database while SS stores info in memory.",
      "VS and SS are two different names for the same thing."
    ]
  },
  {
    question: "What are all the looping structures in JavaScript?",
    correctAnswer: "for, while, do-while, for-in, for-of",
    allAnswers: [
      "for, while, do-while, if-else, switch",
      "while, do-while, for-in, for-of, try-catch",
      "for, while, do-while, break, continue"
    ]
  },
  {
    question: "Which example shows how to write a do-while loop in JavaScript?",
    correctAnswer: "do { /* code here */ } while (condition);",
    allAnswers: [
      "while (condition) { /* code here */ } do;",
      "for (let i = 0; i < limit; i++) { /* code here */ }",
      "if (condition) { /* code here */ } else { /* code here */ }",
    ],
  },
  {
    question: "Which example shows how to write a for-of loop?",
    correctAnswer: "for (let element of myArray) { console.log(element); }",
    allAnswers: [
      "for (let i = 0; i < myArray.length; i++) { console.log(myArray[i]); }",
      "for (let key in myObject) { console.log(myObject[key]); }",
      "for (let element in myArray) { console.log(myArray[element]); }"
    ]
  }




];

module.exports = {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
};
