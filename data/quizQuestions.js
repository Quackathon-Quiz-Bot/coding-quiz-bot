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
      "Colorful Style Sheets"
    ] 
  },
  { 
    question: "How would you link your stylesheet to your HTML (in the HTML file)?", 
    correctAnswer: "<link rel='stylesheet' href='style.css'>", 
    allAnswers: [
      "<link rel='stylesheet'>", 
      "<link rel='style.css'>", 
      "<link rel='style.css' href='stylesheet'>"
    ] 
  },
  { 
    question: "Where in the HTML file would you link your stylesheet(s)?", 
    correctAnswer: "In the <head> section", 
    allAnswers: [
      "In the <body> section", 
      "Outside of the <html> section", 
      "Inside the <html> section, but outside of <head> and <body>"
    ] 
  },
  { 
    question: "What is the correct format for inserting comments in a CSS file?", 
    correctAnswer: "/* comment */", 
    allAnswers: [
      "// comment //", //javascript comment
      "<!-- comment -->", //html comment
      "# comment" //python comment
    ] 
  },
  { 
    question: "Which of these is an incorrect way to format the color white in CSS?", 
    correctAnswer: "None of these", 
    allAnswers: [
      "#FFFFFF", //hex
      "white", //one of CSS's default named colors
      "rgb(255, 255, 255)" //rgb
    ] 
  },
  { 
    question: "How would you select an element with a specific id in CSS?", 
    correctAnswer: "#id", 
    allAnswers: [
      ".id", 
      "id", 
      "*id"
    ] 
  },
  { 
    question: "How would you select elements with a specific class in CSS?", 
    correctAnswer: ".class", 
    allAnswers: [
      "#class", 
      "class", 
      "*class"
    ] 
  },
  { 
    question: "Which of the following would be the correct syntax for giving all h1 elements a black font-color?", 
    correctAnswer: "h1 {color: black}", 
    allAnswers: [
      "h1: color = black", 
      "*h1 {color = black}", 
      "{h1: black}"
    ] 
  },
  { 
    question: "Which of the following would be the correct syntax for selecting all p elements inside of a div with the id 'id'?", 
    correctAnswer: "#id p", 
    allAnswers: [
      "#id.p", 
      "#id + p", 
      "#id, p"
    ] 
  },
  { 
    question: "Which of the following would be the correct syntax for giving all <aside> elements and anything with the class name 'class' a padding of 5 pixels?", 
    correctAnswer: "aside, .class {padding: 5px}", 
    allAnswers: [
      "aside, .class {padding: 5p", 
      "aside .class {padding: 5px}", 
      "{aside, .class: padding = 5px}"
    ] 
  },
  { 
    question: "What is the default value of the position property if not changed manually?", 
    correctAnswer: "static", 
    allAnswers: [
      "relative", 
      "absolute", 
      "fixed"
    ] 
  },
  { 
    question: "Which of the following is a pseudo-class?", 
    correctAnswer: ":hover", 
    allAnswers: [
      "::after", 
      "::before", 
      "::firstletter"
    ] 
  },
  { 
    question: "Which of the following is a pseudo-element?", 
    correctAnswer: "::first-letter", 
    allAnswers: [
      ":hover", 
      ":active", 
      ":nth-child"
    ] 
  },
  { 
    question: "How would you select for elements containing a specific attribute, such as divs containing a language attribute - <div lang='en-us'>?", 
    correctAnswer: "div[lang]", 
    allAnswers: [
      "div[lang|='en']", 
      "div:not([lang])", 
      "div[lang~='en-us']"
    ] 
  },
  { 
    question: "How would you select for elements containing a specific attribute and value, such as divs containing a language attribute and the US english property - <div lang='en-us'>?", 
    correctAnswer: "div[lang~='en-us']", 
    allAnswers: [
      "div[lang|='en']", 
      "div:not([lang])", 
      "div[lang]"
    ] 
  },
  { 
    question: "How would you select for elements that are the direct children of other elements, such as <li> that are the direct children of <ul>?", 
    correctAnswer: "ul > li", 
    allAnswers: [
      "ul li", 
      "ul + li", 
      "ul[li]"
    ] 
  },
  { 
    question: "Which At-rule allows you to build custom CSS animations?", 
    correctAnswer: "@keyframes", 
    allAnswers: [
      "@media", 
      "@animations", 
      "@import"
    ] 
  },
  { 
    question: "When applying specific border widths to all four-sides of a div using shorthand properties, in which order would the sides be listed?", 
    correctAnswer: "div {border-width: top right bottom left}", 
    allAnswers: [
      "div {border-width: top left bottom right}", 
      "div {border-width: top bottom left right}", 
      "div {border-width: left right top bottom}"
    ] 
  },
  { 
    question: "Which CSS selector has the highest specificity?", 
    correctAnswer: "#id", 
    allAnswers: [
      ".class", 
      "type", 
      "* universal"
    ] 
  },
  { 
    question: "Which CSS selector has the lowest specificity?", 
    correctAnswer: "* universal", 
    allAnswers: [
      ".class", 
      "type", 
      "#id"
    ] 
  },
];

javascriptQuestions = [
  { question: "How do you write a standard for loop?",
  correctAnswer: "for (let i = 0; i < variable.length; i++) {}",
   allAnswers: [
    "for{let i=0; i>variable.length; i++}()",
    "for(let i=0, i<variable.length, i++){}",
    "for{const i=0: i<variable.length: i++}()"] },
];

module.exports = {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
};
