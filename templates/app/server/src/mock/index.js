/**
 * Created by CaoChen on 18/5/30.
 */
import Test from './test';
import balance from './balance/index';
import Common from './common';
import Rule from './rule';
import Attendance from './attendance';
import GeneralView from './generalView';
export default {
  // 获取考核关系列表
  ...Test,
  ...Common,
  ...Rule,
  ...GeneralView,
  // 获取考勤申请报表类型
  'GET /report/path/type': {
    status: 'ok',
    msg: '成功',
    data: [
      {
        name: '勤假汇总表',
        type: 'qinjia',
      },
      {
        name: '打卡记录表',
        type: 'daka',
      },
    ],
  },
  //获取职位信息
  'GET /report/path/post': {
    status: 'ok',
    msg: '成功',
    data: [
      {
        name: '全部',
        type: '0',
      },
      {
        name: '运营',
        type: '1',
      },
      {
        name: '职能',
        type: '2',
      },
      {
        name: '助理',
        type: '3',
      },
    ],
  },
  //获取公司列表信息
  'GET /report/path/companyList': {
    status: 'ok',
    msg: '成功',
    data: [
      {
        companyName: '上海链家',
        companyId: '0',
      },
      {
        companyName: '北京链家',
        companyId: '1',
      },
    ],
  },
  //获取报表列表信息
  'GET /report/path/reportList': {
    status: 'ok',
    msg: '成功',
    data: [
      {
        companyName: '上海链家',
        companyId: '0',
      },
      {
        companyName: '北京链家',
        companyId: '1',
      },
    ],
  },
  //执行报表操作
  'POST /report/path/execute': {
    status: 'ok',
    msg: '成功',
    data: [
      {
        companyName: '上海链家',
        companyId: '0',
      },
      {
        companyName: '北京链家',
        companyId: '1',
      },
    ],
  },
  ...balance,
  ...Attendance,
};
