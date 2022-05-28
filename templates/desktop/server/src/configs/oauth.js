export default {
  enable: true,
  gateway: 'http://i.aroute.ke.com',
  client_id: 'client_id',
  client_secret: 'client_secret'
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
	gateway: 'http://aroute.test.ke.com',
  client_id: 'client_id',
  client_secret: 'client_secret'
}

// 测试环境配置
export const testing = {
  gateway: 'http://aroute.test.ke.com',
  client_id: 'client_id',
  client_secret: 'client_secret'
}

// off环境配置
export const off = {
  gateway: 'http://aroute.shoff.ke.com',
  client_id: 'client_id',
  client_secret: 'client_secret'
}