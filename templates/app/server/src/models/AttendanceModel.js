/**
 *  === model ===
 *  model: AttendanceModel
 *  created at: Mon Jun 25 2018 11:18:16 GMT+0800 (CST)
 */

export default class AttendanceModel {
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

  static async getEmployeeInfoById(query, headers) {
    console.log('获取人事信息：', query);
    return await API.attendanceAPI.getEmployeeInfoById(query, { headers });
  }

  /**
   * 获取我的考勤审批列表
   * @param query
   * @returns {*}
   */
  static async getApproveList(query, headers) {
    console.log('开始查询列表:', query);
    return await API.attendanceAPI.getApproveList(query);
  }

  /**
   * 修改审批人
   * @param query
   * @returns {*}
   */
  static async updateAuditor(query, headers) {
    console.log('修改审批人:', query);
    return await API.attendanceAPI.updateAuditor(query, { headers });
  }

  /**
   * 获取审批人信息
   * @param query
   * @returns {*}
   */

  static async getAuditorInfo(query, headers) {
    console.log('获取审批人信息:', query);
    return await API.attendanceAPI.getAuditorInfo(query, { headers });
  }

  /**
   * 获取待审批数
   * @param query
   * @returns {*}
   */

  static async getApproveCount(query, headers) {
    console.log('获取待审批数量:', query);
    return await API.attendanceAPI.getApproveCount(query, { headers });
  }

  /**
   * 获取考勤申请状态列表
   * @param query
   * @returns {*}
   */
  static async getStatusList(query, headers) {
    console.log('开始查询状态');
    return await API.attendanceAPI.getStatusList(query, { headers });
  }

  /**
   * 获取考勤申请类型列表
   * @param query
   * @returns {*}
   */
  static async getTypeList(query, headers) {
    console.log('开始查询类别');
    return await API.attendanceAPI.getTypeList(query, { headers });
  }

  /**
   * 审批
   * @param query
   * @returns {*}
   */
  static async approve(query, headers) {
    console.log('单条审批：', query);
    return await API.attendanceAPI.approve(query, { headers });
  }

  /**
   * 批量审批
   * @param query
   * @returns {*}
   */
  static async batchAudit(query, headers) {
    console.log('批量审批：', query);
    return await API.attendanceAPI.batchAudit(JSON.stringify(query), {
      headers,
    });
  }

  /**
   * 作废or撤销
   * @param query
   * @returns {*}
   */
  static async cancelApprove(query, headers) {
    return await API.attendanceAPI.cancelApprove(query, { headers });
  }

  /**
   * 销假
   * @param query
   * @returns {*}
   */
  static async withDrawApprove(query, headers) {
    return await API.attendanceAPI.withDrawApprove(query, { headers });
  }

  /**
   * 审批详情
   * @param query
   * @returns {*}
   */
  static async detail(query, headers) {
    return await API.attendanceAPI.detail(query, { headers });
  }

  /**
   * 获取考勤申请类型列表
   * @param query
   * @returns {*}
   */
  static async getApplyType(query, headers) {
    return await API.attendanceAPI.getApplyType(query, { headers });
  }

  /**
   * 获取考勤申请类型详情
   * @param query
   * @returns {*}
   */
  static async getApplyTypeDetail(query, headers) {
    return await API.attendanceAPI.getApplyTypeDetail(query, { headers });
  }

  /**
   * 提交申请
   * @param query
   * @returns {*}
   */
  static async submit(query, headers) {
    return await API.attendanceAPI.submit(query, { headers });
  }

  /**
   * 计算时长
   * @param query
   * @returns {*}
   */
  static async calcDuration(query, headers) {
    return await API.attendanceAPI.calcDuration(query, { headers });
  }

  /**
   * 考勤日历面板统计
   * @param query
   * @returns {*}
   */
  static async statistics(query, headers) {
    return await API.attendanceAPI.statistics(query, { headers });
  }

  /**
   * 考勤日历综合信息
   * @param query
   * @returns {*}
   */
  static async getCalendarInfo(query, headers) {
    return await API.attendanceAPI.getCalendarInfo(query, { headers });
  }
}
