1 cd client

redskull install

npm start

2 cd server

npm run dev

3 配置本地host

local.shandian.lianjia.com 127.0.0.1

访问路径 local.shandian.lianjia.com/test

相关目录 src -- components 公用组件 | |-- less 共有css | |-- pages 业务代码 | |-- reducers | |-- service 业务请求 | |-- App.js 共有主页面 | |-- index.js 入口文件

在client端service中,axios.js可以调整是使用mock数据还是发送后端请求 ,修改方式: / --> /mock