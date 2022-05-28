/**
 *  === bodyparser config ===
 *  将body中的数据尝试转化为json/form/text
 *  https://www.npmjs.com/package/koa-bodyparser
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  // 如果 post 的数据过大，请更改这个数值
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
};

// 开发环境配置
export const development = {};
// 测试环境配置
export const testing = {};
// off环境配置
export const shoff = {};
