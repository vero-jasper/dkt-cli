// 优先级
// 默认 bucky 内部都是在 100 这个优先级
const proxy = require('koa-proxies');

export const index = 100;

export default ({
  enable,
  path,
  beforeProxy = _ => {},
  afterProxy = _ => {},
  ...options
}) => {
  if (enable) {
    // 修改 configs/proxy.js 的配置项
    const proxyInstance = proxy(path, {
      changeOrigin: true,
      logs: true,
      ...options,
    });

    return async (ctx, next) => {
      beforeProxy(ctx);
      await proxyInstance(ctx, next);
      afterProxy(ctx);
    };
  } else {
    // noop
    return async (ctx, next) => {
      await next();
    };
  }
};
