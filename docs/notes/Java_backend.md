## Java 后端

### 一.反射

**将类的各个组成部分，封装为对象 就是反射机制**

用处：

1.在程序运行过程中操作，获取

2.可以解耦

#### 获取获取Class 类对象（字节码文件对象）的方法

1. Class.forName("全类名")

​    Source 源码阶段 ：

​    多用于配置文件：读取文件，加载类

2. 类名.class 属性

   Class 类阶段

   多用于参数的传递

3. getClass()方法

   内存 阶段

   **三种方法获取的Class 类对象 指向内存统一位置**



####  Class 对象的 功能

1. 获取成员变量
2. 获取构造方法
3. 获取成员方法
4. 获取类名





小练习：简易“框架”，可以获取任何类的字节码对象，并执行该类的任何方法

##  二.注解

给编译器看的， **用来给包，类，字段，方法，进行说明，注释**

```
* 功能
*1.编写生成文档
*2.
*3.编译检查
*
* 使用方法 ：@xxx
*
*
*
* JDK 预定于的注解
* @override  标记方法重写
* @Deprecated  标识 元素 已过时，不建议使用
* @SuppressWarning   压制警告
*
*
*
* 自定义注解
*格式：
*   元注解
*   public @interface XXX{
*   属性（方法）列表
*   }
*
* 本质：
*   public interface XXX extends java.lang.annotation.Annotation
*   本质上就是一个 interface 继承自 Annotation
*
*属性：接口可以定义的   成员方法
*   要求：
*   1.属性的合法返回类型  基本类型，String，枚举，注解，及这些类型的数组
*
*
*   使用：使用属性的时候需要给 属性指定赋值（有默认值除外）
*       属性为value 且唯一 ，可以直接传值
*
* 元注解：注解的注解
*  @Target:注解作用的位置
*  @Retention；描述 注解被保留的阶段
*  @Documented :描述 注解是否被 抽取到api 文档中
*  @Inherted :描述改 注解是否被 子类继承
*
*
*
* 使用：解析注解  ,配合 反射 ！！！！MARK
* 1.获取 注解修饰的 对象
* 2.获取 注解 getAnnotation(xxx) ，，获取在内存中 实现了该注解的类  的对象
* 3.调用 注解的抽象方法 获取配置 属性值，
```

## 三.XML

1. Extensible markup Language可扩展标记语言

   可扩展：自定义标签

2. 功能：用来标记数据、定义数据类型，文档数据传输

   - 配置文件

   - 网络传输

3. 和html 的区别

   - xml 标签自定义
   - xml 语法严格
   - xml 用于数据存储，html 展示页面数据

 在java 开发中 常用做 配置文件

####  入门

- .xml
- 第一行必须定义文档声明 <?xml version='1.0'?>
- 只有一个根标签
- 属性值必须使用引号
- 必须是双标签/自闭和
- 标签名称区分大小写

#### 组成部分

1. 文档声明

   - 格式 ：<?xml version="1.0" encoding ="GBK"?>
   - version :版本号
   - encoding:编码方式。 告知解析引擎，当前使用的字符集编码，默认ISO-8859-1 ,必须和文件编码方式一致
   - standalone:yes/no  是否独立  ，是否依赖其他文件

2. 指令（了解） 配合css

3. 标签

   规则：

4. 属性

   。。。

   **id属性值**

5. 文本

   CDATA区：区域中的内容   **原样输出**

   <！[CTATA[xxx]]>

   

#### 约束

- 概念

限定xml 的书写规则,结构

作为框架的使用者，**会引入，能够阅读**

- 分类

  1. DTD：简单
  2. Schema：复杂

- DTD

  <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200923192537406.png" alt="image-20200923192537406" style="zoom:33%;" />

  内部 ：定义在xml 中

  外部：定义在外部

      - 本地<!DOCTYOE 更标签名 SYSTEM “path">
      - 网络<!DOCTYPE 根标签名 PUBLIC "URL">

- Schema 

  .xsd 结尾，本身就是一个xml 

#### 解析

操作：解析+写入

解析方式：

DOM：占用内存过大

SAX：逐行读取，事件驱动

常见解析器

1. JAXP  ：SUN公司，Dom+sax
2. DOM4J：优秀的解析器
3. Jsoup:解析器 html和xml
4. PULL ：Android 内置解析器，sax

#### Jsoup

1. 导入jar

2. 使用

   - Jsoup对象

     - parse 方法，多个重载的方法

       

   - Document 对象

     getElementsByTag()  返回Elements

     getElementsByAttribute()  返回 Elements

     getElementsByAttributeValue() 返回Elements

     getElementById
   
   - Elements 对象，元素 ArrayList  集合
   
   - Element 
   
     获取子元素子元素，属性值，文本
   
   - Node 节点对象
   
     Document 和ELement 的父类

3. 快捷查找
   - selector  类似querySelector
   - XPath





### 四.MVC开发模式 

Servlet->JSP(接话servlet 代码)->MVC 开发模式

jsp 中既有java 代码，又有html 代码

- MVC  

  1. M：Model ：模型层
  2. V：VIew ：试图层
  3. C：Controller :控制层

  <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200924011425784.png" alt="image-20200924011425784" style="zoom:67%;" />

  

  MVVM （M,V,VM）是MVC 的改进版



