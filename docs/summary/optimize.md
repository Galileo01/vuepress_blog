## Vue项目优化笔记

由于Vue-cli 已经预先对webpack 进行了设置，所以需要新建一个vue.config.js进行自定义的配置

该文件 通过**module.exports** 导出一个配置对象

配置时可以选择configureWebpack 或者chainWebpack 方法进行配置，

区别在于 configureWebpack 使用的是**对象方式**，而chainWebpack  使用**链式调用方法**来配置

configureWebpack 较为简单，chainWebpack   提供的配置粒度更大

### 1.添加加载进度条 

基于 nprogress，配合axios 的拦截器

在request 的拦截器中执行**NProgress.start()**显示进度，response 的拦截器 执行 **NProgress.done() **隐藏  进度条

### 2.销毁组件时一并释放组件的 资源

主要是指 组件内的 事件监听

```js
created(){
    window.addEventListener('click',Fn);
    this.$on('hook:beforeDestory',()=>{   //使用hook:监听组件生命周期，在绑定事件的时候就监听销毁生命周期，避免以往
     window.removeEventListener('click',Fn)
    }
})
```



### 3.路由按需加载

**这个应该在最开始写项目之前就应该配置好**

```js
const Login = () => import('views/Login');//使用 import 函数的方式懒加载
```

### 4.element 组件按需加载

**这个应该在最开始写项目之前就应该配置好**

使用插件 vue-cli-plugin-element，按需加载 element 的组件，减少 打包体积

### 5.生成环境下移除console

在开发阶段打印，生成打包文件，**生产阶段时移除console**  

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



###  6. 生成打包报告

npm run build --report  /  vue UI  使用gui 工具更加直观

### 7.使用externals 加载外部资源

1. 在vue.config.js 声明 externals节点

   ```js
     chainWebpack: config =>  {//使用链式
         if (process.env.NODE_ENV === 'production') {//只在生产阶段 使用外部的资源
                config.set('externals', {
                    vue:'Vue',
                   axios:'axios',
                    'vue-router':'VueRouter',
                })
           }
     }
   ```

2. 在index.html 添加外部资源的 cdn 引入 css以及js文件

   要选择可靠稳定的cdn网站， 

   
   
   
   
   持续更新ing

<Vssue />