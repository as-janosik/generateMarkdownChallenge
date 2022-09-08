// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
  let lic = ``
  if (license === 'none'){
    lic = "";
  } else {
   lic = `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
  return lic;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

  # License  

  ${renderLicenseBadge(data.license)}  

  This project is using ${data.license} as the license.  

  # Table of Contents

  - [${data.title}](#${data.title})
  - [License](#license)
  - [Table of Contents](#table-of-contents)
    - [Description of Project](#description-of-project)
    - [Installation Instructions](#installation-instructions)
    - [Usage Info](#usage-info)
    - [Contribution Guide](#contribution-guide)
    - [Test Instructions](#test-instructions)
    - [Questions](#questions)


  ## Description of Project  
  ${data.description}  

  ## Installation Instructions  
  ${data.install}  

  ## Usage Info  
  ${data.usage_Info}  

  ## Contribution Guide  
  ${data.contribution_Guide}  

  ## Test Instructions  
  ${data.test_Instructions}  

  ## Questions  
  If you have other questions, feel free to connect via github at:
  https://gist.github.com/${data.username}  
  Otherwise you can reach me at the following email:
  ${data.email}
`;
}

module.exports = generateMarkdown;
