## React 学习笔记

### 001简介

### 001 hello_react案例

### 002 虚拟DOM的两种创建方式

### 003 jsx语法

1. 不用引号包裹jsx

 2. 标签属性和内容中使用js **表达式**使用**{**varname**}** 

    jsx 中只能嵌入**表达式**（带有返回值）

ps：vue中标签属性中使用js表达式用:class=“{varname}”

标签内容中使用js 表达式 用插值语法{{varname}}

3. 标签的 class 属性 用className代替

**规避 ES6的 class 关键字**

4. 内联样式必须**使用对象 形式**{**{color:'red',fontSize:'18px'}**}

外层花括号表示 内层使用js 表达式，

里层对花括号 表示是 一个对象

5. 单个根标签

6. 标签必须闭合

7. 标签名称
   - 若首字母是小写，转为html 中对应元素，没有则会报错
   - 若首字母是大写字母，视为组件并渲染

### 004 jsx小练习

react 自动jsx 中的数组遍历，并把jsx 渲染

### 005 组件化开发

#### 1.组件定义

###### 函数式组件

- 使用**首字母大写的函数**返回jsx

  jsx 的语法一节中 规定，大写的的标签 代表组件

- render函数传入该**函数同名标签**，注意要闭合

ps：使用babel 编译之后的函数式组件内部this为undefined ，原因是babel 自动开启严格模式“use strict”

执行render 函数之后

1. 解析组件标签，
2. 发现组件是函数定义，调用该函数 将返回的虚拟DOM 转为真实DOM

```js
function MyComponent() {
        return <h1>函数式组件，适用于简单的组件</h1>
    }  
ReactDOM.render(<MyComponent/>,document.querySelector('.container'));
```

###### 类式组件

-  **必须继承React.Component 类**

- **必须定义render 函数，返回jsx**

  render函数 中的this指向 实例本身

执行render 后

1. 解析并找到组件定义，是一个类
2. 创建该类实例，调用该实例的render 方法

本质上就是函数式组件，因为ES6的类也只是 语法糖

**区别复杂组件和简单组件 关键在于 组件是否有状态**

### 006.组件实例三大属性 state

相当于Vue组件实例的 data 选项

- 借助构造器constructor  初始化实例的属性

  在constructor   中初始化组件实例的state 属性

- 事件绑定

react 中更推荐和方便的是使用**onxx句柄在标签上直接绑定**

**onClick**={handler}  使用驼峰式命名

- ps:句柄onclick 和 ele.onxxx和ele.addEventListener 的区别  

  -  句柄onxx 

    在标签上绑定事件  处理函数（普通函数），this指向window

  - ele.onxxx

    绑定普通函数this指向 触发事件的元素本身

    只能绑定一个处理函数， 会被后面的覆盖

  - ele.addEventListener 

    this 指向触发事件本身

- 处理函数中的this 指向问题

**由于事件处理函数handler 是作为onClick 的回调，不是通过实例调用，而是直接调用 又由于类中的方法开启了局部的严格模式**

所以onClick 执行处理函数时的this 并不是组件实例

**解决方法：在构造函数中使用bind 方法绑定this为组件实例**

bind方法绑定this 并返回一个新的函数，

在构造函数中在实例上创建原型上的同名的绑定了this的 函数

- 状态不可直接更改（直接赋值）， **使用setState**

  this.setState({isHot:false}) **必须传入一个对象**

  - 更新时 状态合并

    **不要更改原来的state 再传入setState**

  - 状态更新时**会重复render 函数**

    性能问题？

    ```jsx
    class Weather extends React.Component {
    
            constructor(props) {
                super(props);
                //初始化 状态
                this.state = {
                    isHot: true
                };
                this.changeWeatcher = this.changeWeatcher.bind(this);//在实例身上创建一个和原型上同名的 绑定了 this 的处理函数
            }
            render() {
                return <h2 onClick={this.changeWeatcher}>今天的天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
            }
            changeWeatcher() {
                //changeWeatcher 作为onClick的回调 ，作为一个引用赋值给onClick 在实际调用时并不是通过实例调用的  会造成this丢失
                // console.log(this);
                // this.state.isHot=false;
                console.log(this.state.isHot);
                this.setState({
                    isHot: !this.state.isHot
                })
            }
        }
    ```

  **在类中定义句柄的事件处理函数推荐使用 箭头函数**

- 简写 
  
  - 在类中直接定义属性，省去构造函数的定义
  - 使用箭头函数解决this绑定问题

```jsx
class Weather extends React.Component {
        state = { isHot: true };
        render() {
            console.log('render');
            return <h2 onClick={this.changeWeatcher}>今天的天气很{this.state.isHot ? '炎热' : '凉爽'}</h2>
        }
        //使用箭头函数  this 自动指向 定义时的实例
        changeWeatcher = () => {
            this.setState({
                isHot: !this.state.isHot
            })
        }

    }
```

