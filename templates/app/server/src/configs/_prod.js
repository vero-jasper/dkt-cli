const config = {
  base: {
    PORT: process.env.PORT,
    MATRIX_APPLOGS_DIR: process.env.APPLOGS_DIR,
    MATRIX_PRIVDATA_DIR: process.env.PRIVDATA_DIR,
  },
  mysql: {},
  redis: {},
};

module.exports = config;
