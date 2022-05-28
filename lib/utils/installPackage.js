const execa = require('execa');
const { hasYarn } = require('./env');
let isYarn = hasYarn();
const run = (context, args) => {
  return new Promise((resolve, reject) => {
    const child = execa(isYarn ? 'yarn' : 'npm', args, {
      cwd: context,
      stdio: ['inherit', 'inherit', isYarn ? 'pipe' : 'inherit'],
    });
    child.on('close', code => {
      if (code !== 0) {
        reject(`npm ${args.join(' ')} failed`);
        return;
      }
      resolve();
    });
  });
};
exports.installPackage = (context, package = '') => {
  let args = [];
  if (isYarn) {
    if (package) {
      args = args.concat('add').concat(package);
    } else {
      args = args.concat('install');
    }
  } else {
    args = args
      .concat('install')
      .concat(package)
      .concat('--loglevel', 'error');
  }
  return run(context, args);
};
exports.uninstallPackage = (context, package = '') => {
  let args = [];
  if (!package) {
    error('请输入需要卸载的package名称');
    process.exit(1);
  }
  if (isYarn) {
    args = args.concat('remove').concat(package);
    console.log('args', args);
  } else {
    args = args
      .concat('uninstall')
      .concat(package)
      .concat('--loglevel', 'error');
  }
  return run(context, args);
};
