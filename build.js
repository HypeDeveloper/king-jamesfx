/* 
    Uploading an existing repo
    after it has been linked 
*/

// npm run build
// git add .
// git commit -m "message"
// git push -u origin main


const shell = require('shelljs')
const rl = require('readline')

console.log('>> Building vite frontend');

input_build_vite()
shell.exec(`git add .`);
git_commit();

function input_build_vite() {
    // handles input from the user
    const input = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    input.question(">> Path to your frontend: ", (ans) => {
        shell.exec(`npm run build --prefix ${ans}`);
        input.close();
    });
}

function git_commit() {

    // handles input from the user
    const input = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    input.question(">> Add a commit message: ", (ans) => {
        if (ans === "") {
            console.log('no message was added');
            git_commit();
        }
        shell.exec(`git commit -m "${ans}"`);
        shell.exec(`git push -u origin main"`);
        input.close();
    });
}