## Typescript

### 1.静态类型

比js 多了**静态类型**的概念，这种 类型的约束 只在ts 中存在，编译为js 之后就无效了

- 普通基础数据类型
- 对象类型
- 数组类型
- 类类型
- 函数类型

```js
let count: number = 123;
//普通对象
const Xiaojiejie: {
    name: string;
    age: number;
} = {
    name: '大叫',
    age: 10,
};

Xiaojiejie.name = 'test';
// Xiaojiejie.height='1213';  报错
//数组 类型
const xjjs: string[] = ['sadsd', '123'];

//类 类型
class Person {}
const dajiao: Person = new Person();
//函数类型
const jianxjj: () => string = () => {
    return '见小姐姐';
};
```

### 2.类型注解和类型推断

#### 类型注解

告诉ts 某个变量属于某种类型 

```ts
let count:number; // 类型注解
count=222;//赋值其他类型 会报错
```

#### 类型推断

ts 编译器自己推断 变量的类型

```ts
let sum=123; //ts编译器自身进行 类型的推断
```

**能推断的时候，就不用注解， 不能推断的时候 必须 书写注解**

```ts
const one=1;
const two=2;
const three=one+two;// 类型推断
function getTotal1(one:number,two:number){ // 对函数参数进行 类型注解
    return one+two;
}

//能推断的时候，就不用注解， 不能推断的时候 必须 书写注解
const total=getTotal1(one,two);// 根据参数注解 进行total 的 类型推断
```

### 3.函数参数和返回类型的注解

####  参数类型和返回值

- void

- **never**

  表示，函数由于某种原因，永远不会返回值

  ```ts
  // 执行不完 函数 nerver
  function fun(): never {
      throw new Error('sdasdas');
      console.log('asdasd');
  }
  //死循环
  function fun2(): never {
      while (true) {}
      console.log('ss');
  }
  ```

  参数解构，默认等

  ```ts
  //书写 对象解构形式的 参数注解，  包括  默认值 ,类型 , 可选， 
  function fun3({ one, two = 123 }: { one: number; two?: number }): number {
      console.log(one, two);
  
      return one + two;
  }
  ```

### 4.数组

  ```ts
  //数组类型的定义
  const numberArr: number[] = [1, 2, 3, 4];
  const stringArr: string[] = ['1', '2'];
  const undefinedArr: undefined[] = [undefined, undefined];
  const arr: (number | string)[] = [1, 'string'];
  
  //类型别名
  type Lady = { name: string; age: number };
  
  //定义 类 用作 类型注解
  class Madam {
      name: string;
      age: number;
      constructor() {}
  }
  //接口 用 用作 类型注解
  interface Woman {
      name: string;
      age: number;
  }
  // console.log(Lady);
  console.log(Madam);
  
  const Xjjs: Lady[] = [{ name: 'xjj1', age: 10 }];
  
  const madams: Madam[] = [{ name: 'xjj2', age: 29 }];
  
  const womans: Woman[] = [{ name: 'xjj2', age: 29 }];
  console.log(Xjjs);
  
  ```

  

### 5.元组

表示 数组内的元素类型 必须和 指定的一致

```ts
//元组  元素的类型必须与注解 顺序一致
const yuan:[string,string,number]=['dajiao','teacher',19];

//常用于CSV 文件
const yuans:[string,string,number][]=[
    ['大叫','teacher',6]
]
```

### 6.interface

#### 初识

类似于java， interface 接口 表示一种多个物体**共有属性**

在ts 中可以用来 进行 类型注解，函数参数和返回值的注解等

```ts
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistLine ?:number //可选属性允许额外的属性
}

```

#### 和 Class，类型别名 的区别

type Lady=string;

类型别名可以是 **单独的数据类型，而 接口 只能以对象的形式**

接口只能包含  抽象定义，不包含实现

#### 应用

用作 **函数参数类型**的注解

```ts
function filterResume(girl: Girl): void {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
    girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰了'));
}

function getResume(girl: Girl): void {
    console.log(girl);
}
```

#### 深入

1. 描述对象：初识里面的函数参数，返回值等的注解
2. 描述类：类对实现接口
3. 描述接口：接口的继承



### 7.TS的类

#### 基础 

和Es6 语法基本一致

#### 类的访问类型 （TS特有的）

private，public，protected

- public  ：在类的**外部和外部** 都可以使用,类的 属性和方法 **默认使用public 修饰**
- private ：只能在类的内部（方法）使用
- protected：在类内部和子类中使用

#### 构造函数

子类的构造函数必须在第一行必须**使用super()调用父类的构造函数**,实例化

```ts
//定义 构造函数时 声明属性 的简洁写法
class Xiaojiejie {
    constructor(private _age: number) {}
}
```



#### Getter，Setter，static （TS特有），只读属性

- 对于private 修饰的属性，只能通过setter，getter 设置和访问私有属性-

  在返回和设置是可以进行其他的操作

- static ：修饰 类的静态属性，方法，

#### 抽象类

