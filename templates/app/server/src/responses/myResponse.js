/**
 *  === response ===
 *  name: myResponse
 *  created at: Tue May 29 2018 14:47:16 GMT+0800 (CST)
 */

// 一个标准返回
export default (ctx, config) => args => {
  // ctx 为 koa 的 context 上下文
  // 详见: http://koajs.com/#context
  // ctx.request  为 koa request 对象
  // 详见: http://koajs.com/#request
  // ctx.response 为 koa response 对象
  // 详见: http://koajs.com/#response
  // 返回 404 页面的例子
  // ctx.response.status = 200
  // ctx.response.render('404', {args})
};
