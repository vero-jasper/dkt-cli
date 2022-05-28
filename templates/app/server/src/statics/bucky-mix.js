mix

  .publicPath('/public/')

  .alias('javascripts', './javascripts')
  .alias('stylesheets', './stylesheets')
  .alias('images', './images')

  .js('./javascripts/index.js')
  .css('./stylesheets/style_stylus.styl')

  .copy('./images')
  .copy('./favicon.ico');

// 忽略的监听设置
// .watchIgnore('不需要监听的目录')

// md5版本号
// .hash()

// 代码压缩
// .minify()

// 是否生成sourceMap
// .sourceMap()

// 是否需要作用域提升
// .scopeHoisting()

// 如果测试环境
if (mix.args[0] === 'testing') {
  mix.minify();
}

// 如果off环境
if (mix.args[0] === 'shoff') {
  mix.minify();
}

// 如果线上环境环境
if (mix.args[0] === 'production') {
  mix.minify();
}