### props 使用

- 通过标签属性 传递 props

  ```jsx
  const p = { name: 'xm', age: 18, sex: true };
  ReactDOM.render(<Person name="xxx" age={18} sex={p.sex} />, document.querySelector('.container'));
  ReactDOM.render(<Person {...p} />, document.querySelector('.container'));
  ```

  **props 只读**

- **使用PropTypes**约束props

  约束类型，默认值，必传  （类似于 Vue的type default required）

  15之后需要额外引入

  ```jsx
   class Person extends React.Component {
          render() {
              const { name, age, sex } = this.props;
              return (<ul>
                  <li>姓名：{name}</li>
                  <li>年龄：{age}</li>
                  <li>性别：{sex? '男' : '女'}</li>
              </ul>);
          }
      };
      //类静态属性 propType 约束类型
      Person.propTypes = {
          name: PropTypes.string.isRequired,//限制 name 是字符串类型 并且必需
          age: PropTypes.number,//限制age 为number
          sex: PropTypes.bool,//布尔值
          speak: PropTypes.func,//规避 function 关键字
      };
      //通过静态属性defaultProps 设置默认值
      Person.defaultProps = {
          sex: '不男不女',
          age: 18
      }
  ```

- 使用**static** 关键字简写

定义为类的静态属性

- 构造器和props 在组件的中的作用

  在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` **在构造函数中可能会出现未定义的 bug。**

  通常，在 React 中，**构造函数仅用于以下两种情况：**

  - 通过给 `this.state` 赋值对象来初始化[内部 state](https://react.docschina.org/docs/state-and-lifecycle.html)。

  - 为[事件处理函数](https://react.docschina.org/docs/handling-events.html)绑定实例  （state 最开始的写法）

    

    构造器是否接收并传递给super 取决于是否要在构造器中 使用this.props

    一般不写构造器

- 函数式组件 通过参数 使用props

  ```jsx
  function Person(props) {
          {
              const { name, age, sex } = props;
              return (<ul>
                  <li>姓名：{name}</li>
                  <li>年龄：{age}</li>
                  <li>性别：{sex ? '男' : '女'}</li>
              </ul>);
          }
      }
  ```



### refs 的使用

**保存dom 和组件（暂不支持函数式组件）的引用**

- 字符串形式

  标签上添加ref 属性，通过this.refs.xxx访问 

  **最新版已经 并不推荐使用字符串形式**

  

- **回调函数形式**

  ref 引用一个回调函数，react 在render 时执行,**并把当前的元素节点 传入**

  **执行次数的问题：**

  如果ref引用的是一个**内联函数**，那么会在**更新过程中（render 的调用**）被**执行两次，**，第一次调用为了**清空ref** 传入null，

  使用 **实例自身方法 可**以  避免重复调用，但大多情况下 这是无关紧要的

  

- createRef 形式

  React.createRef 返回一个容器，该容器可以存储被ref 所标识的节点

  略微麻烦

  ```jsx
  class Demo extends React.Component {
      	/*createRef 的形式*/
          span1 = React.createRef();
          state = {
              name: ''
          };
          clickHandelr = () => {
              console.log(this.input2);
              /*createRef x形式 采用 current 取值*/
              console.log(this.span1.current);
          }
          render() {
              // console.log(this.refs.input);
              return (
                  <div>
                       {/*字符串形式*/}
                      <input type="text" ref="input" />
                       {/*回调参数的形式*/}
                      <button onClick={this.clickHandelr}>点我</button>
                      
                      <input type="text" ref={e => this.input2 = e} />
                       {/*createRef 的形式*/}
                      <span ref={this.span1}></span>
                  </div>
              )
          }
  
      }
  ```

  **当前 最推荐、最快捷 的是 使用内联 的回调函数**

### React 中的事件处理

- react 使用的是自定义（合成）事件，并不是原生DOM事件--为了兼容
- 是通过事件委托（委托给最外层元素）--为了高效

 通过event.target 引用 事件触发对象

### 受控组件、非受控组件

- 非受控组件

表单元素是在用到的时候动态获取的

- 受控组件

表单元素的 value是 一直绑定的，

React 没有提供双向绑定，没有类似v-model 的语法

### 函数扩展

使用**高阶函数**的 知识优化代码

- 高阶函数 

  接收一个函数为从参数，或者 返回值是一个函数

- 函数柯里化

  通过函数调用继续返回函数的形式，实现多次接收参数

```jsx
class Demo extends React.Component {
        state = {
            name: '',
            password: ''
        };
        submitHandler = (e) => {
            e.preventDefault();
            console.log(this.state);
        }
        //使用函数柯里化
        saveFormData = (key) => {
            return (e) => {
                this.setState({
                    [key]: e.target.value
                })
            }
        }
        //不用柯里化
        saveFormData2 = (key, { target: { value } }) => {
            this.setState({
                [key]: parseInt(value)
            })
        }
        render() {
            // console.log(this.refs.input);
            return <form onSubmit={this.submitHandler}>
                <label for="username">用户名</label><input type="text" onChange={this.saveFormData('name')} name="username" />
                <label for="password">密码</label><input type="password" onChange={this.saveFormData('password')} name="password" />
                <label for="age">密码</label><input type="number" onChange={e => this.saveFormData2('age', e)} name="password" />
                <button>提交</button>
            </form>
        }

    }
