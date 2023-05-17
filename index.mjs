// table of contents hyperlinks

import inquirer from 'inquirer';
import fs from "fs/promises";

let { title, description } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the name of your project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        }
    ])

// let { description } = await inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'description',
//             message: "Write a description of your project",
//         }
//     ])

let { installation } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'installation',
            message: "How does one install your project?",
        }
    ])

let { usage } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'usage',
            message: "How does one use your project?",
        }
    ])

let { license } = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'license',
            message: "Which license would you like to use for your project?",
            choices: ['GNU', 'MIT', 'IBM']
        }
    ])
let licenseBadge = generateLicense(license);

let { contributing } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'contributing',
            message: "What are the contribution guidelines for this project?",
        }
    ])

let { tests } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'tests',
            message: "What are the test instructions?",
        }
    ])

let { username } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: "What is your github username?",
        }
    ])

let { email } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
        }
    ])

function generateLicense(license) {
    if (license === "GNU") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === "IBM") {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
}

let readmeText =
    `# ${title} ${licenseBadge}

## Project Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
Github: https://www.github.com/${username}
For additional questions, please contact me at: ${email}

`

fs.writeFile("README.md", readmeText)

