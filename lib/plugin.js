const path = require('path');
const { Render, installPackage, uninstallPackage } = require('./utils');
const loadJson = require('load-json-file');
const fs = require('fs');
/**
 * dkt-cli-*的插件
 */
class Plugin {
  constructor(context) {
    this.context = context;
    this.fileTree = {};
  }
  getContext() {
    return this.context;
  }
  getPluginRoot() {
    const o = {};
    Error.captureStackTrace(o);
    return path.dirname(o.stack.split('\n')[3].match(/\s\((.*):\d+:\d+\)$/)[1]);
  }
  async getPackage() {
    const { context } = this;
    const file = path.join(context, 'package.json');
    let target = await loadJson(file);
    return target;
  }
  async hasDependence(key) {
    let target = await this.getPackage();
    let result = false;
    const hasDep = depName => {
      Object.keys(target[depName]).forEach(name => {
        if (name === key) {
          result = true;
        }
      });
    };
    hasDep('dependencies');
    hasDep('devDependencies');
    return result;
  }
  async render(templateDir) {
    const baseDir = path.resolve(this.getPluginRoot(), templateDir);
    const render = new Render(baseDir, this.fileTree, {});
    await render.renderToFileTree();
    await Render.writeFiles(this.context, this.fileTree);
  }
  async mergeDeps(source) {
    const { context } = this;
    const file = path.join(context, 'package.json');
    let target = await this.getPackage();
    for (let key in source) {
      if (target[key] || source[key]) {
        target[key] = Object.assign({}, target[key], source[key]);
      }
    }
    fs.writeFileSync(file, JSON.stringify(target, null, 2), 'utf-8');
  }
  installPackage(...args) {
    return installPackage.apply(this, args);
  }
  uninstallPackage(...args) {
    return uninstallPackage.apply(this, args);
  }
}
module.exports = Plugin;
