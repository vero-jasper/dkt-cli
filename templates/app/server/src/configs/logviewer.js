/**
 *  === logviewer config ===
 *  日志查看器配置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  enable: false, // 选择需要的登陆方式
  path: '/__log__/', // logviewer 的页面路径
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  enable: true,
};
// 测试环境配置
export const testing = {
  enable: true,
};
// off环境配置
export const shoff = {
  enable: true,
};
