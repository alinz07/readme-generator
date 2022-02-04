// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  badges = [
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  ];
  
  licenseArray = [];
  
  license.forEach(value => {
    licenseArray.push(badges[value])
  });

  return licenseArray

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `
  ## License(s)

  ${renderLicenseLink(license)}
  
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data.License);

  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  [Installation](#installation) <br/>
  [Usage](#usage) <br/>
  [Contributing](#contributing) <br/>
  [Tests](#tests) <br/>
  
  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ${renderLicenseSection(data.License)}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
`;
}

module.exports = {generateMarkdown};
