## A simple CLI for scaffolding React/Nodejs projects.


### Installation

```
$ npm install -g @dkt/web-cli
```

### Usage
```
$ dkt init <option> <project-name>
// -t 为模板类型 -b 为分支名称 如 hotfix/hotfix-name
//创建desktop项目
$ dkt init <project-name> -t desktop
//创建mobile项目
$ dkt init <project-name> -t mobile
// 创建TypeScript mobile项目
$ dkt init <project-name> -t mobile-ts
//创建公用组件项目
$ dkt init <project-name> -t component
```

### Features
#### feature list
```
$ dkt feature-list
```
#### add a feature
```
$ dkt add <feature-name>
//注入oauth中间件和相关配置
$ dkt add bucky-oauth
```

### Plugins

#### ESLint

##### invoke plugin
```
// 注入单个插件
$ dkt invoke eslint
```
##### addblock block-name
```
// 新增组件区块
$ dkt addblock SimpleForm
```
##### run ESLint
```
$ npm run format
```
