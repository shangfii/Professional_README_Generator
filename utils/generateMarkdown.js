// This function returns the license badge based on which license is passed in
// If there is no license the function will return an empty string


function renderLicenseBadge(license) {
  // [[License: MIT]("https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT")
  // [[License: IPL]("https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0")
  // [[License: ISC]("https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC")
  // [[License: MPL]("https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0")
}

// This function returns link to the license
function renderLicenseLink(license) { }

// This function returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { if license else return "" }

const renderLicenseSection = (license) => {
  if (license === "IBM") return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  if (license === "ISC") return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  if (license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  if (license === "Mozilla") return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"


  else return ""
}

// This Function generates markdown for README

function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseSection(data.license)}

  ## Table of Contents
  
 *[Project Title](#projectTitle)
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Test Information](#tests)
 * [Contact](#contact)
 * [License](#license)

 ### Title
 ${data.projectTitle}

 ### Creator
  ${data.fullName}

 ### Description
 ${data.description}

 ### Usage
 ${data.usage}

 ### Installation
 ${data.installation}

 ### Test Information
 ${data.tests}

 ### Contributors
 ${data.contributing}

 ### Contact
 Github: ${data.github}

 Email: ${data.email}

 linkedIn: ${data.linkedin}
 `
}

module.exports = generateMarkdown;