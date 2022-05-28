/**
 *  === action ===
 *  route: /
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */
import { SERVER_URL_BASE } from '../configs/api';
import tokenRecorder from '../util/token';

export default {
  // 是否页面需要登陆
  needLogin: false,

  async handler(ctx) {
    // const ret = await ctx.checkLogin();
    // const userInfo = ctx.user && ctx.user.user_info || {};
    // if(ret){
    //   tokenRecorder.recordToken(`Bearer ${ctx.tokenInfo.access_token}`,ret.token)
    // }
    // 渲染页面吧, index 是对应 view 文件夹下的文件
    ctx.response.render('index', {
      serverHost: SERVER_URL_BASE[ctx.app.env],
      // userInfo: JSON.stringify(userInfo),
    });
  },
};
