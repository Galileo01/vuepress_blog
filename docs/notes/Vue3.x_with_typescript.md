# Vue3.x with typescript

2020/10

**一.Vue 3.0的 6大亮点**

1. Vue3.0六大亮点

2. Performance:性能比Vue 2.x快1.2~2倍

3.  Tree shaking support:按需编译,体积比Vue2.x更小

4. **Composition API**:组合API(类似React Hooks)

5. Better TypeScript support:更好的Ts支持

6. Custom Renderer API:暴露了自定义渲染API

7. Fragment，Teleport(Protal)，Suspense:更先进的组件

   

**2.Vue3.0是如何变快的?**

- diff算法优化: https://vue-next-template-explorer.netlify.app/

     *+ Vue2中的虚拟dom是进行全量的对比*
     
     *+ Vue3新增了静态标记(PatchFlag),*
     
      *在与上次虚拟节点进行对比时候，只对比带有patch flag的节点*
     
      *并且可以通过flag的信息得知当前节点要对比的具体内容*

- hoistStatic 静态提升

     *+ Vue2中无论元素是否参与更新, 每次都会重新创建, 然后再渲染*
     
     *+ Vue3中对于不参与更新的元素, 会做静态提升, 只会被创建一次, 在渲染时直接复用即可*

- cacheHandlers 事件侦听器缓存

     *+ 默认情况下onClick会被视为动态绑定, 所以每次都会去追踪它的变化*
     
      *但是因为是同一个函数，所以没有追踪变化, 直接缓存起来复用即可*

- ssr渲染

     *+ 当有大量静态的内容时候，这些内容会被当做纯字符串推进一个buffer里面，*
     
      *即使存在动态的绑定，会通过模板插值嵌入进去。这样会比通过虚拟dmo来渲染的快上很多很多。*
     
     *+ 当静态内容大到一定量级时候，会用_createStaticVNode方法在客户端去生成一个static node，*
     
      *这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染。*

## 一. 创建项目

在最新版的vue/cli （v4.5.6）支持创建时选择vue 3.x，剩下的步骤和vue2.x 创建项目方式一直

选择typescript ，在vue中使用ts编写代码，更利于团队协作与维护

## 二.项目目录结构

...

### **重大变更1**：

- main.ts :

  vue2.x api 没有根实例的概念，无论组件还是根实例都是通过 new Vue 创建，

  vue 3 提供 createApp  创建全局的Vue 实例，并进行全局的配置

- 各种全局APi 改为收到从vue 导入，支持tree-shaking

- 要让 TypeScript 正确推断 Vue 组件选项中的类型，需要使用 `defineComponent` 全局方法定义组件

## 三.API

### 1. Composition APi 风格

####  入口函数setup

在setup（） 中使用Composition API，使用vue 暴露的各种Api 将同一块**业务逻辑**（包括状态的定义，函数操作，计算属性等）聚**合在一起/一个函数**，不在像vue2.x哪像分散 在各个option 里

通过 在setup（） return 出去，在当前实例上使用

1. 和vue 2.x 的Option API可以混用

2. 执行时机

   在beforecreate 之前（及在所有的生命周期钩子之前），此时的this 和其他选项的this 不一致，不指向当前实例**所以 在setup 中使用this 要谨慎**

   本质是 **在setup  暴露出去的属性（return）注入到option APi 中**

### 2. 响应式 API

#### ref :

一般用于将一个**简单数据**转化为 可改变 响应式的ref 对象,,可以转换复杂类型（命名来由：是传入简单值的一个引用：ref）

在 逻辑中使用ref 对象，要对**.value** 进行操作

```js
const count = ref(0);//->转换为 reactive({value:0})
console.log(count.value) // 0
```

​	**在template 中引用ref 对象则会自动解套**，reactive object 同理也会解套，arr，map，等不对解套

### reactive

将**传入的对象**，一般是复杂对象(**对象**，set，**array**，map 等)，传为可变的响应式 的reactive 对象

**因为是响应式【对象】，所以必须始终保持对这个所返回对象的引用以保持响应性【不能解构该对象或者展开】**

[`toRefs`](https://vue-composition-api-rfc.netlify.app/zh/api.html#torefs) API 用来提供解决此约束的办法——它将响应式对象的**每个 property 都转成了相应的 ref**，

```js
 function useMousePosition() {
    const pos = reactive({
        x: 0,
        y: 0,
      })
    return toRefs(pos)
}
// x & y 现在是 ref 形式了!
const { x, y } = useMousePosition();//此时可以进行 解构和扩展
```

1. 响应式转换是“深”的——**它影响所有嵌套 property**

   对于大量数据，有可能有性能上的消耗，监听大量对象使用 shallowReactive和shallowRef

2. Vue 2.x 中使用defineProperty 达到响应式的效果，而在3.0中使用ES6的**Proxy** ，更精简，更高效

### shallowReactive

创建一个响应式代理，该代理跟踪其自身 property 的响应性，但不执行嵌套对象的深度响应式转换 (暴露原始值)。

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})
// 改变状态本身的性质是响应式的
state.foo++
// ...但是不转换嵌套对象
isReactive(state.nested) // false
state.nested.bar++ // 非响应式
```

### shallowRef

同上，使用ref  转换对象本身，**监听的是xx.value** 和ref 对象的使用方法一致

因为实际上ref 就是转换为reactive（{value:xxx}）

triggerRef 方法，根据传入的对象主动更新视图

- ```js
state.nested.bar++;
  triggerRef（state）
  ```

底层调用`shallowReactive`

### toRaw

返回创建响应式对象时的原始对象（传入方法的参数）

拿到原始对象，可以进行一些**不触发页面更新的操作，减少性能消耗**

- 直接修改原对象的属性无法触发视图更新，只能通过 reactive、ref 返回的响应式 对象更改状态

```js
toRaw(state);//获取 reactive（）方法创建的响应式对象
toRaw(state.value);//获取 ref（）方法创建的响应式对象
```

### markRaw

标记一个对象，使其永远不会转换为响应式代理。返回对象本身

### toRef

可以用来为源响应式对象上的 property 性创建一个 [`ref`](https://v3.cn.vuejs.org/api/refs-api.html#ref)。然后可以将 ref 传递出去，从而保持对其源 property 的响应式连接。

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo');

fooRef.value++;
//等同于
const fooRef = ref(state.foo);
```

