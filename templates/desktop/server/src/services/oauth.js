// 优先级
// 默认 bucky 内部都是在 100 这个优先级
import KoaAuth from '@lianjia/koa-oauth';
export const index = 100

export default ({ enable, ...config }) => {
  if(enable) {
    // 接入网关需改 configs/oauth.js 的配置项
    // access_token 挂载在 ctx.tokenInfo 下
    return KoaAuth(config);
  } else {
    // noop
    return async (ctx, next) => {
      await next()
    }
  }
}