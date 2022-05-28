/**
 * mock 余额相关api
 * <p>
 * Created at 6/21/18
 * @author Duke
 */
export default {
  //获取假期余额列表
  'POST /balance/path/list': {
    totalPage: 1,
    pageSize: 10,
    totalCount: 1,
    list: [
      {
        positionName: '主管',
        overtimeValue: 9,
        jobSeq: '职能',
        annualValue: 8.5,
        userName: '张敏敏',
        department: 'HRBP部',
        userCode: 20182611,
      },
    ],
    currentPage: 1,
  },

  //余额详情
  'POST /balance/path/detail': {
    totalPage: 1,
    pageSize: 10,
    totalCount: 1,
    list: [
      {
        typeName: '法定节假日加班',
        value: 8,
        usedNum: 0,
        userCode: 20172205,
        allNum: 8,
        createDate: '2018-05-11 18:08:56',
      },
    ],
    currentPage: 1,
  },
  //修改余额信息
  'POST /balance/path/modify': {
    msg: '成功',
    code: 1,
  },
};
