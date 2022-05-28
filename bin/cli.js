#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const { checkVersion, parseArgs, error, createDir } = require('../lib/utils');
checkVersion();
program.version(require('../package').version).usage('<command> [options]');
const checkName = name => {
  if (!/^[\w_-]+$/.test(name)) {
    error(`名称请使用字符串/数字/_/-的组合`);
    process.exit(1);
  }
};

// 创建业务/npm公用包开发环境
program
  .command('init <project-name>')
  .description('创建业务端项目或npm业务公用包')
  .option('-t, --type <desktop/mobile/mobile-ts/npm>', '创建项目')
  .option('-y, --yarn', '是否使用yarn安装')
  .option('-b, --branch <branch-name>', '分支名称,默认为master')
  .action((name, cmd) => {
    const context = path.resolve(name);
    checkName(name);
    createDir(name);
    require('../lib/init')(name, parseArgs(cmd), context);
  });

program
  .command('invoke <plugin-name>')
  .description('项目中注入plugin')
  .action((name, cmd) => {
    const context = process.cwd();
    require('../lib/invoke')(name, parseArgs(cmd), context);
  });

program
  .command('addblock [name...]')
  .description('项目中注入区块')
  .option(
    '-s, --source <git source>',
    'git地址 example:git.demo.com:dkt/example',
  )
  .action((name, cmd) => {
    const context = process.cwd();
    require('../lib/addBlock')(name, parseArgs(cmd), context);
  });

program
  .command('install')
  .description('安装package')
  .action(() => {
    const context = path.resolve();
    require('../lib/install')(context);
  });

// 未注册命令提示帮助
program.arguments('<command>').action(cmd => {
  program.outputHelp();
  console.log();
  error(`未注册命令${cmd}`);
  console.log();
});

require('./feature');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
