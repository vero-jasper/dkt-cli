const { installPackage, download, error } = require('./utils');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const findUp = require('find-up');
const loadJson = require('load-json-file');

const mergeDeps = async (source, file) => {
  source = await loadJson(source);
  let target = await loadJson(file);
  for (let key in source) {
    if (target[key] || source[key]) {
      //如依赖包已存在，不安装
      if (/dependencies|devDependencies/.test(key)) {
        Object.keys(source[key]).forEach(k => {
          if (Object.keys(target[key]).includes(k)) {
            delete source[key][k];
          }
        });
      }
      target[key] = Object.assign({}, target[key], source[key]);
    }
  }
  fs.writeFileSync(file, JSON.stringify(target, null, 2), 'utf-8');
};
/**
 * 注入区块
 * @param {str} name 区块名
 * @param {object} args 命令行参数
 * @param {str} context 项目目录
 */
module.exports = function invoke(names, args, context = process.cwd()) {
  const remoteUrl = args.source;
  download({
    remoteUrl,
    appName: 'dkt-gui-material',
  }).then(({ tmpDir }) => {
    const packageTarget = findUp.sync('package.json', { cwd: context });
    const _resolve = name => {
      const sourceDir = path.join(tmpDir, `blocks/${name}`);
      return new Promise((resolve, reject) => {
        fs.mkdirp(`${context}/${name}`).then(res => {
          exec(
            `cp ${sourceDir}/src/* ${context}/${name}`,
            {
              cwd: context,
            },
            err => {
              if (err) {
                error(err);
                process.exit(1);
                reject();
                return;
              }
              const packageSource = path.join(sourceDir, 'package.json');
              if (fs.existsSync(packageSource)) {
                mergeDeps(packageSource, packageTarget);
              }
              resolve();
            },
          );
        });
      });
    };
    const _resolveFns = names.map(name => _resolve(name));
    Promise.all(_resolveFns).then(res => {
      const dir = path.dirname(packageTarget);
      installPackage(dir);
    });
  });
};
