# 如何在scoped 修饰下的style 下层叠第三方组件的样式

###### .本文章解决修改element-ui 等包含的第三方 组件 内部 默认的样式 时 ，有时候 在 scoped 的style   下 定义样式无法起作用，无法覆盖

### 问题起因

在Vue 项目中，我们有时候 会主动修改第三方组件的样式,但发现 对于一些组件，有时候无论我们怎么修改 样式就是无法其效果，或者说无法层叠掉组件库默认的样式 ， 甚至使用  **!import**  都起不了作用，原因在于大多是 情况下，我们 给 vue 文件 的style 节点 添加了**scoped** 属性

* scoped 的原理

   style 节点 的 scoped  属性，表示 style 内 的 所有 css 样式  旨在当前 组件 有效 ，所以 为了**避免在不同组件下 如果同通过 某一选择器 修饰样式 会对 其他组件 产生层叠**，修饰 ，一般都会 使用scoped 。 在编译.vue文件时，**vue-loader** 会对 style 节点带有scoped 属性的   模板进行处理

  原理：

  编译前：

  ```html
  
  <template>
    	<div class="example">hi</div>
  </template>
  <style scoped>
  	.example {
   		 color: red;
  	}
  </style>
  ```

  编译后：

  ```html
  
  
  <template>
    	<div class="example" data-v-7668812d>hi</div>
  </template>
  <style>
  	.example[data-v-7668812d] {
    		color: red;
  	}
  </style>
  ```

  vue-loader 会给 标签 添加 **唯一的标识‘**，再 让css 通过  **属性选择器 **  选中当前组件的 模板内的 标签，从而达到 只 再当前 组件起作用的效果



### 解决方法-使用>>> （深度作用选择器）

编译前：

```html
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

编译后：

``` html
.a[data-v-f3f3eg9] .b { /* ... */ }
```

深度作用选择器   **>>>**  是 **vue-loader** 提供的 功能，作用在于将选择器的 作用 **深入子组件**，

当遇到   **>>>**   的时候会将  **>>>**   位置替换成组件的hash值  

**注意：**有些像 Sass 之类的预处理器无法正确解析 `>>>`，这种情况下可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作



[vue-loader 官方链接]([https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#深度作用选择器))



<Vssue />