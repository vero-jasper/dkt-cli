/**
 * Created by charles on 2018/5/31.
 */
export default {
  gateway: 'http://aroute.ke.com',
  client_id: 'kaoqin_hr_ke_comCy_8WkzwHgzPdh',
  client_secret:
    'AMBYpEQWaz-hzEKDnQPpKM-vpT71EVAtu8Onh-FlQtjDzcSiplwn8F3yPprFooZmlg==',
};

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  //'gateway': 'http://aroute.shoff.ke.com',
  //'client_id': 'kaoqin_hr_ke_comCp_e-xDRAdNABs',
  //'client_secret': 'KFOr5G9mB5J5ngJCGcsVSJR2LAAGF8eYtn8gHvzS4SZv0uZsk8G-T0aCqg0ZxS1Q'
  gateway: 'http://aroute.shoff.ke.com',
  client_id: 'kaoqin_hr_ke_comCp_e-xDRAdNABs',
  client_secret:
    'KFOr5G9mB5J5ngJCGcsVSJR2LAAGF8eYtn8gHvzS4SZv0uZsk8G-T0aCqg0ZxS1Q',
};
// 测试环境配置
export const testing = {
  gateway: 'http://aroute.test.ke.com',
  client_id: 'kaoqin_hr_ke_comBDdzGw5AhWqy2-',
  client_secret:
    'PWnDnRion6iLMeKzzidfaS_5eb0vG5MW6s8Ehuw9yXeq2xf2-teyalUAJ71MSzLP',
};

// off环境配置
export const shoff = {
  gateway: 'http://aroute.shoff.ke.com',
  client_id: 'kaoqin_hr_ke_comCp_e-xDRAdNABs',
  client_secret:
    'KFOr5G9mB5J5ngJCGcsVSJR2LAAGF8eYtn8gHvzS4SZv0uZsk8G-T0aCqg0ZxS1Q',
};
