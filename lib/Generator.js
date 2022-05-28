const { Render, installPackage } = require('./utils');
const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const invoke = require('./invoke');
const shell = require('shelljs');

class Generator {
  /**
   * 构造函数
   * @param {str} name 项目名
   * @param {str} context 项目目录
   * @param {object} options prompt参数和其它参数
   */
  constructor(name, context, options) {
    this.appName = name;
    this.context = context;
    this.options = options;
    this.fileTree = {};
    this.sourcePath = options.tmpDir; //项目源文件
  }
  /**
   * 生成项目
   */
  async generate() {
    const scriptsPath = path.join(this.context, 'scripts');
    const render = new Render(
      this.sourcePath,
      this.fileTree,
      Object.assign(
        {
          skip: /package-lock\.json$/g,
        },
        this.options,
      ),
    );
    await render.renderToFileTree();
    await Render.writeFiles(this.context, this.fileTree);
    if (fs.existsSync(path.join(scriptsPath))) {
      const files = await globby(['**/*'], { cwd: scriptsPath });
      files.forEach(fileName => {
        fs.chmodSync(path.join(scriptsPath, fileName), '777');
      });
    }
    const installScriptPath = path.join(scriptsPath, 'install');
    const isInstallScriptExist = fs.existsSync(installScriptPath);
    if (isInstallScriptExist) {
      shell.cd(this.appName);
      const run = shell.exec(installScriptPath);
    } else {
      await installPackage(this.context);
    }
  }
}
module.exports = Generator;
