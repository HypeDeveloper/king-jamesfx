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

console.log('>> Building vite frontend');

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
  console.log("BUILD COMPLETE");
  shell.exec(`git add .`);
  shell.exec(`git commit -m "${answers.commit}"`);
  console.log("REPO HAS BEEN COMMITED");
  try {
    shell.exec(`git push -u origin main`);
  } catch (error) {
    console.log('c%'+error,
      {
      color: 'blue',
    });
  }
});
