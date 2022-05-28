const chalk = require('chalk');

exports.warn = msg => {
  console.warn(`  ${chalk.yellow(msg)}`);
};

exports.error = msg => {
  console.error(`  ${chalk.red(msg)}`);
  if (msg instanceof Error) {
    console.error(msg.stack);
  }
};
