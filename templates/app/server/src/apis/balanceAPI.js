/**
 *  === api ===
 *  api: balanceAPI
 *  created at: Thu Jun 21 2018 10:29:36 GMT+0800 (CST)
 */

export default api => {
  api.config = {
    // 接口超时时间
    timeout: 10000,

    // 默认的返回值简单约定， {code: , data:, msg:} 的形式返回
    // 如果是这种返回形式的话，那么通过下面参数，做接口检查
    codeKey: 'code',
    dataKey: 'data',
    messageKey: 'msg',

    // 可以使用以下方法 处理 api 请求前的数据
    // requestHandler () {}

    // 可以使用以下方法 处理 api 返回的数据
    // responseHandler () {}

    // 当 [codeKey] === [successCode] 是认为请求成功
    successCode: 100000,

    // 接口的协议，域名，端口
    base: 'http://<domain>:[port]',

    // 上行格式 可以是:
    // application/x-www-form-urlencoded
    // multipart/form-data
    // application/json
    // 等等
    // contentType: 'application/x-www-form-urlencoded'
  };

  // 是否使用缓存
  // 简单的缓存设置， 写使用的 redis 名即可
  // cache: 'cache',
  // 如果想自定义，可以使用下面的
  // cache: {
  //   redis: 'cache',
  //   key: req => req.method === 'GET' ? req.uri : null,
  //   fromCache: cache => JSON.parse(cache),
  //   toCache: data => JSON.stringify(data)
  // }

  api('list', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/remain/list',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  }),
    api('getBalanceDetail', {
      // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
      // 在请求的 uriReplacer 参数设置
      uri: '/saas/kaoqin/remain/detail',

      // 接口访问方式 get | post | delete | put ...
      method: 'post',

      // 接口参数检查
      parameters: {
        // string: api.type.string.required,
        // number: api.type
      },
    }),
    api('modifyBalance', {
      // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
      // 在请求的 uriReplacer 参数设置
      uri: '/saas/kaoqin/remain/record/old',

      // 接口访问方式 get | post | delete | put ...
      method: 'post',

      // 接口参数检查
      parameters: {
        // string: api.type.string.required,
        // number: api.type
      },
    });

  // api(....) 继续定义下一个接口
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = api => {};

// 测试环境配置
export const testing = api => {};

// off环境配置
export const shoff = api => {};
