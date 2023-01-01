/* 
    Uploading an existing repo
    after it has been linked 
*/

// npm run build
// git add .
// git commit -m "message"
// git push -u origin main


const shell = require('shelljs')
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule()
inquirer.registerPrompt("fuzzypath", require("inquirer-fuzzy-path"));
var colors = require("colors");
colors.enable();

console.log("\x1b[33m >> Building vite frontend \x1b[0m");

prompt([
    {
        type: "fuzzypath",
        name: "path",
        excludePath: (nodePath) => nodePath.startsWith("node_modules"),
        excludeFilter: (nodePath) => nodePath == ".",
        itemType: "any",
        rootPath: "./",
        message: "Path to frontend directory for your building: ",
        default: "./frontend",
        suggestOnly: false,
        depthLimit: 5,
  },
  {
    name: "commit",
    message: "Add a commit message: ",
  }
]).then((answers) => {
  shell.exec(`npm run build --prefix ${answers.path}`)
  console.log("BUILD COMPLETE".green);
  shell.exec(`git add .`);
  shell.exec(`git commit -m "${answers.commit}"`);
  console.log("REPO HAS BEEN COMMITED".green);
  try {
    shell.exec(`git push -u origin main`);
  } catch (error) {
    console.log("Err during Push".red);
    console.log(error);
  }
});
