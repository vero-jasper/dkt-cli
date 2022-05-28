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
  api('getOverTimeTypes', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/rule/overtime/types',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('saveOverTime', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/rule/overtime/save',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('updateOverTime', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/rule/overtime/update',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getDetail', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'saas/kaoqin/rule/detail',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getList', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/{type}/list',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getApplyTypes', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/apply/types',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('deleteRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/delete',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getValidDateTypes', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/overtime/validDateTypes',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getEnumTypes', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/basic/enumType',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getBasicRuleDetail', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/basicRule/detail',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('saveBasicRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/baseRule/save',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('updateBasicRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/basicRule/update',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getScheduleLegals', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/schedule/legal',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    //contentType: 'application/x-www-form-urlencoded',
    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('saveScheduleRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/scheduleRule/save',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    contentType: 'application/json',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('updateScheduleRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/scheduleRule/update',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    contentType: 'application/json',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('saveApplyRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/applyRule/save',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('updateApplyRule', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/applyRule/update',

    // 接口访问方式 get | post | delete | put ...
    method: 'post',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getValidTime', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/annual/getValidTime',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getFirstAvailableTime', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/annual/getFirstAvailableTime',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getNoConvertMonths', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/annual/getNoConvertMonths',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('getFirstYearConvert', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/annual/getFirstYearConvert',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    },
  });

  api('genConfigDemo', {
    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: '/saas/kaoqin/rule/annual/genConfigDemo',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

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
