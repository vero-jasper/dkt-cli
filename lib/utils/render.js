const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const ejs = require('ejs');

class Render {
  /**
   * 构造函数
   * @param {j} sourcePath template目录
   * @param {object} fileTree 文件树，通过ejs生成content
   * @param {object} options prompt和其它参数
   */
  constructor(sourcePath, fileTree, { skip, ...options }) {
    this.sourcePath = sourcePath;
    this.fileTree = fileTree;
    this.options = options;
    // this.renderToFileTree();
    this.noParse = /\/node_modules\/|\.(ejs|ico|jpe?g|png)$/;
    this.noRender = skip;
  }

  /**
   * 生成文件树
   */
  async renderToFileTree() {
    const source = this.sourcePath;
    const files = await globby(['**/*'], { cwd: source, dot: true });
    files.forEach((filepath, i) => {
      const name = path.basename(filepath);
      const dir = path.dirname(filepath);
      const absolutePath = path.join(source, dir, name);
      let template;
      if (this.noRender && this.noRender.test(filepath)) {
        return;
      }
      if (this.noParse.test(filepath)) {
        template = fs.readFileSync(absolutePath);
      } else {
        template = ejs.render(
          fs.readFileSync(absolutePath, 'utf-8'),
          { ...this.options },
          this.options,
        );
      }
      this.fileTree[filepath] = template;
    });
  }
  /**
   * 写入文件到项目
   * @param {str} context 项目目录
   * @param {object} files 文件树
   */
  static writeFiles(context, files) {
    const fileKeys = Object.keys(files);
    return Promise.all(
      fileKeys.map(async fileName => {
        const filePath = path.join(context, fileName);
        await fs.mkdirp(path.dirname(filePath));
        await fs.writeFileSync(filePath, files[fileName]);
      }),
    );
  }
}

exports.Render = Render;