```

### 生命周期

- 引出

  - componentDidMount 生命周期钩子，组件挂载后调用

  - render 函数在初始化渲染，状态更新 时调用 

  - componentWillUnmount 组件卸载之前 触发

    调用**ReactDOM.unmountComponentAtNode(ele)** 可以卸载某个节点下的组件

- 生命周期钩子（旧，16及其之前）

  - **`componentDidMount()`**  **常用**

    会在组件**挂载后（插入 DOM 树中）**立即调用**。依赖于 DOM 节点**的初始化应该放在这里。**如需通过网络请求获取数据，此处是实例化请求的好地方。**在里面 请求并调用setState 会触发render 函数

    类似Vue的created 钩子

    

  - constructor(props)

    在 React 组件挂载之前，会调用它的构造函数

    在 `constructor()` 函数中**不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

    

  - **componentWillUnmount()  常用**

    componentWillUnmount() 会在组件卸载及销毁之前直接调用。**在此方法中执行必要的清理操作**，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

    componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

    

  - componentWillReceiveProps（props） 在props 更新时调用

     **第一次接收props 渲染 并不会调用**

    

  - **setState**方法会检测shouldCompomentUpdate 方法的返回值，判断是否调用其他的钩子 重新渲染页面

    shouldCompomentUpdate 若**返回true**（默认的shouldCompomentUpdate 函数返回true），会调用下方的所有周期钩子

    

  - forceUpdate 强制更新

  - 生命周期图示

    

  <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/2_react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%97%A7).png" alt="2_react生命周期(旧)" style="zoom:67%;" />

- **生命周期 （最新）**

  最新版本将会**弃用旧版本的部分钩子**

  在18中会在部分钩子（**除了willUnmount 之外的 包含will 的钩子都需要加上）**之前加上UNSAFE_xxx 才能正常工作，**尽量避免使用他们**

  -   **static** getDerivedStateFromProps(**props**, **state**)    **从props获得派生的state**

    新的静态 `getDerivedStateFromProps` 生命周期方法在组件实例化之后、render 之前、以及重新渲染之前调用。

    它可以返回一个对象来更新 `state`，或者返回 `null` 来表示新的 `props` 不需要任何 `state` 的更新。

    返回的对象，会影响 更新，state 会取决于更新

    

  - getSnapshotBeforeUpdate**(prevProps, prevState)**

    在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件**能在发生更改之前从 DOM 中捕获一些信息**（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`

    应返回 snapshot 的值（或 `null`）。

    案例

  - componentDidUpdate(prevProps, prevState, snapshot)

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/3_react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%96%B0).png" alt="3_react生命周期(新)" style="zoom: 67%;" />

#### React 的diff算法

对比的粒度 是标签级别，Vue的diff 算法 粒度更小

