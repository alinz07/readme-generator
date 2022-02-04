// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const {generateMarkdown} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your README file? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter the title of your README');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter a description of your project (Required)',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('Please enter a description of your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Installation',
    message: 'Provide installation instructions',
},
{
    type:'input',
    name: 'Usage',
    message: 'Provide app instructions and examples for use (Required)',
    validate: useInput => {
        if (useInput) {
            return true;
        } else {
            console.log('Please enter installation instructions');
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'License',
    message: 'What type of license(s) does the application have?',
    choices: [{name:'MIT', value: 0}, {name:'Apache', value: 1}, {name: 'BSD 3', value:2}, {name: 'GNU GPL v3', value:3}, {name:'Mozilla', value:4}]
},
{
    type:'input',
    name: 'Contributing',
    message: 'Please provide instructions on how to contribute to project',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Please provide instructions on how to run any tests'
},
{
    type: 'input',
    name: 'Questions',
    message: 'Please enter your GitHub username for users to submit questions',
},
{
    type: 'input',
    name: 'Questions',
    message: 'Please enter an email address for users to submit questions'
}];

// // TODO: Create a function to write README file
function writeToFile(fileName, markdownLiteral) {
    return new Promise((resolve,reject) => {
        fs.writeFile('./'+ fileName, markdownLiteral, err => {
            
            //if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            //if everything went well, resolve thue Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    })  
};

// // TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
};

init()
    .then(answerObj => {
        return generateMarkdown(answerObj);
    })
    .then(markdownLiteral => {
        return writeToFile('README.md', markdownLiteral);
    })
    .then(writeFileResonse => {
        console.log(writeFileResonse);
    })
    .catch(err => {
        console.log(err);
    })

// // Function call to initialize app
// init()
//     .then(data => {
//         return generateMarkdown(data);
//     })
//     .then(data => {
//         writeToFile('README.md', data);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//     })
