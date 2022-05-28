/**
<<<<<<< 8758df76a22ce1ddb7e93b5f3a16cec143734789
 * Created by CaoChen on 18/6/21.
 */

export default {
  'GET /common/orgTrees': [
    {
      orgCode: 'JN7007',
      hasChild: true,
      name: '人力资源中心',
      id: 39227,
    },
    {
      orgCode: 'JN7008',
      hasChild: true,
      name: '行政支持中心',
      id: 39228,
      shortName: '行政支持中心',
    },
    {
      orgCode: 'JN7010',
      hasChild: true,
      name: '培训中心',
      id: 39229,
    },
  ],

  //查询员工信息
  'POST /common/path/searchEmployer': {
    list: [
      {
        id: 20133022,
        name: '张三',
      },
      {
        id: 20133422,
        name: '李四',
      },
      {
        id: 20132022,
        name: '赵六',
      },
    ],
  },
  //部门信息信息
  'POST /common/path/departmentList': {
    list: [
      {
        id: 20133022,
        name: '北京链家',
      },
      {
        id: 20133422,
        name: '上海链家',
      },
      {
        id: 20132022,
        name: '南京链家',
      },
    ],
  },
  //查询职务序列
  'POST /common/path/jobSeqList': {
    list: [
      {
        id: 20133022,
        name: '组长',
      },
      {
        id: 20133422,
        name: '经理',
      },
      {
        id: 20132022,
        name: '总裁',
      },
    ],
  },

  // 员工信息
  'GET /employee/getLiteEmployee': [
    {
      userCode: 12345,
      userName: '姓名',
      companyName: '公司名称',
      orgName: '组织名称',
      jobName: '岗位名称',
    },
  ],

  'GET /common/jobSeqEnum': [{ code: 1, name: '运营' }],
};
