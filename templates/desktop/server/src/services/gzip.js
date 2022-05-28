// 优先级
// 默认 bucky 内部都是在 100 这个优先级
export const index = 99

export default config => {
  // 修改 configs/gzip.js 的配置项
  return require('koa-compress')({
    flush: require('zlib').Z_SYNC_FLUSH
  })
}