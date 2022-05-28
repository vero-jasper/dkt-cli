/**
 * Created by CaoChen on 18/6/21.
 */

export default {
  // 获取加班类型
  'GET /rule/overtime/types': [1, 2],

  // 提交加班规则
  'POST /rule/overtime/save': {},

  // 更新加班规则
  'POST /rule/overtime/update': {},

  // 规则详情
  'GET /rule/detail': {
    ruleId: 0,
    mappingId: 0,
    companyCode: '公司编码',
    companyName: '公司名称',
    orgCode: '组织编码',
    orgName: '组织名称',
    groupId: 0,
    groupName: '考勤组name',
    jobSeqIds: [2, 1],
    jobSeqNames: ['职务序列名称'],
    sexs: [0],
    sexNames: ['性别'],
    empTypeIds: [1],
    empTypeNames: ['员工类型'],
    startDate: '生效时间',
    endDate: '结束时间',
    startTime: 1529637304679,
    endTime: 1529637304679,
    remark: '备注',
    ruleType: 0,
    ruleName: '规则名称',
    canEdit: 0,
    ruleConfigDOS: [null],
    dayDetailList: [null],
    ruleTypeName: '规则类型名',
    unit: 2, // 自定
    minDuration: 12, // 自定
    asRemain: 1, // 自定
    validDate: 1, // 自定
    needAudit: 1, // 自定
    // auditSteps:[10], // 自定
    needAdminAudit: 1, // 自定
  },

  // 规则列表页
  'GET /rule/type/list': {},

  'GET /rule/basic/enumType': [
    {
      code: 1,
      name: '枚举名称1',
    },
    {
      code: 2,
      name: '枚举名称2',
    },
  ],

  'GET /rule/basicRule/detail': {
    ruleId: 3,
    ruleName: '济南工作日加班规则规则',
    ruleType: 102003,
    ruleTypeName: '工作日加班',
    startMonth: '2018-05', //起始生效月
    companyCode: 'JN9999',
    companyName: '济南链家',
    orgCode: 'JN92934',
    orgName: '济南二大区',
    groupId: null,
    //预留字段
    groupName: '',
    //预留字段
    jobSeqIds: [1, 2],
    jobSeqNames: ['运营', '职能'],
    sexs: [0, 1],
    sexNames: ['男', '女'],
    empTypeIds: [1, 2],
    empTypeNames: ['正式员工', '实习生'],
    canEdit: 1,
    // 是否能编辑 1能, 2不能
    creator: 10003454,
    creatorName: '老王',
    createTime: '2018-05-01 01:01:01',
    updator: 10003454,
    updatorName: '老王',
    updateTime: '2018-05-01 01:01:01',
    // 审批截止规则: type 100
    ruleInfo: {
      applyEndMonth: 100111,
      applyEndMonthStr: '当月',
      applyEndDate: 100121,
      applyEndDateStr: '月末倒数2天',
      applyEndHour: '12:00',
      auditEndMonth: 100111,
      auditEndMonthStr: '当月',
      auditEndDate: 100121,
      auditEndDateStr: '月末倒数2天',
      auditEndHour: '18:00',
      autoPass: 1,
      //1: 自动通过, 2:自动不通过
    },
    // 加班规则 type 102
    /*"ruleInfo_102": {
      "unit": 2, //1:天, 2:小时, 4:半天
      "unitStr": "小时",
      "needAudit": 1, // 是否需要审批, 1: 是, 2:否
      "auditSteps": [3,5], //配置为[3,5]表示超过3天需要二级上级, 超过5天需要三级上级
      "needAdminAudit": 2, //是否需要管理员审批, 1: 是, 2:否
      "dayDiscountType": 103101, //日期计算类型: 103101 工作日, 103102自然日,
      "dayDiscountTypeStr": "工作日",
      "canWithdraw": null,//预留字段
      "asRemain": 1, //是否可作为调休, 1:可以, 2:不可以
      "restValidDate": 103191, // 调休有效期
      "restValidDateStr": "三个月", // 调休有效期
      "minDuration": 1,
      "minDurationStr": "1小时"
    },
    // 勤假规则 type 103
    "ruleInfo_103": {
      "unit": 2, //1:天, 2:小时, 4:半天
      "unitStr": "小时",
      "needAudit": 1, // 是否需要审批, 1: 是, 2:否
      "auditSteps": [3,5], //配置为[3,5]表示超过3天需要二级上级, 超过5天需要三级上级
      "needAdminAudit": 2, //是否需要管理员审批, 1: 是, 2:否
      "dayDiscountType": 103101, //日期计算类型: 103101 工作日, 103102自然日,
      "dayDiscountTypeStr": "工作日",
      "canWithdraw": null,//预留字段
      "requireAttachment":1,//是否需要附件, 1: 是, 2:否
      "attachmentNote":"附件文案",
      "applyNote":"勤假规则文案"
    },
    // 打卡规则: type 112
    "ruleInfo_112": {
    },*/
    // 排班规则 type 104
    /*"dayDetailList": [
      {
        "date":"2018-06-01",
        "dayType":1, //1:工作日, 2:公休日, 3:法定节假日
        "checkUpTime":"09:00",
        "checkDownTime":"18:00",
        "noonRestStart":"12:00",
        "noonRestEnd":"13:30"
      },{
        "date":"2018-06-02",
        "dayType":2, //1:工作日, 2:公休日, 3:法定节假日
        "checkUpTime":"09:00",
        "checkDownTime":"18:00",
        "noonRestStart":"12:00",
        "noonRestEnd":"13:30"
      }
    ]*/
  },

  'POST /rule/basicRule/save': {},

  'POST /rule/basicRule/update': {},
};
