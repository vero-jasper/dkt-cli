/**
 *  === model ===
 *  model: ReportModel
 *  created at: Tue Jun 19 2018 13:51:09 GMT+0800 (CST)
 */

export default class ReportModel {
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
   * 获取请求类型
   * @param query
   * @returns {*}
   */
  static async exportReport(query, headers) {
    console.log('导出报表：', query);
    return await API.reportAPI.exportReport(query, { headers });
  }
  /**
   * 获取组织树
   * @param query
   * @returns {*}
   */
  static async getDepartment(query, headers) {
    console.log('获取组织树：', query);
    return await API.reportAPI.getDepartment(query, { headers });
  }

  /**
   * 获取reportType
   * @param query
   * @returns {*}
   */
  static async getReportType(query, headers) {
    console.log('获取reportType:', query);
    return await API.reportAPI.getReportType(query, { headers });
  }

  /**
   * 获取职位序列
   * @param query
   * @returns {*}
   */
  static async getPostType(query, headers) {
    console.log('职位序列:', query);
    return await API.reportAPI.getPostType(query, { headers });
  }

  /**
   * 获取公司列表
   * @param query
   * @returns {*}
   */
  static async getCompanyList(query) {
    return await API.reportAPI.getCompanyList(query);
  }

  /**
   * 获取报表列表
   * @param query
   * @returns {*}
   */
  static async getReportList(query) {
    console.log('获取报表类型', query);
    return await API.reportAPI.getReportList(query);
  }

  /**
   * 执行报表
   * @param query
   * @returns {*}
   */
  static async execute(query) {
    return await API.reportAPI.execute(query);
  }
}