- key 的作用（Vue/React 中常见的面试题）

   *经典面试题:*

     *1). react/vue中的key有什么作用？（key的内部原理是什么？）*

     *2). 为什么遍历列表时，key最好不要用index?*

     

  ​      *1. 虚拟DOM中key的作用：*

  ​          *1). 简单的说: **key是虚拟DOM节点对象的标识**, 在更新显示时key起着极其重要的作用。*

  

  ​          *2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】,* 

  ​                        *随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：*

  

  ​                  *a. 旧虚拟DOM中找到了与新虚拟DOM**相同的key：***

  ​                        *(1).若虚拟DOM中内容没变, 直接使用之前的真实DOM*

  ​                        *(2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM*

  

  ​                  *b. 旧虚拟DOM中未找到与新虚拟DOM相同的key*

  ​                        *根据数据创建新的真实DOM，随后渲染到到页面*

  ​                  

  ​      *2. 用index作为key可能会引发的问题：*

  ​                *1. 若对数据进行：**逆序添加、逆序删除等**破坏顺序操作:*

  ​                        *会**产生没有必要的真实DOM更新** ==> 界面效果没问题, 但效率低。*

  ​						错误的复用 旧的虚拟DOM

  

  ​                *2. 如果**结构中还包含输入类的DOM：***表单元素 **会被错误的复用**

  ​                        ***会产生错误DOM更新** ==> 界面有问题。*

  ​                        

  ​                *3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，*

  ​                  *仅用于渲染列表用于展示，使用index作为key是没有问题的。*

  ​          

  ​      *3. 开发中如何选择key?:*

  ​                *1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。*

  ​                *2.如果确定**只是简单的展示数据**，用index也是可以的。*

### 使用 create-react-app  脚手架

使用  **create-react-app 脚手架**  进行真实复杂的项目开发

- 安装 

  ```shell
  npm i -g create-react-app 全局安装
  cd xxx
  create-react-app hello-react
  npm run start #启动项目
  npm run eject#暴露出webpack 的配置文件  要进行定制化时需要加入 比如添加less 支持
  
  ```

- 

- 目录结构介绍

  - public 文件夹

    存放静态资源，页面图片，公共资源

    - **index.html 根html 文件**

      ```html
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /><!--PUBLIC_URL 代表public 文件夹路径-->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--针对安卓手机浏览器的 主题---->
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <!--将网站添加到 手机主屏幕 快捷的 图标--->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!--多种加壳应用 的资源配置--->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>hello react</title>
      </head>
      
      <body>
        <!--不支持或者 拦截js 的运行 就会显示-->
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <!--根组件 的 容器-->
        <div id="root"></div>
      </body>
      
      </html>
      ```

  - src 文件夹

    - **App.js /App.css 根组件代码**
    - index.css 全局样式
    - **index.js 的入口文件，引入根组件和多种资源**
    - reportWebVitals 记录页面性能
    - setupTests 用于做组件测试

- 测试

- **样式文件的 模块化** 

  防止 不同组件的相同选择器的互相影响， 类似于 Vue 的  style scoped

  样式文件改为  **index.module.css**

  引入 ：**import xxx from  index.module.css**  

  使用类名: **className={xxx.title}**

  

- 添加less 

  使用npm run eject#暴露出webpack 的配置文件  要进行定制化时需要加入 比如添加less 支持

- 配置代理

  - 方法1在package.json中追加如下配置

    ```json
    "proxy":"http://localhost:5000"
    ```

    说明：

    1. 优点：配置简单，前端请求资源时可以不加任何前缀。
    2. 缺点：不能配置多个代理。
    3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

  - 新建setupProxy.js 文件

    1. 第一步：创建代理配置文件

       ```
       在src下创建配置文件：src/setupProxy.js
       ```

    2. 编写setupProxy.js配置具体代理规则：

       ```js
       const proxy = require('http-proxy-middleware');//使用代理中间件
       
       module.exports = function(app) {
         app.use(
           proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
             target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
             changeOrigin: true, //控制服务器接收到的请求头中host字段的值
             /*
             	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
             	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
             	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
             */
             pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
           }),
           proxy('/api2', { 
             target: 'http://localhost:5001',
             changeOrigin: true,
             pathRewrite: {'^/api2': ''}
           })
         )
       }
       ```

    说明：

    1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
    2. 缺点：配置繁琐，前端请求资源时必须加前缀

- 

- 案例-1 todolist

  - 子组件 给父组件 传递信息-**函数props**

     父组件 给子组件通过props **传递一个函数**，子组件在适合的时机调用 

    祖孙关系可以 逐层传递
  
- 案例-2

  - 兄弟组件 相互通信 - 使用第三方库**消息订阅+消息发布**机制  

    使用 第三方库 pubsub-js 

## 基础扩展

### setState 

	(1). setState(stateChange, [callback])------对象式的setState
	        1.stateChange为状态改变对象(该对象可以体现出状态的更改)
	        2.callback是可选的回调函数, 它在状态更新完毕、界面更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
	        1.updater为返回stateChange对象的函数。
	        2.updater可以接收到state和props。
	        4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
	 总结:
			1.对象式的setState是函数式的setState的简写方式(语法糖)
			2.使用原则：
					(1).如果新状态不依赖于原状态 ===> 使用对象方式
					(2).如果新状态依赖于原状态 ===> 使用函数方式
					(3).如果需要在setState()执行后获取最新的状态数据, 
						要在第二个callback函数中读取
setState 是**异步更新状态，**

setState()  将对组件 state 的更改**排入队列**，为了更好的感知性能，它会批量推迟更新，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。



### 组件懒加载 React.lazy函数

组件的条件渲染

```jsx
import React, { Component, lazy, Suspense } from 'react'

const Test1 = lazy(() => import('./Test1'));
const Test2 = lazy(() => import('./Test2'))
export default class Lazy extends Component {
    state = {
        flag: false,
    }
    change = () => {
        this.setState({
            flag: true
        })
    }
    render() {
        return (
            <div>
                <Suspense fallback={<h1>Loging ....</h1>}>
                    <Test1 />
                    {this.state.flag && <Test2 />}
                </Suspense>
                <button onClick={this.change}>点击</button>
            </div>
        )
    }
}

```

配合 路由  使用

```jsx
import React, { Component, lazy, Suspense } from 'react'
//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = React.lazy(()=>import('@/pages/Login'))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading.....</h1>}>
    <Switch>
        <Route path="/xxx" component={Xxxx}/>
        <Redirect to="/login"/>
    </Switch>
</Suspense>
```
### JSX 扩展

- 点语法 指定元素类型

  ```jsx
  const MyComponents = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    }
  }
  
  function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
  }
  ```

- 运行时选择类型

  ```jsx
  import { PhotoStory, VideoStory } from './stories';
  
  const components = {
    photo: PhotoStory,
    video: VideoStory
  };
  
  function Story(props) {
    // 错误！JSX 类型不能是一个表达式。  !!!!!!
    return <components[props.storyType] story={props.story} />;
      // 正确！JSX 类型可以是大写字母开头的变量。
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
  }
    
  ```

- Props 默认值为 “True”

  通常，我们不建议不传递 value 给 prop，因为这可能与 [ES6 对象简写](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)混淆

- jsx 中的子元素

  包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 **`props.children`** 传递给外层组件

  包含以下几种常见方法来传递子元素

  - 字符串

    ```jsx
    <MyComponent>Hello world!</MyComponent>
    ```

  - 子元素

  - 表达式

  - 函数

  **注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。**

  

### 条件渲染

几种在jsx 中内联的条件渲染方式

```jsx
export default class ConditionRender extends Component {
    render() {
        const flag = true;
        return (
            <div>
                <div>{
                    flag && (
                        <span>显示</span>
                    )

                }</div>
                <div>
                    {
                        flag===true?(
                            <span>flag===true</span>
                        ):(
                            <span>flag===false</span>
                        )
                    }
                </div>
            </div>
        )
    }
}

```

### 组件之间的组合 Composition

- 包含关系

  有些组件无法**提前知晓它们子组件的具体内容**。在 `Sidebar`（侧边栏）和 `Dialog`（对话框）等**展现通用容器（box）的组件**中特别容易遇到这种情况。

   功能上 类似于Vue的 slot 插槽

  - 预定义的   **props.children** 

    特殊的 `children` prop 来将他们的子组件传递到渲染结果中，别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们

    

  - 自定义的props.xxx
  
    

```jsx
export default class Composition extends Component {
    render() {
        return (
            <div>
                <p>container1</p>
                {/* 通过props.children */}
                <Container1>
                    <p style={{ color: 'red' }}>我是自定义内容1</p>
                    <p style={{ color: 'red' }}>我是自定义内容2</p>
                </Container1>
                <p>container2</p>
                 {/* 通过props.xxx */}
                <Container2 right={
                    (
                        <span style={{ color: 'green' }}> 我是自定义right</span>
                    )
                }

                    left={
                        (
                            <span style={{ color: 'red' }}> 我是自定义 left</span>
                        )
                    }
                />
            </div>
        )
    }
}


//通过 预定义 的 props.children 将嵌套的组件传递到Container1中 
function Container1(props) {
    const defaultContent = (
        <span style={{ color: 'blue' }}>
            我是默认内容
        </span>
    );
    return (
        <section className="container1">
            {props.children ? props.children : defaultContent}
        </section>
    )
}

//自定义的 props 
function Container2(props) {
    const defaultContent = {
        left: (
            <span style={{ color: 'blue' }}>
                我是默认内容Left
            </span>
        ),
        right: (
            <span style={{ color: 'blue' }}>
                我是默认内容Right
            </span>
        )
    }
    console.log(defaultContent);
    const { left, right } = props;
    return (
        <div className="container2">
            {
                left ? left : (
                    <section className="left">
                        {defaultContent.left}
                    </section>
                )
            }
            {
                right ? right : (
                    <section className="right">
                        {
                            defaultContent.left
                        }
                    </section>
                )
            }
        </div>
    )
}
```

ps:props.children 可以是还可以是函数，**你可以将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换成 React 理解的对象**。这种用法并不常见，但可以用于扩展 JSX。

- 特例关系

在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

**注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。**

### render-props

在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

具有 render prop 的组件接受一个函数，**该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。**，**可以在渲染子组件的同时 传入数据**，这一点时props.children 无法做到的

达到**插槽**的功能



与 React.PureComponent 一起使用时要小心

### Fragments

**用于解决 不必要的 外层DOM容器**

由于jsx **在语法层面必须包裹一个外层容器**，使用Fragments 组件包裹  并在编译后不会生成 真实的元素

```jsx

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>        <td>Hello</td>
        <td>World</td>
      </React.Fragment>    );
  }
}
```

`key` 是唯一可以传递给 `Fragment` 的属性。未来我们可能会添加对其他属性的支持，例如事件。

短语法 ，类似于 一个空标签 ,**但不支持任何的属性传递**

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>    
    );
  }
}
```

### Context

Context 提供了一个无需为每层组件手动添加 props，就能在**组件树间进行数据传递**的方法。

- 使用

  

  ```jsx
  1) 创建Context容器对象：
  	const XxxContext = React.createContext()  
  	
  2) 渲染子组件时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
  	<xxxContext.Provider value={数据}>
  		子组件
      </xxxContext.Provider>
      
  3) 后代组件读取数据：
  
  	//第一种方式:仅适用于类组件 
  	  static contextType = xxxContext  // 必须使用contextType   声明接收context
  	  this.context // 读取context中的数据
  	  
  	//第二种方式: 函数组件与类组件都可以
  	  <xxxContext.Consumer>
  	    {
  	      value => ( // 使用一个函数，函数的参数参数  就是context中的value数据
  	        要显示的内容
  	      )
  	    }
  	  </xxxContext.Consumer>
  ```

- 注意

  1. 创建的 上下文容器要在 子组件的作用域中
  2. 一般用于 实现插件

### PureComponent

- React.Component 类的2个问题 

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render()
>
> 2. 只当前组件重新render(), 就会自动重新render子组件 ==> 效率低

效率高的做法

>  只有当组件的state或props数据发生改变时才重新render()

原因

>  Component中的shouldComponentUpdate()总是返回true

解决

	办法1: 
		重写shouldComponentUpdate(nextProps,nextSate)方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent ，extends PureComponent
		PureComponent定义了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化



- React.PureComponent

`React.PureComponent` 与 [`React.Component`](https://zh-hans.reactjs.org/docs/react-api.html#reactcomponent) 很相似。两者的区别在于 [`React.Component`](https://zh-hans.reactjs.org/docs/react-api.html#reactcomponent) 并未实现 [`shouldComponentUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)，而 `React.PureComponent` 中以浅层对比 prop 和 state 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，`render()` 函数会渲染相同的内容，那么在某些情况下使用 `React.PureComponent` 可提高性能。