当您要将 prop 的 ref 传递给复合函数时，`toRef` 很有用

```js
export default {
  setup(props) {
    useSomeFeature(toRef(props, 'foo'))
  }
}
```

**注**:更改toRef 创建的数据，不会更新页面

### toRefs

将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的[`ref`](https://v3.cn.vuejs.org/api/refs-api.html#ref)

当从**复合函数返回响应式对象时**，`toRefs` 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行**分解/扩散**：此时就可以 对toRefs返回的对象进行解构和扩展

用法1：将对象的每个属性都转换为ref

用法2：**在不丢失响应式的情况下对返回的对象进行分解/扩散：**

```js
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // 逻辑运行状态

  // 返回时转换为ref
  return toRefs(state)
}

export default {
  setup() {
    // 可以在不失去响应式的情况下破坏结构
    const { foo, bar } = useFeatureX()
    return {
      foo,
      bar
    }
  }
}
```

### customRef

创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 `track` 和 `trigger` 函数作为参数，并应返回一个带有 `get` 和 `set` 的对象。

官方使用 `v-model` 使用自定义 ref 实现 `debounce` 的示例：

```js
function useDebouncedRef(value, delay = 200) {//使用自定义Ref 时传递的state或者其他参数
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track();//告诉Vue 需要跟踪变化
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger();//触发页面视图的更新
        }, delay)
      }
    }
  })
}

export default {
  setup() {
    return {
      text: useDebouncedRef('hello')//使用自定义的ref
    }
  }
}
//ts 版本
function myRef(value: string) {
  return customRef((track, trigger) => {
    return {
      get(): string {
        track();//告诉Vue 需要跟踪变化
        console.log("get", value);
        return value;
      },
      set(newValue: string) {
        console.log('set newValue',newValue);
        value = newValue;
        trigger();//触发页面视图的更新
      },
    };
  });
}
```

应用场景

由于setup 只能是同步函数，setup 中不能使用async，await 

此时可以使用customRef 自定义ref，在其中添加数据的回调请求

### ref 模板引用

与Vue2.x 的ref，Vue 3.0  在ref 中添加了模板引用，使我们能够在**setup 中创建模板引用对象**

```js
<template> 
  <div ref="root">This is a root element</div>
</template>
<script>
  import { ref, onMounted } from 'vue'
  export default {
    setup() {
      const root = ref(null);//ref 传递null ，Vue 会在页面查找对饮ref 的元素

      onMounted(() => {
        // DOM元素将在初始渲染后分配给ref
        console.log(root.value) // <div>这是根元素</div>
      })

      return {
        root //必须暴露到渲染上下文
      }
    }
  }
</script>
```

### readonly

获取一个对象 (响应式或纯对象) 或 [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref) 并返回原始代理的只读代理。**只读代理是深层的**：访问的任何嵌套 property 也是只读的

变更响应式对象会导致警告

- shallowReadonly
- isReadonly

### 3.Vue 3.0 的生命周期函数钩子

直接**导入**的 onX 函数注册生命周期钩子

#### 变化

选项 API 生命周期选项和组合 API 之间的映射

beforeCreate -> setup()

created -> setup()

beforeMount -> onBeforeMount

mounted -> onMounted

beforeUpdate -> onBeforeUpdate

updated -> onUpdated

beforeUnmount -> onBeforeUnmount

unmounted -> onUnmounted

errorCaptured -> onErrorCaptured

renderTracked -> onRenderTracked

renderTriggered -> onRenderTriggered

**这些生命周期钩子注册函数只能在 setup() 期间同步使用**

#### 新增

- renderTracked

  跟踪虚拟 DOM 重新渲染时调用。钩子接收 **debugger event** 作为参数。此事件告诉你**哪个操作**跟踪了组件以及**该操作的目标**对象和键。多用于输出调试

  ```js
  const app = Vue.createApp({
    data() {
      return {
        cart: 0
      }
    },
    renderTracked({ key, target, type }) {//键：目标：操作类型
      console.log({ key, target, type })
      /* 当组件第一次渲染时，这将被记录下来:
      {
        key: "cart",
        target: {
          cart: 0
        },
        type: "get"
      }
      */
    },
    methods: {
      addToCart() {
        this.cart += 1
      }
    }
  })
  
  app.mount('#app')
  ```

  

- renderTriggered

  