const { execSync } = require('child_process');
let hasYarn;
exports.hasYarn = () => {
  if (hasYarn !== undefined) {
    return hasYarn;
  }
  try {
    execSync('yarnpkg --version');
    hasYarn = true;
  } catch (e) {
    hasYarn = false;
  }
  return hasYarn;
};
