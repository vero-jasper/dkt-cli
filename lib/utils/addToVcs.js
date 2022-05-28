const childProcess = require('child_process');

exports.addToVcs = (fileName) => {
  // todo: git add fileName
  childProcess.exec('git status', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}