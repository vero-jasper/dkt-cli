/**
 *  === api ===
 *  api: attendanceAPI
 *  created at: Mon Jun 25 2018 11:17:59 GMT+0800 (CST)
 */
import apiConfig from '../configs/api';
export default api => {
  api.config = {
    ...apiConfig,
  };

  api('getList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/list',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getEmployeeInfoById', {
    uri: 'saas/kaoqin/employee/getLiteEmployee',
    method: 'get',
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('updateAuditor', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/updateAuditor',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getAuditorInfo', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/currentAuditor',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getApproveCount', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/countTodo',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getApproveList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/list',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getTypeList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/common/allDocTypes',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('getStatusList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/common/allDocStatus',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('batchAudit', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/batchAudit',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('approve', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/audit',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('cancelApprove', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/cancel',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('withDrawApprove', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/withdraw',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });
  api('detail', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/audit/v2/detail',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('getApplyType', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/apply/validTypes',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('getApplyTypeDetail', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/apply/getSubmitVO',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('submit', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/apply/submit',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },

    contentType: 'application/json',
  });

  api('calcDuration', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/apply/calcDuration',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('statistics', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/myAttenceCalender/summary',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type
    },
  });

  api('getCalendarInfo', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/myAttenceCalender/getMyCurrentMonthAttenceV2',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

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
