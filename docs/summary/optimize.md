## Vue项目优化笔记

由于Vue-cli 已经预先对webpack 进行了设置，所以需要新建一个vue.config.js进行自定义的配置

该文件 通过**module.exports** 导出一个配置对象

配置时可以选择configureWebpack 或者chainWebpack 方法进行配置，

区别在于 configureWebpack 使用的是**对象方式**，而chainWebpack  使用**链式调用方法**来配置

configureWebpack 较为简单，chainWebpack   提供的配置粒度更大

## 开发阶段

### 1.添加加载进度条 

添加页面加载的进度条，提供一定的视觉效果

基于 nprogress，配合axios 的拦截器

在request 的拦截器中执行**NProgress.start()**显示进度，response 的拦截器 执行 **NProgress.done() **隐藏  进度条

### 2.销毁组件时一并释放组件的 资源

主要是指 组件内的 事件监听。释放浏览器资源占用

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



### 5.利用Object.freeze()提升性能

`Object.freeze()` 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，**不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性**。该方法返回被冻结的对象。

Vue 在遇到像 `Object.freeze()` 这样被设置为不可配置之后的对象属性时，**不会为对象加上 setter getter 等数据劫持的方法** ，减少性能开销

**适合展示类的场景**，如果你的数据属性需要改变，可以**重新替换**成一个新的 `Object.freeze()`的对象

## 上线阶段

### 1.通过chainWebpack  自定义入口文件

开发和生产环境往往不同，需要定义不同的入口文件

```js
   if(process.env.NODE_ENV === 'production')//生产环境下使用对应入口文件
        {
            configuration.entry='./src/main-prod.js';
        }
```





### 2.生成环境下移除console

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



###  3. 生成打包报告

npm run build --report  /  vue UI  使用gui 工具更加直观查看各个模块的 体积

### 4.使用externals 加载外部资源

1. 在vue.config.js 声明 externals节点

   ```js
    externals : {
                   'vue': 'Vue',//包名：全局变量名称
                   // 'element-ui': 'element-ui',
                   'axios': 'axios',
                   'vue-router': 'VueRouter',
                   'xlsx':'xlsx',
               }
   ```
   
2. 在index.html 添加外部资源的 cdn 引入 css以及js文件

   要选择可靠稳定的cdn网站， 


### 5.gzip 压缩

通过前端打包时压缩和服务器打开gzip 可以缩小文件体积和请求的时间

- 打包时gzip压缩

  ```js
  //npm i -D compression-webpack-plugin
   if (process.env.NODE_ENV === 'production')//生产环境下 使用gzip 压缩文件
           {
              const productionGzipExtensions = ['js', 'css']
               const CompressionPlugin = require('compression-webpack-plugin')
               config.plugins.push(new CompressionPlugin({
                   filename: '[path].gz[query]',   // 提示compression-webpack-plugin@3.0.0的话asset改为filename
                  algorithm: 'gzip',
                   test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                 threshold: 10240,
                  minRatio: 0.8
              }))
          }
  以上配置在 vue-cli 3.x 有效
  ```

  经测试 此方法在Vue-cli 4 没有生效，很可能是本来就默认开启了gzip

- nginx 下配置

  ```
  http {
    gzip on;
    gzip_static on;
    gzip_min_length 1024;#压缩临界值
    gzip_buffers 4 16k;
    gzip_comp_level 2;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;
    gzip_vary off;#跟Squid等缓存服务有关，on的话会在Header里增加"Vary: Accept-Encoding"，根据个人情况开关
    gzip_disable "MSIE [1-6]\.";
  }
  
  ```

- node 下

  使用compression 中间件压缩文件

  ```js
    var express = require('express')
    var app = express()
  
    // 开启gzip压缩,如果你想关闭gzip,注释掉下面两行代码，重新执行`node server.js`
    var compression = require('compression')
    app.use(compression())
  
    app.use(express.static('dist'))
    app.listen(3000,function () {
      console.log('server is runing on http://localhost:3000')
    })
  
  ```

  

  

### 6.SSR 服务端渲染（后面再研究）

持续更新ing

<Vssue />