/**
 <<<<<<< 8758df76a22ce1ddb7e93b5f3a16cec143734789
 * Created by CaoChen on 18/6/21.
 */

export default {
  'GET /attendance/manage/list': {
    totalPage: 1,
    pageSize: 10,
    totalCount: 1,
    list: [
      {
        scq: 9,
        late: 1,
        ycq: 10,
        outside: 3,
        jobSeqName: '职能',
        absent: 0,
        position: '招聘经理',
        userName: '张敏敏',
        department: '人事部',
        userCode: 20182611,
        early: 2,
      },
    ],
    currentPage: 1,
  },

  'GET /attendance/manage/summary': {
    userName: 'Fiona',
    userCode: 21329245,
    department: '人事部',
    position: '软件开发',
    summaryList: [
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
      {
        unit: '',
        name: '外勤',
        count: 3,
      },
    ],
  },

  'GET /attendance/manage/detailList': {
    detailVOList: [
      {
        date: '2018-06-01',
        upDetailStatus: 2,
        breastFeedStr: '哺乳假',
        week: '周五',
        escapeType: '102003',
        upDetailType: '103022',
        breastFeedType: '103003',
        breastFeedStatus: 2,
        dayType: 1,
        upCheck: '9:00',
        downDetailType: '103022',
        downDetail: '外勤',
        downDetailStatus: 1,
        overtimes: [
          {
            overTimeStr: '法定节假日加班',
            overTimeStatus: 2,
            overTimeType: 102001,
            userDetailId: 12,
          },
        ],
        upStatus: 1,
        downStatus: 32,
        escape: '免考勤',
        upDetail: '外勤',
        downCheck: '19:00',
      },
    ],
    admin: 1, // 2
  },

  'POST /attendance/manage/cancel': {},

  'GET /attendance/manage/type': [
    {
      type: '111',
      name: '外勤',
    },
    {
      type: '222',
      name: '事假',
    },
    {
      type: '333',
      name: '打卡',
    },
  ],

  'GET /attendance/manage/update/info': {
    day: 1,
    time: 1,
    during: 1,
  },

  'POST /attendance/manage/update': {},
};