此外，`React.PureComponent` 中的 `shouldComponentUpdate()` 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。

**PureComponent** 的`shouldComponentUpdate 是浅比较 ，当在原有的state 上 更改，并用setState 传入的时候，会因为引用相等 直接返回false

```jsx
export default class Parent extends Component {
    state = {
        age: 16,
    }
    changeAge = () => {
        this.setState({
            age: 18
        })
    }
    render() {
        console.log('parent render ');
        return (
            <div>
                Parent
                <Child />
                <button onClick={this.changeAge}>点击</button>
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log('child render');
        return (
            <div>
                Child
            </div>
        )
    }
}
```

##### 错误边界

理解：

错误边界：用来捕获后代组件错误，渲染出备用页面

特点：

只能捕获**后代组件 **  **生命周期产生** 的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```



##### 组件通信方式总结

- 方式：

		props：
			(1).children props
			(2).render props
		消息订阅-发布：
			pubs-sub、event等等
		集中式管理：
			redux、dva等等
		conText:
			生产者-消费者模式

-  组件间的关系

		父子组件：props
		兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)

## HOOKS

技术胖 

可以让你在**不编写 class 的情况下使用 state 以及其他的 React 特性。**

逻辑复用

### useState

React 会在重复渲染时记住它当前的值（缓存啊），并且提供最新的值给我们的函数。

