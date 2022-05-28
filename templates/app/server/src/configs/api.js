/**
 * Created by charles on 2017/11/10.
 */
import loginConfig from './login';
import tokenRecorder from '../util/token';

const _SERVER_URL_BASE = {
  production: 'http://aroute.ke.com',
  // development: 'http://aroute.shoff.ke.com',
  development: 'http://aroute.shoff.ke.com',
  //development: 'http://10.120.21.55:8081',
  testing: 'http://aroute.test.ke.com',
  shoff: 'http://aroute.shoff.ke.com',
};

export const SERVER_URL_BASE = _SERVER_URL_BASE;

export default {
  // 接口超时时间
  timeout: 10000,

  // 默认的返回值简单约定， {code: , data:, msg:} 的形式返回
  // 如果是这种返回形式的话，那么通过下面参数，做接口检查
  codeKey: 'code',
  dataKey: 'data',
  messageKey: 'msg',
  successCode: 100000,

  // 接口的协议，域名，端口
  base: _SERVER_URL_BASE.production,

  // 接口请求数据格式
  contentType: 'application/x-www-form-urlencoded',

  requestHandler(req) {
    req.headers.cookie = `${loginConfig.general.tokenName}=${global.lj_cookie}`;
    return req;
  },

  async responseHandler(res) {
    let json = {};
    try {
      json = JSON.parse(res.body);
    } catch (e) {}
    if (res.statusCode !== 200) {
      json.error = true;
    }
    return json;
  },

  async requestHandler(req) {
    if (req.headers) {
      req.headers['Authorization'] = tokenRecorder.getToken().auth;
      req.headers['X-Login-Token'] = tokenRecorder.getToken().loginToken;
    }
    // 转换param
    if (
      req.method == 'POST' &&
      req.headers['Content-Type'] == 'application/x-www-form-urlencoded'
    ) {
      req.form = this.obj2Form(req.form);
    }
    // req.headers['Lianjia-Ucid'] = '1000000020182611';
    // req.uri = req.uri.replace('/saas/kaoqin', '');
    return req;
  },

  obj2Form(params) {
    let paramPairs = [];
    for (let key in params) {
      if (this.isEmpty(params[key]) === false) {
        paramPairs.push(key + '=' + params[key]);
      }
    }
    return paramPairs.join('&');
  },

  isEmpty(val) {
    if (val === undefined || val === null || val.toString() === '') {
      return true;
    }
    return false;
  },
};

// 生产环境配置
export const production = api => {
  api.config.base = _SERVER_URL_BASE.production;
};

// 开发环境配置
export const development = api => {
  // 接口的协议，域名，端口
  api.config.base = _SERVER_URL_BASE.development;
};

// 测试环境配置
export const testing = api => {
  api.config.base = _SERVER_URL_BASE.testing;
};

// off环境配置
export const shoff = api => {
  api.config.base = _SERVER_URL_BASE.shoff;
};
