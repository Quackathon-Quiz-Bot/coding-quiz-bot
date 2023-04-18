/* ///////////////////////////////  */ 
/* //      EXPERIMENTAL CODE    //  */
/* //////////////////////////////// */
/* //      IM WORKING ON IT..    // */
/* //      WILL DELETE IF..      // */
/* //      PROVES USELESS ...    // */
/* //////////////////////////////// */
/* ///////   SIGNED NL    ///////// */



const questions = require('../questions.json');
const evaluateSolution = require('../src/evaluateSolution');

//Loop through the questions
questions.forEach((question) => {
    const {name, tests} = question;
    console.log(question)
    console.log(name)
    console.log(tests)

    //Describe the block for the question
    describe(name, () => {
        //Loop through the tests for the question
        tests.forEach((test) => {
            const {input, output} = test;

            //Test case using jest
            test(`Input: ${input} - Expected output ${output}`, () => {
                // Call the function to test
                const actualOutput = evaluateSolution(name, input); // Pass the input to the function
                expect(actualOutput).toEqual(output); // Compare the actual output with the expected output 
        
            })
        })    
    }) 
}) 