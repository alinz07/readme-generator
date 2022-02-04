# Node Professional README Generator
<br/>

## **Link** to web application:

## **Link** to video walkthrough to demonstrate app functionality: 
## **Link** to project repository:
<br/>

## **Purpose**
Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

<br/>

## **Challenge Criteria**
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

GIVEN a command-line application that accepts user input<br/>

* WHEN I am prompted for information about my application repository<br/>
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

* WHEN I enter my project title <br/>
THEN this is displayed as the title of the README

* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

* WHEN I choose a license for my application from a list of options<br/>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

* WHEN I enter my GitHub username<br/>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

* WHEN I enter my email address<br/>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

* WHEN I click on the links in the Table of Contents<br/>
THEN I am taken to the corresponding section of the README

## **How and Why**
Using command line prompts with node is a way to quickly and easily generate a high quality README.

I started by using the inquirer package to ask questions, return an answer object and then use a template literal in a separate javascript file to take that answer object and generate README markdown.

Everything else was more of the same: cleaning up the answer objects, accessing the data and using functions and template literals to generate markdown.

<br/>
<br/>

## **Things I learned**
* How to create an anchor link that jumps down to a section of the README.
* To navigate inquirer docs. I didn't want to write out a bunch of conditionals to generate a badge license, and learned from the docs that with a choices list answer object one can assign a name to display as well as an answer hash value to return. This way I could assign index values to iterate through when generating badges in the markdown with the renderLicenseBadge function.

<br/>
<br/>

## **What makes this project stand out?**

<br/>
<br/>
# Screenshot of web application
![gif-of-webapp](./assets/images/ch6-gif.gif)
<br/>
<br/>

### **Credits**
* Source code provided by University of Wisconsin-Milwaukee Extended Campus Full-Stack Coding Bootcamp

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
