/**
 *  === model ===
 *  model: MyModel
 *  created at: Tue May 29 2018 14:46:49 GMT+0800 (CST)
 */

export default class MyModel {
  // 实例初始化方法
  constructor() {}

  // 静态方法
  static async staticFunction(query) {
    return await API.myAPI.getPeriodName(query);
  }

  // 实例方法
  staticFunction() {}

  // 实例同步方法
  static async asyncFunction() {}
}
