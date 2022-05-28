/**
 * 转换字符串到数组
 * @param  {String}   string
 * @param  {String}   spliter
 * @return {Array}
 */
module.exports = (string, spliter = ',') => {
  return String(string)
    .split(spliter)
    .map(item => item.trim())
    .filter(_ => _);
};
