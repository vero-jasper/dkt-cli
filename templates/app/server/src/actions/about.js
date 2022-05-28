/**
 *  === action ===
 *  route: /about
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  // 是否页面需要登陆
  needLogin: true,

  async handler(ctx) {
    //通过 ctx.request.user 获取用户信息
    const user = ctx.request.user;

    // 渲染页面吧, about 是对应 view 文件夹下的文件
    ctx.response.render('about', { user });
  },
};
