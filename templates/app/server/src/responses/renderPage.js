import { SERVER_URL_BASE } from '../configs/api';
const parseCookie = cookie => {
  var cookies = {};
  if (!cookie) {
    return cookie;
  }
  var list = cookie.split(';');
  for (var i = 0; i < list.length; i++) {
    var pair = list[i].split('=');
    cookies[pair[0].trim()] = pair[1];
  }
  return cookies;
};
export default (ctx, config) => (page, options) => {
  const cookie = ctx.request.headers.cookie;
  console.log(parseCookie(cookie));
  console.log('cookie>>>>>', cookie);
  ctx.response.render(page, {
    serverHost: SERVER_URL_BASE[ctx.app.env],
  });
};
