const { error } = require('./log');
const fs = require('fs');
const path = require('path');

/**
 * 创建目录，已存在则不创建
 * @param {str} dir 目录名
 */
exports.createDir = dir => {
  if (fs.existsSync(dir)) {
    error(`目录已存在`);
    process.exit(1);
  }
  fs.mkdirSync(dir);
};
