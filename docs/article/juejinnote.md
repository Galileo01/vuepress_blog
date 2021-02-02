## 前端小知识

前端小知识 ，涵盖 HTML、CSS、JS、Vue 等 

### 1. 页面性能监控的原生API

性能监控一般利用 `window.performance` 来进行数据采集，

Performance 接口可以获取到当前页面中与性能相关的信息，它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。

#### 基础

[掘金对应地址](https://juejin.im/post/6892003555818143752#heading-26)

[MDN官方语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

几个比较有用的属性

```js
// 重定向耗时
redirect: timing.redirectEnd - timing.redirectStart,
// DOM 渲染耗时
dom: timing.domComplete - timing.domLoading,
// 页面加载耗时
load: timing.loadEventEnd - timing.navigationStart,
// 页面卸载耗时
unload: timing.unloadEventEnd - timing.unloadEventStart,
// 请求耗时
request: timing.responseEnd - timing.requestStart,
// 获取性能信息时当前时间
time: new Date().getTime(),

```

#### 获取首屏加载时间

在head 标签下插入如下代码，计算首屏加载时间

```html
<script>
    whiteScreen = new Date() - performance.timing.navigationStart
</script>

```

#### 获取所有资源的加载信息

window.performance.getEntriesByType('resource')

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/522dff06f2b445c193ffa7f4b365a9b4~tplv-k3u1fbpfcp-zoom-1.image?imageslim" style="zoom: 67%;" />

几个关键属性

```js
// 资源的名称
name: item.name,
// 资源加载耗时
duration: item.duration.toFixed(2),
// 资源大小
size: item.transferSize,
// 资源所用协议
protocol: item.nextHopProtocol,

```

### 2.Mutation Observer API DOM 变更监听

[阮一峰教程](https://javascript.ruanyifeng.com/dom/mutationobserver.html)

Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

概念上，它很接近事件，可以理解为 DOM 发生变动就会触发 Mutation Observer 事件。但是，它与事件有一个本质不同：事件是同步触发，也就是说，DOM 的变动立刻会触发相应的事件；**Mutation Observer 则是异步触发，DOM 的变动并不会马上触发**，而是要等到当前所有 DOM 操作都结束才触发。

这样设计是为了应付 DOM 变动频繁的特点。举例来说，如果文档中连续插入1000个`<p>`元素，就会连续触发1000个插入事件，执行每个事件的回调函数，这很可能造成浏览器的卡顿；而 Mutation Observer 完全不同，只在1000个段落都插入结束后才会触发，而且只触发一次。

Mutation Observer 有以下特点。

- 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
- 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
- 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。


1.  MutationObserver 构造函数
new MutationObserver（callback）  
传入一个回调参数 callback(mutaions,observer):(变动数组，观察器实例)
2. observe 方法启动监听  
observe （element,option）:(要监听的dom 元素，配置)

3. 停止观察


实例：

```js
 //1.MutationObserver 构造函数,传入一个回调参数 callback(mutaions,observer):(变动数组，观察器实例)
    const observer = new MutationObserver((mutions, observer) => {
        mutions.forEach((mutation) => {
            console.log(mutation);
        })
    });
    //2.observe 方法启动监听： （element,option）:(要监听的dom 元素，配置)
    observer.observe(document.documentElement, {  //监听 html 对象
        childList: true,//监听子元素变化
        attributes: true//监听 元素属性变化：style 等
    })
    //3.停止观察
     observer.disconnect();
    //4. takeRecords清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组
     observer.takeRecords();
```

### 3.requestAnimationFrame 编写动画

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)  [博客园](https://www.cnblogs.com/xiaohuochai/p/5777186.html)

 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，**该回调函数会在浏览器下一次重绘之前执行**

当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数),

在大多数遵循W3C建议的浏览器中,回调函数执行次数通常**与浏览器屏幕刷新次数相匹配**,相比其他定时器的方法更加流畅

**setTimeout和setInterval的问题是**，它们都不精确。它们的内在[运行机制](http://www.cnblogs.com/xiaohuochai/p/5773183.html#anchor3)决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行

特点：

### 特点

　　【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，**在一次重绘或回流中就完成**，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率

　　【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量

　　【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销

基础：

用法和定时器大致相同，不需要设置事件间隔，

回调函数作为参数，这个回调函数会在浏览器重绘之前调用

```js
requestID = requestAnimationFrame(callback); 
cancelAnimationFrame(requestID);//取消函数执行

```

进度条案例：

```html
<div id="myDiv" style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;">0%</div>
<button id="btn">run</button>
<script>
var timer;
btn.onclick = function(){
    myDiv.style.width = '0';
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        if(parseInt(myDiv.style.width) < 500){
            myDiv.style.width = parseInt(myDiv.style.width) + 5 + 'px';
            myDiv.innerHTML =     parseInt(myDiv.style.width)/5 + '%';
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }    
    });
}
</script>
```
**注意事项**：



### 4.实用的高阶函数知识点
[掘金文章](https://juejin.im/post/6892886272377880583)
##### 1.函数组合
函数组合就是将两个或两个以上的函数组合生成一个新函数的过程  
项目开发过程中，为了实现函数的复用，我们通常会尽量保证函数的职责单一 

**通过 [Array.prototype.reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 方法来实现组合函数的调度**  从左到右
```javascript
function compose(...funcs) {
  return function (x) {
    return funcs.reduce(function (arg, fn) { //从左到右
      return fn(arg);
    }, x);
  };
}
```
##### 2.函数柯里化
柯里化 是一个过程：在这个过程中我们能把一个带有多个参数的函数转换成一系列的**嵌套函**数。它返回一个新函数，这个新函数期望传入下一个参数。当接收足够的参数后，会自动执行原函数。
- 参数复用

```javascript
function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`;
}
//不适用柯里化
const profilePath = buildUri("https", "github.com", "semlinker/semlinker");
const awesomeTsPath = buildUri("https", "github.com", "semlinker/awesome-typescript");
//使用柯里化
const _ = require("lodash");

const buildUriCurry = _.curry(buildUri);
const myGithubPath = buildUriCurry("https", "github.com");
const profilePath = myGithubPath("semlinker/semlinker");
const awesomeTsPath = myGithubPath("semlinker/awesome-typescript");

```
- 延迟计算/运行

###### 柯里化的实现
现在我们已经知道了，当柯里化后的函数接收到足够的参数后，就会开始执行原函数。而如果接收到的参数不足的话，就会返回一个新的函数，用来接收余下的参数。基于上述的特点，我们就可以自己实现一个 curry 函数
```javascript
function curry(func) {
  return function curried(...args) {//返回一个函数
    if (args.length >= func.length) { // 通过函数的length属性，来获取函数的形参个数
      return func.apply(this, args);//当接收䣌参数 达到个数就立即执行返回结果
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));//否则 继续返回函数，持续接收参数
      };
    }
  }
}
```
##### 3.偏函数
指固定一个函数的某些参数，然后产生另一个更小元的函数  
用于固定一个函数的一个或多个参数，并返回一个可以接收剩余参数的函数

```javascript
function buildUri(scheme, domain, path) {
  return `${scheme}://${domain}/${path}`;
}
const myGithubPath = _.partial(buildUri, "https", "github.com");
const profilePath = myGithubPath("semlinker/semlinker");
const awesomeTsPath = myGithubPath("semlinker/awesome-typescript");

```

##### 4.缓存函数
缓存函数是将函数的计算结果缓存起来，当下次以同样的参数调用该函数时，直接返回已缓存的结果，而无需再次执行函数。这是一种常见的以空间换时间的性能优化手段。

```javascript
function memorize(fn) {
  const cache = Object.create(null); // 存储缓存数据的对象
  return function (...args) {
    const _args = JSON.stringify(args);//序列化作为key
    return cache[_args] || (cache[_args] = fn.apply(fn, args));//如果没有计算过，就计算并返回新的值
  };
};

```

### 5.PostMessage  iframe 父子之间的通信
[MDN完整API](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)  
window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为https），端口号（443为https的默认值），以及主机  (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全。
1. 发送 message   
```javascript
otherWindow.postMessage(message, targetOrigin, [transfer]);
```
- otherWindow：其他窗口的一个引用，比如iframe的contentWindow属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames。   
- targetOrigin  
目标页面所在的域  
通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"

2. 监听messgae
iframe 只需监听 自身window 上的message事件    
```javascript
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
  // For Chrome, the origin property is in the event.originalEvent
  // object.
  // 这里不准确，chrome没有这个属性
  // var origin = event.origin || event.originalEvent.origin;
  var origin = event.origin
  if (origin !== "http://example.org:8080")
    return;

  // ...
}
```
event 的属性：
- data
从其他 window 中传递过来的对象  
- origin
调用 postMessage  时消息发送方窗口的 origin . 这个字符串由 协议、“://“、域名、“ : 端口号”拼接而成。例如 “https://example.org (隐含端口 443)”、“http://example.net (隐含端口 80)”、“http://example.com:8080”。请注意，这个origin不能保证是该窗口的当前或未来origin，因为postMessage被调用后可能被导航到不同的位置 
- source
对发送消息的窗口对象的引用; 您可以使用此来在具有不同origin的两个窗口之间建立双向通信。
### 6. Vue 在模板中 使用css 变量
```html
<template>
  <div class="box" :style="styleVar">
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 54,
    },
  },
  computed: {
    styleVar() {
      return {
        '--box-height': this.height + 'px'
      }
    }
  },
}
</script>
<style scoped>
.box {
  height: var(--box-height);
}
</style>
```
### 7. Vue2.6的插槽语法
2.6x 中 已经把内容插槽和作用域插槽 进行了统一
#### 内容插槽
- 通过自带组件 slot 定义插槽
```html
    <slot name="header">
    </slot>
    <!--具名插槽 name属性指定-->
