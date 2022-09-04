// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return;
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
  return `#${data.title}
  #Description of Project
  ${data.description}
  #Installation Instructions
  ${data.install}
  #Usage Info
  ${data.usage_Info}
  #Contribution Guide
  ${data.contribution_Guide}
  #Test Instructions
  ${data.test_Instructions}
  #Questions
  If you have other questions, feel free to connect via github at:
  https://gist.github.com/${data.username}
  Otherwise you can reach me at the following email:
  ${data.email}
  #License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