```jsx
import React,{useState} from 'react'

export default function Example() {
    //声明一个state 变量     传入初始state
    const [count,setCount]=useState(0);//数组解构
    //多状态  声明
    const [age,setAge]=useState(18);
    const [sex,setSex]=useState('nan');
    const [job,setJob]=useState('前端程序员');
    //
    return (
        <div>
            {
                //使用 State
            }
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click</button>
            {
                /*更新  State
                用户点击按钮后，我们传递一个新的值给 setCount。React 会重新渲染 Example 组件，并把最新的 count 传给它 */
            }
            <p>年龄{age}</p>
            <p>性别{sex}</p>
            <p>工作{job}</p>
        </div>
    )
}
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

注意：

顺序 声明，useState 的声明 **不能存在于条件判断语句中**

**不像 class 中的 `this.setState`，更新 state 变量总是*替换*它而不是合并它。**

### useEffect

*Effect Hook* 可以让你在函数组件中执行副作用操作

通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且**在执行 DOM 更新之后调用它。** 

(1). Effect Hook 可以让你在函数组件中执行**副作用操作**(用于模拟类组件中的**生命周期钩子**)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 

       ```jsx
 useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行 ---componentWillUnmount
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) 
// 1. 如果指定的是[], 回调函数只会在第一次render()执行， 不监听 任何---componentDidMount
//2.	没有传递 第二个参数  监听 所有状态的变化 ---componentDidUpdate
//3. 传入的副作用函数 返回的函数 相当于 ---componentWillUnmount

       ```
    
       ```