```
- 通过template  使用插槽

```html
<template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <!--具名插槽 v-slot:slot-->
```

#### 作用域插槽
- 通过 slot 组件定义

```html
 <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
  <!--我们可以将 user 作为 <slot> 元素的一个 attribute 绑定上去-->

```
- 使用template 使用

```html
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
  <!--v-slot 来定义我们提供的插槽 prop 的名字-->
```
**！！！ v-slot 只能在template标签 中使用 ！！！ **
### 8.css知识补充
- 1.clip-path   属性
用于对元素 进行裁切
```css
.polygon1 {
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
            /*传入的 多个坐标 依次连接 为多边形*/
        }

        .polygon2 {
            clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
        }

        .cicle1 {
            clip-path: circle(30% at 50% 50%);
            /*定义半径  at 定义圆心坐标*/
        }

        .ellipse1 {
            clip-path: ellipse(30% 20% at 50% 50%);
            /*定义 椭圆的 长半轴 短半轴 以及圆心位置*/
        }

        .inset1 {
            /*值为(上 右 下 左 round 左上角radius 右上角radius 右下角radius 左下角radius)*/
            /*round 前面时显示区域和各个边的距离 之后的的边角的半径*/
            clip-path: inset(25% 0% 25% 0% round 0% 25% 0% 25%);
        }
```
- linear-gradient 函数  
 作为背景类属性的值  
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```css
linear-gradient(red 10%, 30%, blue 90%);
//从起始点到10%的位置标记红色，从90%到结束标记蓝色。在10%到90%之间，颜色从红色过渡到蓝色，然而过渡的中点是在30%的标记上，而不是在没有30%中转点的情况下会默认为50%。

/* 从上到下，蓝色渐变到红色 */
linear-gradient(blue, red);
 
/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);
 
/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);
 
/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);

```


<Vssue />