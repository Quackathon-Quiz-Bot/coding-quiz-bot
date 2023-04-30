// Function to evaluate user-submitted solution
/* ///////////////////////////////  */ 
/* //      EXPERIMENTAL CODE    //  */
/* //////////////////////////////// */
/* //      IM WORKING ON IT..    // */
/* //      WILL DELETE IF..      // */
/* //      PROVES USELESS ...    // */
/* //////////////////////////////// */
/* ///////   SIGNED NL    ///////// */


const evaluateSolution = (name, solution) => {
    // Load the question and test cases from the questions.json file
    const questions = require('../data/leetQuestions.json');
    const question = questions.find((question) => question.name === name);

    if (!question) {
        throw new Error(`Question not found: ${name}`);
    }

    // Extract input and output from the test cases for the question
    const inpuTests = question.tests.map((test) => test.input);
    const outputTests = question.tests.map((test) => test.output);
    const targetTests = question.tests.map((test) => test.target || null); // Optional target parameter

    // Evaluate the solution against test cases
    const results = inpuTests.map((input, index) => {
        const output = solution(input, targetTests[index]); // Pass the input and target to the function
        const expectedOutput = outputTests[index];
        const isCorrect = output === expectedOutput; // Compare the actual output with the expected output
        return {
            input,
            output,
            expectedOutput,
            isCorrect
        };
    });

    return results;

}

module.exports = evaluateSolution;