(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 

useEffect 的函数是异步调用的，会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`

### useRef

- 绑定dom 元素引用

相当于在类式组件中调用createRef  用法一致

```jsx
export default function useRefExample() {
    const refA = useRef();

    let refB = null;
    function log() {
        console.log(refA);
    }
    return (
        <div>
            {/* <A ref={(e)=>e}/> */}
            <input type="text" ref={refA} />
            <button onClick={log}>点击</button>
        </div>
    )
}
```

**函数式组件不能赋值给 ref** 

- 保存变量

### useContext

在组件树上 进行数据通信

相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`

`useContext(MyContext)` 只是让你能够*读取* context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为组件树上的下层组件*提供* context。

### useMemo

`useMemo`主要用来解决使用React hooks产生的无用渲染的性能问题。使用function的形式来声明组件，**失去了`shouldCompnentUpdate`（在组件更新之前）这个生命周期，也就是说我们没有办法通过组件更新前条件来决定组件是否更新**

`useMemo`和`useCallback`都是解决上述性能问题的

它仅会在某个依赖项改变时**才重新计算 memoized 值**,进行缓存（类似于 Vue的计算属性computed）

**配合React.Memo API进行使用，避免子组件 不必要的重新渲染**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

export default function useMemoExample() {
    const [name, setName] = useState('zhangsan');
    const [age, setAge] = useState(18);
    const [levels, setLevel] = useState([
        {
            name: 'level1',
            color: 'blue'
        },
        {
            name: 'level2',
            color: 'white'
        },
        {
            name: 'level3',
            color: 'pink'
        }
    ])
    function addAge() {
        setAge(age + 1);
    }
    function addLevel() {
        setLevel([...levels, { name: 'level4', color: 'red' }])
    }
    //不适用memo 的话这个 函数在age 更新的时候会被重复调用
    function getIntro() {
        console.log('getIntro');
        return 'My name is' + name;
    }
    function getColors() {
        console.log('get colors');
        return levels.map(item => item.color);
    }
    // const intro = getIntro();
    //使用useMemo 只会在依赖变化的时候 重新计算
    const intro = useMemo(() => {
        console.log('get in memo ');
        return 'My name is ' + name
    }, [name]);
    const colors = useMemo(() => {
        console.log('get colors');
        return levels.map(item => item.color);
    }, [levels]);
    return (
        <div>
            <p>{intro}</p>
            <p>年龄：{age}</p>
            <button onClick={addAge}>add age</button>
            <button onClick={addLevel}>add level</button>
            <p>{colors}</p>
        </div>
    )
}

```

### useCallback

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 `shouldComponentUpdate`）的子组件时，它将非常有用

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

使用场景是：有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。

`React.memo` 和 `React.useCallback` 一定记得需要配对使用，缺了一个都可能导致性能不升反“降”，毕竟无意义的浅比较也是要消耗那么一点点点的性能。

### 自定义hooks

使用以上的hooks 封装 抽离编写功能，自定义hook 必须以use开头（为了区分组件和自定义hook）

```jsx
export function useWindowSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });
    //缓存 函数
    const resizeHandler = () => {
        // console.log('resize');
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }; //取消事件监听
    }, []); //只调用一次
    return size;
}

