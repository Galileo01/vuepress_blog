## campus_cat_book 项目总结

技术栈：wepy框架+vant 组件库

通过wepy 可以使用类似于 Vue的语法书写代码

### 1.初始化wepy

按照wepy 官网的[教程](https://wepyjs.github.io/wepy-docs/2.x/#/base/getstart) 安装wepy-cli，使用模板创建一个wepy项目 ，

- 删除一些没有必要的文件
- 按照自己之前写Vue的文件结构，参照 官网的 [配置文件讲解](https://wepyjs.github.io/wepy-docs/2.x/#/cli/config) 重新构建文件结构
- 随便写一些代码，测试能否正常运行
- 浏览文档，常识编写简单页面

### 2.选择组件库

参照[文章](https://www.ifanr.com/minapp/1196588) 选择了vant 组件库，

- vant的组件在浏览器可以直接预览，不需要打开微信小程序
- 比较喜欢vant 总体偏蓝的风格，主色调和element 差不多
- 也和iview对比例一下 引入组件的方式，vant 的比较方便
- 查看官方文档，各个组件，

### 3.开始设计功能和页面

- 编写功能介绍md

  本来打算画一个脑图的

- 使用墨刀 在线设计小程序的界面和各个页面的跳转

### 4.项目配置

- 引入vant 组件库

  npm install 

  安装完依赖后，把 **node_modules/_@vant_weapp/lib** 的内容拷贝到 src/components/vant（或者先拷贝lib文件夹再改名）

  本项目中组件的引用方式都是 **components/vant/xxx**

  

- wepy.config.js的配置
  
  1. 路径别名

```js
 alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'common':path.resolve(__dirname, 'src/common'),
      'network':path.resolve(__dirname, 'src/network'),
      'components':path.resolve(__dirname, 'src/components'),
    },
```

2. 静态资源位置

   ```js
   static: ['src/assets'],
   ```

### 5.项目优化

1. 合并setData

   