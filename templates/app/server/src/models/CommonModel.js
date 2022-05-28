/**
 *  === model ===
 *  model: CommonModel
 *  created at: Sat Jun 23 2018 15:22:47 GMT+0800 (CST)
 */

export default class CommonModel {
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
   * 获取部门列表
   * @param query
   * @returns {*}
   */
  static async getDepartmentList(query) {
    return await API.balanceAPI.getDepartmentList(query);
  }

  /**
   * 获取职务序列
   * @param query
   * @returns {*}
   */
  static async getJobSeqList(query) {
    return await API.balanceAPI.getJobSeqList(query);
  }

  /**
   * 搜索员工信息
   * @param query
   * @returns {*}
   */
  static async searchEmployer(query) {
    return await API.balanceAPI.searchEmployer(query);
  }

  /**
   * 文件上传
   * @param query
   * @returns {*}
   */
  static async upload(query, headers) {
    return await API.uploadAPI.upload(query, { headers });
  }
}
