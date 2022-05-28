/**
 *  === api ===
 *  api: reportApi
 *  created at: Tue Jun 19 2018 13:50:23 GMT+0800 (CST)
 */
import apiConfig from '../configs/api';
export default api => {
  api.config = {
    ...apiConfig,
  };

  api('exportReport', {
    uri: '/saas/kaoqin/report/v2/downReport',
    method: 'get',
  });
  api('getDepartment', {
    uri: '/saas/kaoqin/common/orgTrees',
    method: 'get',
  });
  // 定义接口 这边的设置是在 config 基础上的
  // 内部的没有点的值复用 config 中的
  api('getReportType', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/report/v2/queryReportType',
    // 接口访问方式 get | post | delete | put ...
    method: 'get',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getPostType', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/report/v2/queryJobSeq',
    // 接口访问方式 get | post | delete | put ...
    method: 'get',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('getCompanyList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/report/path/companyList',
    // 接口访问方式 get | post | delete | put ...
    method: 'get',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('getReportList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/report/v2/queryReportList',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('execute', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/report/v2/execute',

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
export * from '../configs/api';
