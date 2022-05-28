/**
 *  === login config ===
 *  登陆组件配置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  enable: true, // 是否使用登录
  type: 'general', // 选择需要的登录方式

  // 使用 general 方式登陆请使用 lianjia.com 或者其 子域名 为项目访问域名
  // 不然会被继绝的哦~~
  general: {
    // 登陆项目的表示 找泽华注册去
    source: 'cms',
    signature: '29b3541b90f06555508e97260cf80a21',

    // 对应的登陆环境(uc, session 服务)  production | testing
    env: 'production',

    // 需要保存的 cookie 值的 key 名
    tokenName: 'lianjia_token',

    // cookie 保存的超时时间
    // maxAge: 31536000,

    // 对应的 登录页面 和 登出页面 的的规则
    loginPath: '/login',
    logoutPath: '/logout',

    // 是否是 link, 掌链等的 webview 中的登陆，走不同的登陆方式
    // 如果不写会通过 ua 自动匹配
    // appWebView: true,
    // appWebView: ctx => true,
  },

  // 登陆使用楼盘字典登录规则
  hdic: {
    // 对应楼盘字典的环境 production | testing | development
    env: 'production',

    // 对于外网用户还是内网用户 iu: 内网用户, ou: 外网用户
    userType: 'iu',

    // 你的项目的 app code，去楼盘字典注册
    appCode: 'bigData',

    // 需要保存的 cookie 值的 key 名
    sessionName: 'sid',
    authKeyName: 'auth',

    // cookie 保存的超时时间
    // maxAge: 31536000,

    // 对应的 登录页面 和 登出页面 的的规则
    loginPath: '/login',
    logoutPath: '/logout',
  },
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  general: {
    env: 'testing',
  },
};
// 测试环境配置
export const testing = {
  general: {
    env: 'testing',
  },
};

// off环境配置
export const shoff = {
  general: {
    env: 'testing',
  },
};
