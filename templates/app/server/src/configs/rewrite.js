/**
 *  === rewrite config ===
 *  页面内容 url 匹配设置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

export default [
  // rewrite 规则
  // 动态改变 url 让其走到对应的路由
  // 是 app 内部逻辑
  // 规则从上到下，如果匹配则不会再往下走了

  // from 可以是 正则，方法，字符串
  // 当url 被 正则匹配 或 方法返回非空 或 字符串匹配 minimatch
  // 如果是方法，第二个参数会额外给你请求头和辅助函数
  // 则会走到对应的 to
  // to 可以是字符串，也可以是方法
  // 如果是方法 参数接收 正则匹配的match值， 方法返回值， 字符串是否匹配的布尔值
  // 返回为 字符串

  // 当 break 为 true 时，如果匹配到当前条目则不会再往后匹配了

  // 在 to 中可以使用 $0 为原path,  $1, $2... 为 from 中选择的值

  // 这个例子是改写 页面图标 的路由
  { from: '/favicon.ico', to: '/static/favicon.ico', break: true },
  { from: '/', to: '/', break: true },
  { from: /^\/mock(.+)/, to: '/mock?path=$1', break: true },
  { from: /^\/rule\/attendanceSet$/, to: '/', break: true },
  { from: /^\/rule\/overtimeSet\/list$/, to: '/', break: true },
  { from: /^\/rule\/overtimeSet\/edit$/, to: '/', break: true },
  { from: /^\/rule\/overtimeSet\/add$/, to: '/', break: true },
  { from: /^\/rule\/overtimeSet\/detail$/, to: '/', break: true },
  //{ from: /^\/rule\/adminsSet\/list$/, to: '/', break: true },
  //{ from: /^\/rule\/adminsSet\/add$/, to: '/', break: true },
  //{ from: /^\/rule\/adminsSet\/edit$/, to: '/', break: true },
  { from: /^\/rule\/attendanceSet\/list$/, to: '/', break: true },
  { from: /^\/rule\/attendanceSet\/add$/, to: '/', break: true },
  { from: /^\/rule\/attendanceSet\/edit$/, to: '/', break: true },
  { from: /^\/rule\/attendanceSet\/detail$/, to: '/', break: true },
  { from: /^\/rule\/arrangeSet\/list$/, to: '/', break: true },
  { from: /^\/rule\/arrangeSet\/add$/, to: '/', break: true },
  { from: /^\/rule\/arrangeSet\/edit$/, to: '/', break: true },
  { from: /^\/rule\/arrangeSet\/detail$/, to: '/', break: true },
  { from: /^\/rule\/approveSet$/, to: '/', break: true },
  { from: /^\/generalView\/list/, to: '/', break: true },
  { from: /^\/generalView\/detail/, to: '/', break: true },
  { from: /^\/generalView\/import/, to: '/', break: true },
  { from: '/test', to: '/', break: true },
  { from: '/error', to: '/', break: true },
  { from: '/report', to: '/', break: true },
  { from: /^\/balance$/, to: '/', break: true },
  { from: /^\/balance\/detail$/, to: '/', break: true },
  { from: /^\/balance\/import$/, to: '/', break: true },
  { from: /^\/punch\/setting$/, to: '/', break: true },
  { from: /^\/attendance$/, to: '/', break: true },
  { from: /^\/attendance\/approve$/, to: '/', break: true },
  { from: /^\/attendance\/balance$/, to: '/', break: true },
  { from: /^\/attendance\/approve\/detail$/, to: '/', break: true },
  { from: /^\/rule\/punch\/list$/, to: '/', break: true },
  { from: /^\/attendance\/calendar/, to: '/', break: true },
  { from: /^\/attendanceManagement\/approveManagement/, to: '/', break: true },
  {
    from: /^\/attendanceManagement\/approveManagement\/detail/,
    to: '/',
    break: true,
  },
  { from: /^\/attendanceManagement\/statisticsReport/, to: '/', break: true },

  // { from: /^\/u\/([a-zA-Z0-9]+)\/?$/, to: '/?user=$1', break: true }
];
