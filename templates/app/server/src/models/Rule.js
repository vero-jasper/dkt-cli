/**
 *  === model ===
 *  model: MyModel
 *  created at: Tue May 29 2018 14:46:49 GMT+0800 (CST)
 */

export default class Rule {
  // 实例初始化方法
  constructor() {}

  // 静态方法
  static async getOverTimeTypes(query, headers) {
    return await API.ruleAPI.getOverTimeTypes(query, { headers });
  }

  // 静态方法
  static async saveOverTime(query, headers) {
    return await API.ruleAPI.saveOverTime(query, { headers });
  }

  static async updateOverTime(query, headers) {
    return await API.ruleAPI.updateOverTime(query, { headers });
  }

  static async getDetail(query, headers) {
    return await API.ruleAPI.getDetail(query, { headers });
  }

  static async deleteRule(query, headers) {
    return await API.ruleAPI.deleteRule(query, { headers });
  }

  static async getList(query, headers) {
    let type = query.type;
    delete query.type;
    return await API.ruleAPI.getList(query, { headers, uriReplacer: { type } });
  }

  static async getApplyTypes(query, headers) {
    return await API.ruleAPI.getApplyTypes(query, { headers });
  }

  static async getValidDateTypes(query, headers) {
    return await API.ruleAPI.getValidDateTypes(query, { headers });
  }

  static async getEnumTypes(query, headers) {
    return await API.ruleAPI.getEnumTypes(query, { headers });
  }

  static async getBasicRuleDetail(query, headers) {
    return await API.ruleAPI.getBasicRuleDetail(query, { headers });
  }

  static async saveBasicRule(query, headers) {
    return await API.ruleAPI.saveBasicRule(query, { headers });
  }

  static async updateBasicRule(query, headers) {
    return await API.ruleAPI.updateBasicRule(query, { headers });
  }

  static async getScheduleLegals(query, headers) {
    return await API.ruleAPI.getScheduleLegals(query, { headers });
  }

  static async saveScheduleRule(query, headers) {
    let res = await API.ruleAPI.saveScheduleRule(query, { headers });
    return res;
  }

  static async updateScheduleRule(query, headers) {
    return await API.ruleAPI.updateScheduleRule(query, { headers });
  }

  static async saveApplyRule(query, headers) {
    let res = await API.ruleAPI.saveApplyRule(query, { headers });
    return res;
  }

  static async updateApplyRule(query, headers) {
    return await API.ruleAPI.updateApplyRule(query, { headers });
  }

  static async getValidTime(query, headers) {
    return await API.ruleAPI.getValidTime(query, { headers });
  }

  static async getFirstAvailableTime(query, headers) {
    return await API.ruleAPI.getFirstAvailableTime(query, { headers });
  }

  static async getNoConvertMonths(query, headers) {
    return await API.ruleAPI.getNoConvertMonths(query, { headers });
  }

  static async getFirstYearConvert(query, headers) {
    return await API.ruleAPI.getFirstYearConvert(query, { headers });
  }

  static async genConfigDemo(query, headers) {
    return await API.ruleAPI.genConfigDemo(query, { headers });
  }
}