export function useMousePosition() {
    const [position, setPosition] = useState({
        pageX: 0,
        pageY: 0,
    });
    const mousemoveHandler = (event) => {
        setPosition({
            pageX: event.pageX,
            pageY: event.pageY,
        });
    };
    useEffect(() => {
        window.addEventListener('mousemove', mousemoveHandler);
        return () => {
            window.removeEventListener('mousemove', mousemoveHandler);
        };
    },[]);
    return position;
}
```

## 路由

### 工作原理

### react-router（-dom）

web、native、anywhere

- 基础使用

  - 路由链接的编写

    ```jsx
     <Link className="list-group-item" to="/home">Home</Link>
     <Link className="list-group-item" to="/about">About</Link>
    ```

  - 路由注册

    ```jsx
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    ```

  - 使用 某种 Router（Router ，BrowserRouter或者HashRouter） 包裹在最外层

  - 

- 路由组件和一般组件

  - 路由组件

    通过路径匹配 由路由器渲染

    路由器会给 该组件 传递参数（{history:{},location:{},match:{}}）**到 props** 

    <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20210123222752496.png" alt="image-20210123222752496" style="zoom:67%;" />

  - 一般组件

  

- API

  - Link 组件
  
    渲染 为a 标签
  
  - NavLink 组件
  
    特殊的 Link
  
    activeClassName 属性可以添加 当前组件链接 渲染的元素添加一个类名，默认“active”
    
  - Route 组件
  
    它最基本的职责是在 location 与 Route 的 path 匹配时呈现一些 UI。
  
    用于注册逐渐
  
  - **Switch 组件**
  
   在多个Route 外层 再包裹一层Switch ，匹配 **唯一**的组件， path 合component 一一对应  ，**提升效率**，性能
  
  单个之外也有必要包裹一个
  
  渲染与该地址匹配的**第一个子节**点 `<Route>` 或者 `<Redirect>`
  
  - Redirect 组件
  
    渲染 `<Redirect>` 将使导航到一个新的地址。这个新的地址会覆盖 history 栈中的当前地址，类似服务器端的重定向，默认路由
  
    to 属性 指定默认path
  
  - 

- 样式丢失问题

path 设置为 多级路径，导致css的资源加载路径 错误

1. 去掉 . 使用 /css/xxx
2. 使用%PUBLIC_URL%/css/xxx.css
3. 使用HashRouter  （路径出现在hash 部分，不对浏览器的行为进行影响）

- 模糊匹配合严格匹配

  Route 默认 模糊匹配，顺序必须一致

  设置Route 的exact 属性为true 开启严格匹配

- 嵌套路由

  to 属性必须包含父组件的路径

  此时不能开启严格匹配 否则不能匹配到嵌套路由

- 给路由组件传参

  根据路由链接的编写 （to 属性），和路由注册（path 属性）来传递参数 ，并在组件中使用

  - params 

    /xxx?a=66

    xxx 即为 params 参数

    - 传递
    - 声明接收
    - 注入到 组件props

    ```jsx
      <ul>
                    {newsList.map(({ id, title }, index) => {
                        return (
                            <li key={id}>
    {/* 向路由组件 传递 params 参数 */}
                                <Link to={`/home/message/detail/${index + 1}`}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="content">
    {/* 接收 params 参数 */}
                    <Route path="/home/message/detail/:id" component={Detail}/>
                </div>
    
    
    //在路由组件中 通过props.match.params 取出参数 
     console.log(props);
     const {id}=props.match.params;
    ```

    

  - search参数  (Vue 或其他地方中也叫**query 参数**，React 用search 来标识)

    /xxx?a=66&b=77

    ?a=66&b=77 即为 search参数

     

    - 传递 ?a=66&b=77

    - 声明接收（无需 特别声明，可直接在 props 属性中使用）

    - 从props 使用

      props.location.search 为字符串 urlencoded 格式，需要自己转换为对象，使用querystring 库 转化

      qs.parse(*props*.location.search.slice(1))

  - state 参数

    和组件state 没有关系

    - 传递

      路由导航组件 的to 属性 设置为对象

      <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20210130231157824.png" alt="image-20210130231157824" style="zoom:67%;" />

      ```jsx
      <Link to={{
                 pathname:'/home/message/detail',
                 state:{
                 id:1,
                 title:'001'
                 }
                 }}>{title}</Link>
      ```

      

    - 接收（不用声明接收）

    - 使用

      props.location.state 

    state 参数不会暴露在 地址栏、

    由于记录在history 中（前提是BrowserRouter ）,刷新不会消失，但是强制刷新或者清除缓存 会呗清空

  - 总结
  
- push 和replace

  默认的路由跳转为push 模式

  设置**replace ={true}** 开启replace 模式，无法回退

- 编程式的路由导航

  **props.history** 上有多种方法，可以用于跳转

![image-20210131144221878](https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20210131144221878.png)

调用同时 可以传递prasm、search、state 参数

- withRouter 的使用

在非路由组件中 使用路由的API

一个方法，传入 组件，在props 上注入路由API

- BrowserRouter 与HashRouter

  ![image-20210131151441099](https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20210131151441099.png)

### 组件库 

antd  React 最常用的组件库

- 基础使用

  组件、icon 引入

- **按需引入**

  和vue-cli 下按需引入Element/antd-v的 方式一致

  会在引入组件的同时引入样式

  - 安装 babel-plugin-import 

  - 创建babel.config.js 文件 进行配置

    ```js
    module.exports = {
        plugins: [
            [
                'import', //按需加载 ant design
                { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
                //设置为true 会报错，需要另外开启 js 把less 转化为内  css，这里直接使用css 简单设置
            ],
        ],
    };
    
    ```

    

## redux

状态共享 和管理






<Vssue />