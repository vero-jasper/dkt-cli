const download = require('download-git-repo');
const home = require('user-home');
const path = require('path');
const ora = require('ora');
const rm = require('rimraf');
const fs = require('fs');
const execa = require('execa');
const { exec, spawn } = require('child_process');
const getTmpDir = name => path.join(home, '.dkt-cli-template', name);
const { error } = require('./log');

/**
 * 获取远程模板
 * @param  {String} remoteAddr git远程地址
 */
const _downloadTemplate = ({
  remoteUrl = 'gitlab.com:codebees.cn/web-template.git',
  templateName = '',
  appName,
  server = 'git@gitlab.com',
}) => {
  const branch = process.env.BRANCH || 'main';
  const tmpDir = getTmpDir(appName);
  const remoteUrlWithBranch = `${remoteUrl}${templateName}#${branch}`;
  let completeRemoteUrl = `gitlab:${remoteUrlWithBranch}`;
  const spinner = ora(`downloading ${templateName}`);
  let type = 'ssh';
  try {
    execa.shellSync(`ssh ${server}`);
  } catch (e) {
    type = 'http';
  }
  if (type !== 'ssh') {
    completeRemoteUrl = `http://${remoteUrlWithBranch}`;
  }
  fs.existsSync(tmpDir) && rm.sync(tmpDir);
  spinner.start();
  const gitlab = 'direct:https://github.com/vero-jasper/web-template.git#main';
  return new Promise((resolve, reject) => {
    download(gitlab, tmpDir, { clone: true }, err => {
      spinner.stop();
      if (err) {
        reject(err);
      } else {
        resolve({ tmpDir });
      }
    });
  });
};
exports.download = _downloadTemplate;
/**
 * 下载项目模板
 */
exports.downloadTemplate = async (templateName, appName) => {
  return _downloadTemplate({
    appName,
    templateName,
  })
    .then(({ tmpDir }) => {
      return tmpDir;
    })
    .catch(err => {
      error(err);
      process.exit(1);
    });
};
