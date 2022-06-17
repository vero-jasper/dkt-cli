const Generator = require('./Generator');
const path = require('path');
const { error, downloadTemplate } = require('./utils');
const fs = require('fs-extra');
/**
 * 创建项目
 * @param {str} name 项目名
 * @param {object} args 命令行参数
 * @param {str} context 项目目录
 */
module.exports = function init(name, args, context) {
  const options = {
    projectName: name,
    invoke: 'all',
  };
  const { type = '', yarn, branch = 'main' } = args;
  process.env.ISYARN = yarn;
  process.env.BRANCH = branch;

  //todo, get preset
  //todo, set prompts
  try {
    downloadTemplate(type, name).then(tmpDir => {
      options.tmpDir = tmpDir;
      const gen = new Generator(name, context, options);
      gen.generate();
    });
  } catch (e) {
    error(e);
    process.exit(1);
  }
};
