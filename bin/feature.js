const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const inquirer = require('inquirer');
const writePkg = require('write-pkg');
const readPkg = require('read-pkg');
const loadJson = require('load-json-file');
const globby = require('globby');
const { error, downloadTemplate } = require('../lib/utils');
const Generator = require('../lib/Generator');

const checkWorkspace = dirs => {
  const idx = dirs.findIndex(dir => {
    return !fs.pathExistsSync(dir);
  });
  if (!dirs || !dirs.length) {
    return true;
  }
  return idx < 0;
};

const getAvailableFeatures = async () => {
  const featureDir = await downloadTemplate('feature', 'feature');
  const dirs = await globby(['*'], { cwd: featureDir, onlyDirectories: true });
  const features = dirs.map(name => {
    const sourcePath = path.join(featureDir, name);
    const description = readPkg.sync({ cwd: sourcePath }).description;
    return {
      name,
      description,
    };
  });
  return features;
};

let tmpDir;

const run = async name => {
  const context = path.resolve();
  const _run = async (featureDir, featurePkg) => {
    let projectPkg;
    const gen = new Generator(name, context, {
      skip: /package\.json$/,
      tmpDir: featureDir,
    });
    const pkgFile = path.join(context, 'package.json');
    await gen.generate();
    if (checkWorkspace(['package.json'])) {
      projectPkg = await loadJson(pkgFile);
    } else {
      projectPkg = {};
    }
    projectPkg.dependencies = Object.assign(
      {},
      projectPkg.dependencies,
      featurePkg.dependencies,
    );
    fs.writeFileSync(pkgFile, JSON.stringify(projectPkg, null, 2), 'utf-8');
  };
  try {
    tmpDir = await downloadTemplate('feature', 'feature');
    const featureDir = path.join(tmpDir, name);
    const featurePkg = await loadJson(path.join(featureDir, 'package.json'));
    const requiredDir = featurePkg.requiredDir || [];
    if (checkWorkspace(requiredDir)) {
      _run(featureDir, featurePkg);
    } else {
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'ok',
            message: `缺少必要的目录(${requiredDir.join(
              ', ',
            )})，创建目录并继续?`,
          },
        ])
        .then(answers => {
          if (answers.ok) {
            _run(featureDir, featurePkg);
          }
        });
    }
  } catch (e) {
    error(e);
    process.exit(1);
  }
};

program
  .command('add <feature-name>')
  .description('添加 feature')
  .action((name, cmd) => {
    run(name);
  });

program
  .command('feature-list')
  .description('所有可用的feature')
  .action(name => {
    console.log('  可用的features:');
    console.log();
    getAvailableFeatures().then(features => {
      features.forEach(feature => {
        console.log(
          '  ' +
            chalk.yellow('★') +
            '  ' +
            chalk.blue(feature.name) +
            '  ' +
            chalk.blue(feature.description),
        );
      });
    });
  });
