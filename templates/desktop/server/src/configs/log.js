/**
 *  === log config ===
 *  日志配置
 *
 *  created at: Tue Jul 24 2018 20:35:00 GMT+0800 (CST)
 */

import prodConfig from './_prod'
import path from 'path'
import log4js from 'log4js'

log4js.layouts.addLayout('json', (config) => (logEvent) => JSON.stringify(logEvent) + config.separator)

export default {

  // log 文件的保存位置
  logPath: prodConfig.base.MATRIX_APPLOGS_DIR,

  // api 记录你通过 API 方式调用的记录
  api: {
    // log4js配置
    filename: 'api.log',
    type: 'dateFile',
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: false,
    layout: {
      type: 'json', // pattern
      separator: ',',
      pattern: '%d{yyyy-MM-dd hh:mm:ss}|%m'
    },

    // 是否记录 response 的 body 数据
    isLogResponseBody: false,
    // 日志格式处理
    logFormatter ({ startTime, endTime, target, request, response }) {
      return [
        request.method,                       // method GET | POST
        target,                               // 接口api 请求url
        JSON.stringify(request.body) || '-',  // 请求参数
        response.status,                      // 请求响应的状态码
        endTime - startTime,                  // 响应时间
        JSON.stringify(response.body)         // 响应内容
      ].join('|')
    }
  },

  // api 记录项目中所有的代码错误
  error: {
    filename: 'error.log',
    type: 'dateFile',
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: false,
    layout: {
      type: 'json', // pattern
      separator: ',',
      pattern: '%d{yyyy-MM-dd hh:mm:ss}|%m'
    }
  },

  // access 记录项目中所有的访问日志
  access: {
    filename: 'access.log',
    type: 'dateFile',
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: false,
    layout: {
      type: 'json', // pattern
      separator: ',',
      pattern: '%d{yyyy-MM-dd hh:mm:ss}|%m'
    }
  },

  // api 记录需要通过 Logger 主动记录
  // 用于记录跟踪数据
  application: {
    filename: 'application.log',
    type: 'dateFile',
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: false,
    layout: {
      type: 'json', // pattern
      separator: ',',
      pattern: '%d{yyyy-MM-dd hh:mm:ss}|%m'
    }
  }
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  logPath: path.resolve(__dirname, '../../log'),
  api: {
    isLogResponseBody: true
  }
}
// 测试环境配置
export const testing = {
  logPath: path.resolve(__dirname, '../../log'),
}