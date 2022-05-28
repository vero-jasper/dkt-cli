/**
 * mock 余额相关api
 * <p>
 * Created at 6/21/18
 * @author Duke
 */
export default {
  'POST /attendance/path/list': {
    totalCount: 2,
    list: [
      {
        docId: 44,
        docNo: '1030142018060713552320182611',
        submitterId: 20182611,
        submitterName: '张敏敏',
        submitTime: 1528350925000,
        orgCode: 'JN8018',
        orgName: 'HRBP部',
        docType: '103014',
        docTypeName: '外勤',
        docContent: 'a',
        docStartStr: '2018-06-11 上午',
        docEndStr: '2018-06-11 下午',
        docDurationStr: '1.0天',
        docStatus: 2,
        docStatusName: '已审批',
        canAudit: false,
        canWithdraw: false,
        canStop: false,
        canUpdateAuditor: false,
      },
      {
        docId: 43,
        docNo: '1030072018060508581220261372',
        submitterId: 20261372,
        submitterName: '魏珍',
        submitTime: 1528160292000,
        orgCode: 'JN3028',
        orgName: '锦绣大区',
        docType: '103007',
        docTypeName: '产检假',
        docContent: '产前检查',
        docStartStr: '2018-06-01 上午',
        docEndStr: '2018-06-01 下午',
        docDurationStr: '1.0天',
        docStatus: 2,
        docStatusName: '已审批',
        canAudit: true,
        canWithdraw: false,
        canStop: false,
        canUpdateAuditor: false,
      },
    ],
    currentPage: 1,
    totalPage: 1,
    pageSize: 10,
  },

  'POST /attendance/path/typeList': {
    list: [
      {
        value: '103004',
        name: '年假',
      },
      {
        value: '103020',
        name: '流产假',
      },
    ],
    currentPage: 1,
    totalPage: 1,
    pageSize: 10,
  },
  'POST /attendance/path/statusList': {
    list: [
      {
        value: 1,
        name: '待审批',
      },
      {
        value: 2,
        name: '已审批',
      },
      {
        value: 4,
        name: '不通过',
      },
      {
        value: 5,
        name: '本人作废',
      },
      {
        value: 6,
        name: '已销假',
      },
      {
        value: 7,
        name: '待销假',
      },
    ],
  },
  'POST /attendance/path/detail': {
    docDetail: {
      docId: 229270613119630,
      docNo: '1030052018050710534220182611',
      submitterId: 20182611,
      submitterName: '张敏敏',
      submitTime: '2018-05-07 10:53:21',
      orgName: '人事部',
      companyName: '济南链家',
      docType: '103005',
      docTypeName: '婚假',
      docContent: '拒绝',
      docDesc: '2018-06-05 上午 至 2018-06-11 下午',
      applyInfo: '本次申请7.0天，本事件期间已申请3.0天',
      hasExtendInfo: true,
      extendInfoSource: [
        {
          key: '结婚日期',
          value: '2018-05-23',
        },
      ],
      docStatus: 1,
      docStatusName: '待审批',
      attachments: [
        {
          attachmentId: 7155,
          fileName: '734a6c50-dc65-4a2e-858f-daaa986447e4.png',
          url:
            'http://storage.lianjia.com/cp-attence-file/cp-attence/accessory/a07deba8-3926-4f04-a137-78ea05b537a1.png',
        },
      ],
      taskDetails: [
        {
          taskName: '制单',
          auditorId: '20182611',
          auditorName: '张敏敏',
          auditorInfo: '张敏敏(20182611)',
          taskStatus: 2,
          taskStatusName: '制单成功',
          auditComment: '',
          updateTime: '2018-05-07 10:53:43',
          duration: '',
          taskStartTime: null,
          taskEndTime: '2018-05-07 10:53:43',
        },
        {
          taskName: '上级审批',
          auditorId: '20159416',
          auditorName: '沈丽红',
          auditorInfo: '沈丽红(20159416)',
          taskStatus: 2,
          taskStatusName: '已审批',
          auditComment: '',
          updateTime: '2018-06-05 13:30:58',
          duration: '29天2小时37分钟15秒',
          taskStartTime: null,
          taskEndTime: '2018-06-05 13:30:58',
        },
        {
          taskName: '考勤员审批',
          auditorId: '20182611',
          auditorName: '张敏敏',
          auditorInfo: '张敏敏(20182611)',
          taskStatus: 1,
          taskStatusName: '待审批',
          auditComment: null,
          updateTime: null,
          duration: null,
          taskStartTime: '2018-06-05 18:56:06',
          taskEndTime: null,
        },
      ],
      durationStr: '7.0天',
      canWithdraw: false,
      canCancel: true,
      canAudit: true,
    },
  },
};
