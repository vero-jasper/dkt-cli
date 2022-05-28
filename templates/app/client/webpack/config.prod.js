var common = require('./config.common');

module.exports = function(webpackConfig, redSkull, webpackPlugins) {
  const { CommonsChunkPlugin } = webpackPlugins;
  webpackConfig = common(webpackConfig, redSkull, webpackPlugins);
  webpackConfig.entry.vendor = [
    'babel-polyfill',
    'axios',
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'redux-thunk',
    'redux-logger',
    'react-router',
    'react-router-redux',
  ];
  webpackConfig.plugins.push(
    new CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  );

  return webpackConfig;
};
