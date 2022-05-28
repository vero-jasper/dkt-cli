/**
 *  === service ===
 *  name: accessToken
 *  created at: Wed May 30 2018 19:46:33 GMT+0800 (CST)
 */

import KoaAuth from '@lianjia/koa-oauth';

// 优先级
// 默认 bucky 内部都是在 100 这个优先级
export const index = 100;

export default config => {
  // config 会读取在 services/ 下的同名文件
  return KoaAuth(config);
};
