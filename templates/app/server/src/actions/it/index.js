/**
 *  === action ===
 *  route: /
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default {
  async handler(ctx) {
    ctx.response.renderPage('index');
  },
};
