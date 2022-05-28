// http-proxy 配置。 参见 https://www.npmjs.com/package/http-proxy#options
export default {
  enable: true,

  // 代理服务地址
  target: 'http://aroute.ke.com',

  // 代理的url前缀
  path: '/api',

  // 映射规则
  // http://127.0.0.1:8080/api/rule/overtime/types ==> http://aroute.ke.com/api/v1/rule/overtime/types
  rewrite: path => path.replace(/^\/api/, '/api/v1'),

  beforeProxy: ctx => {
    // 添加自定义header
    // const token = ctx.cookies.get('lianjia_token');
    // ctx.headers['X-Login-Token'] = token;
  },
  afterProxy: () => {},
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  target: 'http://127.0.0.1:3001',
};
// 测试环境配置
export const testing = {
  target: 'http://aroute.test.ke.com',
};

// off环境配置
export const off = {
  target: 'http://aroute.shoff.ke.com',
};