### 五.Maven

一个java 编写的 项目管理和综合工具

- 依赖管理：maven项目 中的jar包 不在项目中，存储在**jar 包仓库** ，通过jar 包坐标 找到
- 项目的一键构建：



简化构建过程、统一构建体系、提供高质量的项目信息、

#### 1..安装

下载，解压，配置环境路径

#### 2.仓库种类

本地，远程【私服】，中央仓库 公网

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200925003655358.png" alt="image-20200925003655358" style="zoom:67%;" />



本地仓库的构建，settings.xml的配置

#### 3.maven 标准目录结构

![image-20200925151615255](https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200925151615255.png)

#### 4.声明周期

![image-20200925203125714](https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200925203125714.png)

## Spring boot

### 六.Spring 入门

#### 微服务

一个应用应该是**一组**小型服务

每一个功能元素 最终都是一个可独立替换和升级的软件单元

#### 1. helloworld

##### 简单实现

1. 创建 spring-boot 项目

   配置maven 仓库源，为**阿里镜像**

   使用**spring initializr** 快速创建 spring boot项目

   编写 controllrer 

   目录结构

   - 主程序已经生成，只需编写业务
   - resources 目录
     - static :保存静态资源
     - templates ：保存模板页面
     - application.properties ：Spring boot 的配置文件

2. 打包

maven  ：clean  之后 package

生成jar 包，java -jar  运行 jar 包

#### 2.pom 文件

1. 父项目

   ```xml
   <parent>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-parent</artifactId>
           <version>2.3.4.RELEASE</version>
           <relativePath/> <!-- lookup parent from repository -->
       </parent>
   
   更上一级父项目
   <parent>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-dependencies</artifactId>
       <version>2.3.4.RELEASE</version>
     </parent>
   <!--spring-boot-dependencies 依赖管理-->
   ```

2. **启动器**

   ```xml
    <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
   
   ```

   spring-boot-starter-web：

   spring-boot 场景启动器，导入web 模块需要的依赖

   spring-boot 把**功能场景**进行抽取，做成 **starters**，导入相关场景的依赖

#### 3.主程序/入口类

**@SpringBootApplication** 注解：标记这个类 是Spring-boot 的主程序类，运行这个类的main 方法来启动应用

由下面的注解组合

@SpringBootConfiguration  Springboot配置

@EnableAutoConfiguration  自动配置

​    注解内的 @AutoConfigurationPackage 注解**，使用@import 注解将 主配置类所在的包及其 子包的所有组件扫描到Spring 容器**





### 七.Spring Boot 配置

#### 1.默认配置文件 

支持的配置文件包括 **yaml**，properties  （application.yml/application.properties  ）

##### YAML 语法

- 1. yaml 基本语法

k:(空格)v：表示一对键值对**（空格必须有）**；

以**空格**的缩进来控制层级关系；只要是左对齐的一列数据，都是同一个层级的

```yaml
server:
    port: 8081
    path: /hello
```

属性和值也是大小写敏感；

- 2、值的写法

##### 字面量：普通的值（数字，字符串，布尔）

​	k: v：字面直接来写；

​		字符串默认不用加上单引号或者双引号；

​		""：双引号；不会转义字符串里面的特殊字符；特殊字符会作为本身想表示的意思

​				name:   "zhangsan \n lisi"：输出；zhangsan 换行  lisi

​		''：单引号；会转义特殊字符，特殊字符最终只是一个普通的字符串数据

​				name:   ‘zhangsan \n lisi’：输出；zhangsan \n  lisi

##### 对象、Map（属性和值）（键值对）：

​	k: v：在下一行来写对象的属性和值的关系；注意缩进

​		对象还是k: v的方式

```yaml
friends:
		lastName: zhangsan
		age: 20
```

行内写法：

```yaml
friends: {lastName: zhangsan,age: 18}
```

##### 数组（List、Set）：

用- 值表示数组中的一个元素

```yaml
pets:
 - cat
 - dog
 - pig
```

行内写法

```yaml
pets: [cat,dog,pig]
```

##### YML 配置文件值的注入

见yml 包下代码

1.使用 @ConfigurationProperties注解 

2.@Value注解



### Spring-boot

@Bean 注解 将函数添加到容器中

@Autowired 方法参数从容器获取，自动装配

### AOP 面向切面编程

它利用一种称为"**横切**"的技术，剖解开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其命名为"Aspect"，即切面。所谓"切面"，简单说就是那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块之间的耦合度，并有利于未来的可操作性和可维护性

OOP是纵向的，AOP是横向的

[参考链接](https://www.jianshu.com/p/0799aa19ada1)

一般拿来做日志输出，

#### 基本概念

##### 连接点 joinpoint

就是被拦截到的方法

##### 切入点 pointcut

被抽取了共性功能的方法

切入点一定是连接点，连接点不一定是切入点

##### 通知 Advice

共性功能组成的代码逻辑，被拦截之后执行的代码

定义在通知类里

- 前置通知
- 后置通知

##### 引入（introduction）

在不修改代码的前提下，引入可以在**运行期**为类动态地添加一些方法或字段

##### 目标对象

代理的目标对象

原来被切入的类不能正常使用，spring 创建代理对象

##### AOP代理

##### 织入

##### 切面

切面就是对横切关注点的抽象，切入点和通知的关系抽象