```ts
abstract class Gril{
    abstract skil()
}
```

### 8.tsconfig.json文件

tsc的编译配置文件

使用：tsc -init 生成tsconfig.json文件

tsc 命令 ，调用该文件 进行编译

#### 配置项

- include/exclude /files 配置项  ：要编译的文件

- **compilerOptions ** 编译配置

  常用

```json
{
  "include": [
    "demo.ts"
  ],/* include 和files 属性一致，两个属性都没有就编译全部的ts文件*/
  "compilerOptions": {
    "target": "es2015", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* 也编译 js 文件 */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "sourceMap": true,                     /*生成.map 文件，链接js 和ts 代码映射 corresponding '.map' file. */
    // "outFile": "./",                       /* 生成到单个文件，此时module不支持commonjs */
    // "outDir": "./",                        /*生成的js 目录 */
    // "rootDir": "./",                       /* 源文件所在牡目录 */

    // "removeComments": true,                /* 移除注释*/
    /* Strict Type-Checking Options */
    "strict": true, /* Enable all strict type-checking options. 严格模式 */
    // "noImplicitAny": true,                 /*是否报错 隐式的声明any  Implicit：隐含的*/
    // "strictNullChecks": true,              /*是否 不允许 null 使用*/
    /* Additional Checks */
    // "noUnusedLocals": true,                /* 没有使用的变量，不进行打包，并提示 */
    // "noUnusedParameters": true,            /* 函数没有使用的参数 parameters. */
   
    "esModuleInterop": true, /* Enables emit interoperability between CommonJS and ES Modules via creation 
    "skipLibCheck": true, /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```

### 9.联合类型 和类型保护

- 联合类型

  联合类型，一个变量**可能有两种或两种以上的类型**

  ```ts
  //联合类型  varible,people 参数
  let varible: string | number;
  
  function judgeWho(people: Waiter | Teacher) {
      if ('skill' in people) {
          people.skill();
      } else people.say();
  }
  ```

- 类型断言

  重写 ts 的类型推断和 分析

  **as Foo** 或者<Foo>

  ```ts
  //as 改变编译器的 类型推断
  function judgeWho1(people: Waiter | Teacher) {
      if (people.anjiao) {
          (people as Teacher).skill();
      } else (people as Waiter).say();
  }
  ```

  

- 类型守护**（ts，js中共有的）**

  在使用联合类型时，不明确类型的情况下调用方法，ts 会报错，这是就要通过代码的方式保证**类型的正确性**，

  - 属性判断/in 操作符
  - typeof
  - instanceof ：主要用于类

### 10.枚举 enum

枚举类型的值都是数字类型，默认从0 开始

 ```ts
enum Status{
    MASSAGE,
    SPA,
    DABAOJIAN
}

//实际使用 定义状态
 StatusText() {
            enum StatusText {
                未审核,
                未完成,
                不合格,
                合格,
                '过期',
            }
           return StatusText[this.status]
        },

 ```

### 11.泛型

泛型在**成员之间**提供有意义的类型约束，这些成员可以是，类的属性，方法，函数参数，返回值

#### 函数中使用

function functionName<T> 使用泛型

约束函数的参数类型一致

```ts
// 需求 保证join 函数的参数类型一致
function join<T>(a:T,b:T){
    return `${a}${b}`;
}
join<string>('a','b');//在使用的时候必须明确 T的类型
join<number>(1,2);

//reverse 函数，保证 返回值和参数的类型一致
function reverse<T>(param:T[]):T[]{
    const result:T[]=[];
    for(let i=param.length-1;i>=0;i--)
    {
        result.push(param[i]);
    }
    return result;
}
```

#### 类中使用

class className<T>{

}

### 13.命名空间

在不基于文件模块**(使用单文件**)进行模块化时，创建的变量有可能暴露到全局，ts 提供了命名空间

```ts
namespace Home{
    //向外暴露xxx
    export function xxx(){}
    
}
```

原理是转换为，立即执行函数，闭包，保证变量不泄露到全局

可以继续嵌套

### 14.声明空间和变量空间

TS中存在声明空间和变量空间

#### 声明空间

包括用来进行类型注解的内容：**类，接口，类型别名**

不能把 **接口，类型** 当作变量来使用

```ts
class Test{}
const a=Test;//不报错，类可以当作变量使用

interface People{

}

const p=People;//报错，interface 定义在声明空间，不能当作 变量使用
```

#### 变量空间

包含可以用作变量的内容：类，变量等

### 15.模块

####  全局模块

**默认情况**下，当你开始在一个文件夹下编写ts 文件，它处于**全局命名空间**中，不同文件处于统一命名空间，**可以直接使用其他ts 文件的变量**

但这是很危险的

推荐使用ES6的文件模块，当跟级别有 import/export 就会产生一个文件内的作用域

#### 文件模块

在ts 中推荐使用ES6的module 语法，使用import/export 语法。而不是commonjs 因为commonjs **是运行时加载**，**导致ts 无法进行类型推断**

