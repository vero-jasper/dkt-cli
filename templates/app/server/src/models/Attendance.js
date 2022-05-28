/**
 *  === model ===
 *  model: MyModel
 *  created at: Tue May 29 2018 14:46:49 GMT+0800 (CST)
 */

export default class Attendance {
  // 实例初始化方法
  constructor() {}

  // 静态方法
  static async getManageList(query, headers) {
    return await API.attendance.getManageList(query, { headers });
  }
}
