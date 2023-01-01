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

console.log("\x1b[33m >> Building vite frontend \x1b[0m\n\n");

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
  console.log("\n BUILD COMPLETE \n\n".green);
  shell.exec(`git add .`);
  shell.exec(`git commit -m "${answers.commit}"`);
  console.log("\n REPO HAS BEEN COMMITED \n\n".green);
  try {
    shell.exec(`git push -u origin main`);
    console.log("\nDone".red);
  } catch (error) {
    console.log("Err during Push".red);
    console.log(error);
  }
});
