/**
 *  === model ===
 *  model: MyModel
 *  created at: Tue May 29 2018 14:46:49 GMT+0800 (CST)
 */

export default class Common {
  // 实例初始化方法
  constructor() {}

  static async getJobSeqEnum(query, headers) {
    return await API.commAPI.getJobSeqEnum(query, { headers });
  }

  static async getEmpTypeEnum(query, headers) {
    return await API.commAPI.getEmpTypeEnum(query, { headers });
  }

  static async getSexEnum(query, headers) {
    return await API.commAPI.getSexEnum(query, { headers });
  }

  static async getOrgTrees(query, headers) {
    return await API.commAPI.getOrgTrees(query, { headers });
  }

  static async getLiteEmployee(query, headers) {
    return await API.commAPI.getLiteEmployee(query, { headers });
  }
}
