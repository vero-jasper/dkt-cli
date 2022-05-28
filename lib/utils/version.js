const semver = require('semver');
const engineVersion = require('../../package.json').engines.node;
const chalk = require('chalk');
const processVersion = process.version;

/**
 * 检查node版本
 */
exports.checkVersion = function() {
  if (!semver.satisfies(processVersion, engineVersion)) {
    console.log(
      chalk.red(
        `当前node版本为 ${processVersion}, 要求版本为${requiredVersion} `,
      ),
    );
    process.exit(0);
  }
};
