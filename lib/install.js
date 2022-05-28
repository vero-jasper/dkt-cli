const { installPackage } = require('./utils');
/**
 * 安装package
 * @param {str} context 项目目录
 */
module.exports = function init(context) {
  installPackage(context);
};
