var path = require('path');

module.exports = function(webpackConfig, redSkull, webpackPlugins) {
  const src = redSkull.src;
  const pathsAlias = [
    'util',
    'components',
    'pages',
    'styles',
    'store',
    'service',
    'assets',
  ].map(p => path.join(src, p));
  Object.assign(webpackConfig.resolve.alias, pathsAlias, {
    '@': src,
    mock: path.join(src, '../mock/config.js'),
  });
  webpackConfig.resolve.alias['antd'] = '@lianjia/antd';

  const { CommonsChunkPlugin } = webpackPlugins;
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
