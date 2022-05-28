/**
 *  === app config ===
 *  项目应用的配置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

import prodConfig from './_prod';

export default {
  name: PKG.name,

  // 项目监听的端口
  //port: prodConfig.base.PORT,
  port: process.env.PORT,

  // 是否全局绑定 lodash
  _: true,

  // 是否前端有代理
  // 如果你的server 前面还有 nginx 等的代理则选择 true
  proxy: true,
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  port: 3000,
  proxy: false,
};
// 测试环境配置
export const testing = {
  //port: 8080,
  //proxy: false
};
// off环境配置
export const shoff = {
  //port: 8080,
  //proxy: false
};
