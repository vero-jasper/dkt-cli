/**
 *  === view config ===
 *  模版渲染设置
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

var fs = require('fs');
const path = require('path');

export default {
  // 你想使用的模版类型，默认是 ejs
  template: 'ejs',

  // 项目 外层框架的模版 位置 （相对于 views 文件夹）
  layout: 'layout',

  // 拼装模版数据，在这边写，每次都会带上
  // 可以在这边定义 静态文件的版本号 之类的东西
  data: {
    title: '考勤SASS系统',
    resource(filePath) {
      let resourcePath = path.join(__dirname, './cdnResource.json');
      let stat = fs.existsSync(resourcePath);
      let json = {};
      if (stat) {
        json = fs.readFileSync(resourcePath, { encoding: 'utf-8' });
        json = JSON.parse(json || {});
      }
      return json[filePath] || filePath;
    },
    staticHost: '/static',
  },

  // 是否使用模版缓存
  // cache: false,

  // ejs 的配置
  ejs: {
    compileDebug: false,
    delimiter: '%',
    ext: '.ejs',
  },

  // pug 就是原来的 jade
  pug: {
    compileDebug: false,
    ext: '.pug',
  },
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  data: {
    staticHost: 'http://127.0.0.1:8080',
  },
};
// 测试环境配置
export const testing = {
  data: {
    staticHost: '/public',
  },
};
// off环境配置
export const shoff = {
  data: {
    staticHost: '/public',
  },
};
