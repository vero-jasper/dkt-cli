/**
 * Created by charles on 2017/11/16.
 */
/**
 *  === action ===
 *  route: /mock
 *  created at: Fri Nov 10 2017 10:39:06 GMT+0800 (CST)
 */
import mock from '../mock';

const routes = [];
export default {
  // 是否页面需要登陆
  needLogin: true,

  async handler(ctx) {
    // mock数据
    const path = ctx.request.query.path;
    const method = ctx.request.method;
    let response;

    for (let i = 0; i < routes.length; i++) {
      let route = routes[i];
      if (route.method !== method) {
        continue;
      }
      if (route.isReg) {
        let pathVariables = [];
        let m = path.match(route.path);
        if (m) {
          pathVariables = m.slice(1);
        }
        response =
          typeof route.handler === 'function'
            ? route.handler(pathVariables, ctx.request.body)
            : route.handler;
      } else {
        if (route.path === path && route.method === method) {
          response =
            typeof route.handler === 'function'
              ? route.handler(ctx.request.body)
              : route.handler;
        }
      }
    }
    if (!response) {
      ctx.ajax(path, { error: true, message: 'mock数据未定义' });
    } else {
      ctx.ajax(response);
    }
  },
};

const preparePath = (exp, handler) => {
  let pathInfo = {};
  let method = 'GET';
  let p = [...exp.split(' ')];
  if (p.length > 1) {
    method = String.prototype.toUpperCase.call(p[0]);
    exp = p[1];
  }
  if (exp.indexOf(':') > 0) {
    exp = exp.replace(/:\w+/g, '([\\d|\\w]+)');
    pathInfo = { method, isReg: true, path: new RegExp(exp) };
  } else {
    pathInfo = { method, isReg: false, path: exp };
  }
  pathInfo.handler = handler;
  return pathInfo;
};

for (let key in mock) {
  routes.push(preparePath(key, mock[key]));
}
