const readPkg = require('read-pkg');
const resolve = require('resolve');
const Plugin = require('./plugin');
const { installPackage, error } = require('./utils');
const fs = require('fs');
const path = require('path');

/**
 * 注入插件
 * @param {str} name 插件名
 * @param {object} args 命令行参数
 * @param {str} context 项目目录
 */
module.exports = function invoke(name, args, context = process.cwd()) {
  if (!fs.existsSync(path.join(context, 'package.json'))) {
    error('package.json不存在');
    process.exit(1);
  }
  invokePlugins(name, context);
};

const invokePlugins = async (name, context) => {
  const pkg = await readPkg({ cwd: context });
  const deps = pkg.devDependencies;
  if (!deps) {
    return;
  }
  //if plugin name is not "all", npm install it and call cb
  const installPlugins = [];
  const plugins = [];
  for (let pkgName of Object.keys(deps)) {
    if (
      /^@dkt\/web-cli-plugin/.test(pkgName) &&
      (pkgName.includes(name) || name === 'all')
    ) {
      await installPackage(context, pkgName);
      const module = resolve.sync(`${pkgName}/lib`, { basedir: context });
      installPlugins.push(pkgName);
      plugins.push({
        pkgName,
        cb: require(module),
      });
    }
  }
  for (let { cb } of plugins) {
    await cb(new Plugin(context));
  }
  await installPackage(context);
};
