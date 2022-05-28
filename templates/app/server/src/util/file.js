/**
 * 文件操作
 * <p>
 * Created at 6/27/18
 * @author Duke
 */
var fs = require('fs');
const path = require('path');
export default {
  /**
   * 写入登录token
   * @param fileName
   * @param data
   */
  writeToken: function(authorization, loginToken, fileName) {
    // let resourcePath = path.join(__dirname, './' + fileName);
    // let stat = fs.existsSync(resourcePath);
    // if(!stat){
    //   fs.mkdirSync(resourcePath);
    // }
    // let data = {
    //   'Authorization': authorization,
    //   'X-Login-Token': loginToken,
    // }
    // fs.writeFileSync('./'+fileName, JSON.stringify(data), function (err) {
    //   if (err) {
    //     console.log('写文件操作失败');
    //   }
    //   else{
    //     console.log('写文件操作成功');
    //   }
    // });
  },

  /**
   * 获取token
   * @param fileName
   * @returns {string}
   */
  getToken: function(fileName) {
    let resourcePath = path.join(__dirname, './' + fileName);
    let stat = fs.existsSync(resourcePath);
    let json = {};
    if (stat) {
      json = fs.readFileSync(resourcePath, { encoding: 'utf-8' });
      json = JSON.parse(json || {});
    }
    console.log('读取json：', stat);
    return json;
  },
};
