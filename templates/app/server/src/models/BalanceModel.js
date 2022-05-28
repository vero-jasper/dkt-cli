/**
 *  === model ===
 *  model: BalanceModel
 *  created at: Thu Jun 21 2018 10:30:03 GMT+0800 (CST)
 */

export default class BalanceModel {
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
   * 获取余额列表
   * @param query
   * @returns {*}
   */
  static async getBalanceList(query) {
    return await API.balanceAPI.list(query, {});
  }

  /**
   * 获取余额详情
   * @param query
   * @returns {*}
   */
  static async getBalanceDetail(query) {
    return await API.balanceAPI.getBalanceDetail(query);
  }

  /**
   * 修改余额信息
   * @param query
   * @returns {*}
   */
  static async modifyBalance(query) {
    return await API.balanceAPI.modifyBalance(query);
  }
}
