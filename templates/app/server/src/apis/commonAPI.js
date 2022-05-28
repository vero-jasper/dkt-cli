/**
 *  === api ===
 *  api: commonAPI
 *  created at: Sat Jun 23 2018 15:22:35 GMT+0800 (CST)
 */
import apiConfig from '../configs/api';
export default api => {
  api.config = {
    ...apiConfig,
  };

  api('searchEmployer', {
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
    api('getJobSeqList', {
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
    api('getDepartmentList', {
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
    });

  api('upload', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/file/upload',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
    contentType: 'multipart/form-data',
  });

  // api(....) 继续定义下一个接口
};

// 下面的特定环境可以深度合并到上面的默认环境
export * from '../configs/api';
