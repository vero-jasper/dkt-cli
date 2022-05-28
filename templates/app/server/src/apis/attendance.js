/**
 *  === api ===
 *  api: myAPI
 *  created at: Tue May 29 2018 14:46:40 GMT+0800 (CST)
 */
import apiConfig from '../configs/api';

export default api => {
  api.config = {
    ...apiConfig,
  };

  // 定义接口 这边的设置是在 config 基础上的
  // 内部的没有点的值复用 config 中的
  api('getManageList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/attendance/manage/list',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  // api(....) 继续定义下一个接口
};

// 下面的特定环境可以深度合并到上面的默认环境
export * from '../configs/api';
