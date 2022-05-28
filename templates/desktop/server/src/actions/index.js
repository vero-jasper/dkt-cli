/**
 *  === action ===
 *  route: /
 *  created at: Tue Jul 24 2018 20:35:00 GMT+0800 (CST)
 */

export default {

  // 是否页面需要登陆
  needLogin: false,

  async handler (ctx) {
    const who_is_bucky = `
      Bucky is the name used by several different fictional superheroes
      appearing in American comic books published by Marvel Comics,
      usually as a sidekick to Captain America. The original version was
      created by Joe Simon and Jack Kirby and first appeared in Captain
      America Comics #1 (cover-dated March 1941), which was published by
      Marvel's predecessor, Timely Comics. The name has been borne by five
      male characters, the original Bucky Barnes as well as Fred Davis,
      Jack Monroe, Rick Jones, Lemar Hoskins and two female ones Julia Winters
      and Rikki Barnes.
    `
    // 渲染页面吧, index 是对应 view 文件夹下的文件
    ctx.response.render('index', {
      who_is_bucky,
      env: ctx.app.env
    })
  }
}