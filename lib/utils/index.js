const strToArr = require('./strToArr');
const modules = `
  parseArgs,
  version,
  log,
  env,
  customFs,
  Render,
  installPackage,
  root,
  addToVcs,
  downloadTemplate
  `;
strToArr(modules).forEach(m => {
  Object.assign(exports, require(`./${m}`));
});
