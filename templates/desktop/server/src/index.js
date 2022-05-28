/**
 *  === server ===
 *
 *  created at: Tue Jul 24 2018 20:35:00 GMT+0800 (CST)
 */

`
   __                __
  |  |--.--.--.----.|  |--.--.--.
  |  _  |  |  |  __||    <|  |  |
  |_____|_____|____||__|__|___  |
                          |_____|
  with ♥︎ by lianjia-fe
`

require('babel-polyfill')

if (require('path').basename(__dirname) === 'src') {
  require('babel-core/register')({ presets: ["es2015", "stage-0"] })
}

const app = require('@lianjia/bucky-core')(__dirname)

app.lift()
