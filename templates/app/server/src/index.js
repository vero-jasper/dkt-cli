/**
 *  === server ===
 *
 *  created at: Tue May 29 2018 14:26:59 GMT+0800 (CST)
 */

`
   __                __
  |  |--.--.--.----.|  |--.--.--.
  |  _  |  |  |  __||    <|  |  |
  |_____|_____|____||__|__|___  |
                          |_____|
  with ♥︎ by lianjia-fe
`;

require('babel-polyfill');

if (require('path').basename(__dirname) === 'src') {
  require('babel-core/register')({ presets: ['es2015', 'stage-0'] });
}

const app = require('@lianjia/bucky-core')(__dirname);

app.middleware.unshift(
  require('koa-compress')({
    filter: function(content_type) {
      return /javascript|css/i.test(content_type);
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH,
  }),
);

app.lift();
