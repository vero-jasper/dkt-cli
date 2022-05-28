/**
 *  === model ===
 *  model: PunchModel
 *  created at: Sat Jun 23 2018 14:26:58 GMT+0800 (CST)
 */

export default class PunchModel {
  // 实例初始化方法
  constructor() {}

  // 静态方法
  static staticFunction() {}

  // 静态同步方法
  static async staticAsyncFunction() {}

  // 实例方法
  staticFunction() {}

  // 实例同步方法
  static async asyncFunction() {}

  /**
   * 提交打卡规则
   * @param query
   * @returns {*}
   */
  static async ruleSubmit(query, headers) {
    console.log('header:', headers);
    return await API.punchAPI.ruleSubmit(query, { headers });
  }

  /**
   * 更新打卡规则
   * @param query
   * @returns {*}
   */
  static async ruleUpdate(query, headers) {
    return await API.punchAPI.ruleUpdate(query, { headers });
  }
}
