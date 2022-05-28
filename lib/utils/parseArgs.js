/**
 * 讲原始命令行参数转成对象
 * @param {object} cmd 原始命令
 */
exports.parseArgs = function(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = o.long.replace(/^--/, '');
    args[key] = cmd[key];
  });
  return args;
};
