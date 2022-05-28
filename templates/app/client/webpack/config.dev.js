var common = require('./config.common');

module.exports = function(webpackConfig, redSkull, webpackPlugins) {
  webpackConfig = common(webpackConfig, redSkull, webpackPlugins);

  webpackConfig.devtool = 'source-map';

  webpackConfig.output.publicPath = 'http://127.0.0.1:8080/';

  return webpackConfig;
};
