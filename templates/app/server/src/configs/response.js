/**
 *  === response config ===
 *  页面返回内容配置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  code: {
    NOT_FOUND: 100404,
    FORBIDDEN: 100403,
    SERVER_ERROR: 100505,
    REDIRECT: 100302,

    SUCCESS: 100000,
    ERROR: 100001,
  },
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {};
// 测试环境配置
export const testing = {};
// off环境配置
export const shoff = {};
