FE公用组件库
==============================

## DESCRIPTION
PC、移动的公用模块/组件库

## INSTALL

```
npm install
or 
yarn install
```

## SCRIPTS

```
npm start //运行本地example
npm run build //打包源码至esm(es6模块)、lib(commonjs模块)
npm run format //eslint代码格式化
npm run website //打包本地example
```

## DEVELOP

1. src下新增组件或模块,react组件目录以大写开头
2. css统一放到styles目录下，使用less/css均可
3. examples下增加该组件的demo
4. 执行npm run build
5. 切换npm注册源到http://registry.npmjs.lianjia.com:7001/,每次提交更新package.json版本号
6. 提交到git仓库，并提交到npm

```
git add .
git commit
git push
npm adduser
npm publish
```
开发时尽量少npm publish，避免无意义的版本号更新太多，可以按照npm i your_path/npm_module安装本地包的形式开发

## ESLINT
目前使用eslint插件:
> [airbnb](https://github.com/airbnb/javascript)
> [prettier](https://github.com/prettier/eslint-config-prettier)
> [import](https://github.com/benmosher/eslint-plugin-import)
> [react](https://github.com/yannickcr/eslint-plugin-react)
> [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

考虑到eslint的强制性，目前precommit暂时未加钩子

## USAGE
```
npm i @lianjia/octopus
import Editor from '@lianjia/octopus/lib/Editor'
import '@lianjia/octopus/dist/editor/index.css' 
``` 
webpack中可增加alias
```
"octopus": "@lianjia/octopus/lib"
``` 