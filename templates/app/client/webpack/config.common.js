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

  return webpackConfig;
};
