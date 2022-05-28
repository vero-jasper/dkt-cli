/**
 * 记录token日志信息
 * <p>
 * Created at 6/28/18
 * @author Duke
 */
var tokenInfo = {
  auth: '',
  loginToken: '',
};
exports.recordToken = function(auth, loginToken) {
  tokenInfo.auth = auth;
  tokenInfo.loginToken = loginToken;
};

exports.getToken = function() {
  return tokenInfo;
};
