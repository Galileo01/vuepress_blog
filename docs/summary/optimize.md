## 项目优化笔记

### 1.添加加载进度条

基于 nprogress，配合axios 的拦截器

在request 执行**NProgress.start()**显示进度，response  执行 **NProgress.done()**隐藏 

### 2.生成环境下移除console

在开发阶段打印，生成打包文件时移除console  

安装babel 的插件 babel-plugin-transform-remove-console ,并进行配置


```javascript
//在babel.config.js 文件中配置

const Plugins = [];
if (process.env.NODE_ENV === 'production') {
  Plugins.push('transform-remove-console')
} else {//NODE_ENV =='developmenp'
  // 为开发环境修改配置...
}
module.exports = {
  //...
  "plugins": [
    [
     //...省略
    ...Plugins
  ]
}
```



## 3. 生成打包报告

npm run build --report  /  vue UI 





## 4.externals 加载外部资源

1. 声明 externals节点
2.  添加外部资源的 cdn 引入 css以及js文件


  
<Vssue />