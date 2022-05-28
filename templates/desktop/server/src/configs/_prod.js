/**
 *  === prodction config ===
 *  所有配置由docker容器配置
 *
 *  created at: Tue Jul 24 2018 20:35:00 GMT+0800 (CST)
 */

const { PORT, APPLOGS_DIR, PRIVDATA_DIR } = process.env
const config = {
  base: {
    PORT: PORT,
    MATRIX_APPLOGS_DIR: APPLOGS_DIR,
    MATRIX_PRIVDATA_DIR: PRIVDATA_DIR,
  },
  mysql: {},
  redis: {}
}

module.exports = config