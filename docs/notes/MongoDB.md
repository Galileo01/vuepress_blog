# MongoDB 学习笔记

一种文档型的 **NoSQL** 数据库

是非关系数据库当中功能**最丰富，最像关系数据库的**。支持部分SQL语句

- mongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。存储在**BSON**（binary  json ）。字段值可以包含其他文档，数组及文档数组。

- 为 快速开发Web 应用而设计
- 极简，灵活
- 数据模型是面向文档的，

## MongoDB

### 安装

#### windows下的安装 

  下载，安装   https://www.mongodb.com/try/download/community

#### linux下安装

- 下载tgz文件

- 通过scp 指令上传到服务器

  ```shell
  scp  xxx.tgz admin@121.41.225.12:/usr/local/MongoDB
  ```

- 解压

  ```shell
  tar -zxvf xxx.tgz -C /usr/local/MongoDB
  ```

- 创建文件夹

  创建db文件夹 存放数据库数据，

  创建log文件夹，存放输出日志

- 创建配置文件

  ```shell
  # 端口
  port=27017
  #数据目录
  dbpath = /usr/local/MongoDB/data/db
  #日志文件
  logpath = /usr/local/MongoDB/data/log/mongodb.log
  #设置后台运行
  fork = true
  #日志输出方式
  logappend = true
  ```

- 应用配置并进入数据库

  ````shell
  # bin目录下
  sudo ./mongod --config ./mongodb.conf
  ./mongo 进入数据库前台命令行
  mongo --username admin --password 15823413506  #有用户验证的情况下连接数据库
  ````

- 配置$PATH（推荐，非必须）

  将bin下的可执行文件 添加到 PATH ，这样就可以在**任意目录下 使用**bin/下的命令

  ```shell
  export PATH=/usr/local/mongodb4/bin:$PATH
  ```

  这个方法重启后$PATH 的设置就失效了，

  还有种永久的方法就是  **把bin下的 可执行文件 复制到 /user/local/bin 或者其他 $PATH 下的目录**

- 设置一个账户，授权使用数据库，更加安全（最好设置，不是必须的步骤）

  ```shell
  use admin
  
  db.createUser({user:"admin",pwd:"158...",roles:["root"]})
  db.auth('root','123456'); # 使用 账户登录
  db.shutdownServer(); #关闭
  ```

  conf 配置文件新增  以下字段

  ```shell
  #开启身份验证
  auth = true
  ```

  验证账户的方式进入数据库

  ```shell
  mongo 127.0.0.1:27017/admin --username "root" --password "123456"
  ```

- 可能遇到的问题

  - 关闭mongod 方法：

    ```shell
    use admin
    db.shutdownServer()
    ```

  - mongod自带的问题修复工具

    ```shell
    mongod --repair
    ```

非正常关闭mongdb 会在db文件下生成 **mongod.lock**文件，必须删除这个 文件，否则后面启动会报错

- **如果要使用navicat 等数据库管理工具远程** 连接linux的mongodb 要在conf 配置文件 添加以下

  ```shell
  bind_ip= 0.0.0.0 
  #因为bind_ip 默认 是127.0.0.1，只允许本地IP连接mongodb数据库，改成0.0.0.0 允许任何ip 连接
  ```

  

#### 数据库

- 服务器

  - 保存数据

  - **mongod**  命令启动服务器

    命令行   mongod 

    ````shell
    mongod --dbpath D:\...  --port 129# 将D盘某目录设置为数据库目录   指定129为数据库端口
    ````

    mongoDB默认 在 **27017端口**

- 客户端
  - 用来操作数据库
  - **mongo** 启动客户端

， 进入一个 mongo shell  ，也是一个ES shell 支持  js代码

### 一.三个重要概念

<img src="MongoDB.assets/image-20200804154707582.png" alt="image-20200804154707582" style="zoom:67%;" />

- mongoDB 中 数据库和集合  **不需要我们手动创建**

  **创建文档时**，文档所在集合/数据库不存在，**会自动创建**

### 二.基本指令

- show dbs/show databases 

  列出所有数据库

- use databaseName 

  切换到具体数据库

- db

  显示当前所在数据库名

- show collections

  列出当前数据库所有集合

### CRUD 操作

   ##### 1.插入，增加 文档

   - db.<collectionName>.insert(doc)   向集合插入一个或多个文档

   - db.<collectionName>.insertOne(doc)  单个

   - db.<collectionName>.insertMany(doc)    插入多个文档，必须传入数组

   ```shell
   db.stus.insert({name:"sunwukong",age:19}) ## 此时会创建test 数据库，stus 集合
   db.stus.insert([{name:"sunwukong",age:19},{name:"zhubajie",age:19}])
   db.stus.find()    ## 列出集合 内的文档
   ```

   当向集合插入文档时没有指定_id 属性，会自动添加 _ id 属性，作为**唯一标识**

   自己指定必须确保唯一性，

    使用 可在shell  用 ObjectId() 命令 生成

   #####  2.  查询

  更多查询方式见官方 [文档](https://docs.mongodb.com/manual/tutorial/query-documents/)

   - db.stus.find({<key>：<value>})   返回一个数组   **可以索引取值 [0]**

     查询**所有**符合条件的 文档，**不传参数 返回集合下的所有文档**

     - find().count()/length() 返回符合条件的个数

     ```shell
     db.stus.find({age:19})  
     db.stus.find({obj:{type:"test"}})  #多层嵌套
     db.stus.find({age:19})[0]
     db.stus.find({age:19}).count()
     ```

     - **查询嵌套的域** 

       ```shell
       db.inventory.find( { "obj.type": "test" } ) #查询 obj 字段下，type 字段为"test"的
       ```

   - db.stus,findOne({})    返回一个**文档对象**

     查询第一个符合条件的文档对象

     ```shell
     db.stus.findOne({age:20}).age
     ```

     

      #####  使用 Query Operator 查询操作符（SQL数据库中的where ）

| 等于       | {<key>:<value>}          | db.col.find({"by":"菜鸟教程"})     |
| ---------- | ------------------------ | ---------------------------------- |
| 小于       | `{<key>:{$lt:<value>}}`  | `db.col.find({"likes":{$lt:50}})`  |
| 小于或等于 | `{<key>:{$lte:<value>}}` | db.col.find({"likes":{$lte:50}})   |
| 大于       | `{<key>:{$gt:<value>}}`  | `db.col.find({"likes":{$gt:50}})`  |
| 大于或等于 | `{<key>:{$gte:<value>}}` | `db.col.find({"likes":{$gte:50}})` |
| 不等于     | `{<key>:{$ne:<value>}}`  | `db.col.find({"likes":{$ne:50}})`  |

find().pretty()  使得查询出来的数据在命令行中更加美观的显示

同时使用多个操作符

```shell
db.stus.find({age:{$gt:19,$lt:21}})
```

##### 支持正则表达式 

```shell
db.col.find({title:/教/})
# 查询 title 字段以"教"字开头的文档：

db.col.find({title:/^教/})
# 查询 titl e字段以"教"字结尾的文档：

#db.col.find({title:/教$/})
```

- 查询数组

  使用操作符

  { <array field>: { <operator1>: <value1>, ... } }

  ```shell
  db.inventory.find( { tags: ["red", "blank"] } ) #查询只包含“red”“blank” 的tags 数组,且顺序固定
  db.inventory.find( { tags: { $all: ["red", "blank"] } } ) #查询 包含red，blank 的，顺序不定
  db.inventory.find( { tags: "red" } ) #对于tags 是一个数组来说，查询包含 red的
  db.inventory.find( { numbers: { $gt: 25 } } )  #查询 包含大于25 数字的numbers 所在文档
  ```

  

##### 3. 修改

- db.collection.**update**(<filter>,<update> ,<options> )

  默认会使用新对象<update>**替换**旧对象，使用操作符$set可解决 

  **<update> 形式:**

  ```js
{
    <update operator>: { <field1>: <value1>, ... },
    <update operator>: { <field2>: <value2>, ... },
  }
  ```
  

**默认 只更新第一个匹配的文档**，行为和updateOne 一致

更新多个文档需要传入**options**参数

```shell
 db.stus.update({age:19},{$set:{height:500}},{multi:true}) # multi 表示 修改多个文档
```



- db.collection.updateOne(<filter>,<update> ,<options> )

- db.collection.updateMany(<filter>,<update> ,<options>  )

- db.collection.replaceOne(<filter>,<update> ,<options>  ) 替换

- [修改操作符（ update operators）](https://docs.mongodb.com/manual/reference/operator/update)

    常用

    - $set

      只设置 对应的属性

      文档没有的属性就新建

    - $unset

      移除某个属性

      ```shell
      db.inventory.updateOne(
         { item: "paper" },
         {
           $set: { "size.uom": "cm", status: "P" },#更新 size.uom， status
           $unset:{adress:""},  #移除address 属性
           $currentDate: { lastModified: true }
         }
      )
      ```

    - $inc

      自增操作符
    
    数组更新操作符
    
       - $push
    
         数组末尾追加元素
    
    -  $addToSet
    
       追加，同时保证**元素不重复**


##### 4.删除文档

- db.collection.remove(<filter> ,<options>)

  删除所有 符合条件的文档，

  只删除一个使用deleteOne或者 传入options参数   true /{justOne：true}

  ```shell
  db.collection.remove({}) # 删除所有文档，清空集合，但性能较差 不推荐
  do.collection.drop() #删除集合 ，推荐
  ```

  

- db.collection.deleteOne()

- db.collection.deleteMany()

- db.dropDatabase() 删除数据库



### 小知识点1

```shell
# 的属性值也可以是一个文档（与JSON一致）
# 这种文档内部的文档叫内嵌文档
db.users.update({username:"sunwukong"},{$set:{hobby:{cities:  ["beijing","shanghai","shenzhen"] , movies:["sanguo","hero"]}}});

# 如果要通过内嵌文档来对文档进行查询，此时属性名   必须使用引号 
db.users.find({'hobby.movies':"hero"});  # 表示 查询hobby.movies 数组包含"hero" 的文档

# 向tangseng中添加一个新的电影Interstellar
db.users.update({username:"tangseng"},{$push:{"hobby.movies":"Interstellar"}}); 
db.users.update({username:"tangseng"},{$addToSet:{"hobby.movies":"Interstellar"}}); # Set 元素不重复

# $each 一次添加多个
db.users.update({name:"xiaoming"},{$push:{"hobby.movies":{$each:["11","12","13"]}}})


# //17.向numbers中插入20000条数据 7.2s
for(let  i== ; i<20000 ; i++){
    db.numbers.insert({num:i}); #执行了20000 次
}
# 只调用一次
let arr = [];

for(let i=1 ; i<=20000 ; i++){
    arr.push({num:i});
}

db.numbers.insert(arr);
```

### 小知识点2

```shell
# 前十条文档
# limit(limit) 
db.numbers.find().limit(10)  #常用于  分页
# 11-20条
# skip(<offset>) 跳过offset 的数据
# skip((pagenum-1)*pagesize).limit(pagesize) 
db.numbers.find().skip(10).limit(10)
# skip 和limit 相对位置交换，结果一致，

const num=100;
> db.numbers.find({num}) # 支持ES语法

#   查询 sal 小于1000  或者 sal 大于2500     $or 操作符
db.emp.find({
    $or: [{
        sal: {
            $lt: 1000
        }
    }, {
        sal: {
            $gt: 2500
        }
    }]
})

```



### 文档之间的关系

1. 1对1

- 在MongoDB 中 ，通过内嵌文档 体现

2. 1对N/N对1

- 内嵌文档，数组
-  在文档属性内使用其他文档的_id

3. N对N

- 内嵌文档，数组
-  在文档属性内使用其他文档的_id 数组



### 小知识点3

```shell

# $or 操作符
# $or:[{},{},{}]
#  查询 sal 小于1000  或则 sal 大于2500
db.emp.find({$or:[{sal:{$lt:1000}},{sal:{$gt:2500}}]})

# 查询销售部员工
var depno = db.dept.findOne({
    dname: "销售部"
}).deptno

db.emp.find({
    depno
})

#33.为所有薪资低于1000的员工增加工资400元

```

### sort和投影

**查询文档时，默认时按照_id升序排序**

- sort( { age : -1 } ) 函数

  指定排序规则

  1:升序，-1降序

```
sort( { age : -1, posts: 1 } ) # 先按照 age 降序排序，age 相同的按照 posts 升序
```

skip，limit，sort 三者 无论相对位置，最后都是 sort->skpi->limit

- find 函数 的 投影

  fdb.collection.find(query, **projection**) ，可以传递第二个参数用来 设置结果的某些字段不显示

<field>: <1 or true>	显示
<field>: <0 or false>   不显示

 **_id 默认显示，** 



## Mongoose

​       mongoose 是一个让我们可以通过**Node来操作MongoDB的模块。**
​       Mongoose是一 个**对象文档模型( ODM)库**(把文档转换为js 对象，易于操作),它对Node原生的**MongoDB模块**进行了进-步的优化封装,并提供了更多的功能。
​      在大多数情况下,它被用来把结构化的模式应用到一一个MongoDB集合,**并提供了验证和类型转换**等好处

- 优点

  - 可以为文档创建一个**模式结构（Schema）**/或者叫做一种类似于SQL 数据库的约束

  - 可以对模型中的对象/文档进行**验证** 

  - 数据可以通过类型转换转换为对象模型 

  - 可以使用**中间件**来应用业务逻辑挂钩 

  - 比Node原生的MongoDB驱动更容易

- mongoose中为我们提供了几个新的对象 

  -  **Schema**(模式对象) 

  ​       Schema对象定义约束了数据库中的文档结构 

  - **Model** （对应MongoDB的 集合**collections**）

  ​       Model对象作为集合中的所有文档的表示，**相当于 MongoDB数据库中的集合collection**

  - **Document** 

  ​      Document表示集合中的具体**文档**，相当于集合中 的一个**具体的文档**

创建顺序   ：**Schema**- >**Model**->**Document**



### 使用

#### 安装

#### 引入

#### 连接

- **mongoose.connect 方法**

mongoose.connect('**mongodb**://ip:端口/数据库名')

```js
mongoose.connect('mongodb://localhost:27017/test'，{ useUnifiedTopology: true ,useNewUrlParser:true})

//注：如果linux/windows的mongodb 设置了用户验证，需要在连接时输入用户名密码
mongoose.connect('mongodb://username:pass@127.0.0.1/crud?authSource=admin',{ useUnifiedTopology: true ,useNewUrlParser:true});
//authSource=admin 参数规定 用于验证的用户来自 admin 数据库
```

端口号若是27017，可省

- 监听数据库连接状态

  mongoose 对象的connection 属性，可以绑定事件

    比如，可以通过**open**和**close **事件来监控连接 的打开和关闭。

- 断开连接

  mongoose.disconnect() 一般不使用

- 操作数据库

  - 创建 模式对象 Schema  ,修饰文档结构

    ```js
    const stuSchema=new mongoose.Schema({
        name:String,
        age:Number,
        address:String,
        gender:{
                type:Number,
                default:0
        }
    });
    ```

  - 创建Model  对象（*创建集合*）或者 Document 对象

    ```js
    //mongoose.model(modelName, schema)  
    //modelName =集合名  ，会被转换为复数
    const StuModel= mongoose.model('studs',stuSchema); //返回一个构造函数
    ```

  - 操作

    ```js
      //创建并插入文档
    StuModel.create({
            name:"baikujing",
            age:'100',
    },(err)=>{
            if(!err)
            {
                    console.log('插入成功');
            }
    })
    ```

mongoose 所有api 方法都返回 promise

### Schema

MongoBD 本身很灵活，不需要设计结构

但是**还是需要一定程度上** 的 字段**约束**，保证 数据添加的 正确性，

使用**Schema** 模式结构对象，对文档的属性 字段进行描述，约束，  这样mongoose 还可以帮助我们**进行验证**和**类型转换**

### Model

Model 类 对应 集合，通过Model 操作数据库，也就是db.<collection>操作数据库

mongoose.model('studs',stuSchema);方法返回一个 **构造函数**，**new 构造出的就是 Document 实例**

以下可以称作    **Model 类**的 **静态方法**，

#### 增

- Model.create(doc(s),[options],[callback])

  - doc(s):   **Array/Object** 

  - options: 传递给 中间件 **save（）**方法的参数

  - callback：（err,doc(s)）/(错误对象，插入的内容)

  - return :Promise

    mongose 绝大部分方法 返回Promise ，可以使用**then** ，或者 **await** 

#### 查

- Model.find(filter ,[projection] ,[options],[callback])

  - filter :查询条件

  - projection ：投影对象或字段**字符串，**决定结果要显示的字段

  - options: 查询选项，skip，limit，sort 等

  - **callback** ：（err,docs） **docs** 始终为数组

    **回调函数必传或者使用then（await ）接收返回数据，否则不会查询**
    
    ```js
    //projection 参数
    //1. 使用mongodb 的对象形式
    
    StuModel.find({age:1000},{name:true,_id:0}).then(docs=>{
            console.log(docs);
    })
    //2. 使用字符串
    StuModel.find({age:1000},'name age -_id').then(docs=>{
            console.log(docs);
    })// -_id  不显示_id
    
    //options 查询选项 参数
    StuModel.find({},'name age -_id',{skip:3,limit:3,sort:{age:-1}}).then(docs=>{
            console.log(docs);
    })
    
    
    // 使用 then 处理 promise
    StuModel.find({age:1000}).then(docs=>{
            console.log(docs);
  })
    ```
    
    

- Model.findOne(filter ,[projection] ,[options],[callback])

  查询第一个返祖filter 的**文档对象**，

  callback： (err,**doc**)   doc单个文档对象

  doc 是 **Model 构造方法 构造出的实例**

- Model.findByID(id,[projection] ,[options],[callback])

  callback： (err,**doc**)    **doc单个文档对象**、

#### 改

- Model.update(filter ,doc,[options],[callback])

  - options:  选项，multi 等

  - callback :( error, **updateWriteOpResult**) 

    **updateWriteOpResult**:原生 mongoDB 返回的操作结果
    
    **回调函数必传或者使用then（await ）接收返回数据，否则不会更新**

  ```js
  StuModel.update({name:'zhubajie'},{$set:{age:1000}},{multi:true},(err)=>{})
  
  ```

  **updateWriteOpResult**：

  属性

  - n:匹配到的个数
  - nModified:更改个数
  - ok:更新是否成功

- Model.updateMany(filter ,doc,[options],[callback])

- Model.updateOne(filter ,doc,[options],[callback])

- Model.replaceOne(filter ,doc,[options],[callback])

#### 删

- Model.remove(filter ,[options],[callback])

  - options

  - callback

     **回调函数必传或者使用then（await ）接收返回数据，否则不会更新**

    ```js
    StuModel.deleteOne({name:"666"},err=>{})
    ```

    

- Model.deleteOne(filter ,[options],[callback])

- Model.deleteMany(filter ,[options],[callback])

  

#### 其他

- Model.count(filter,[callback])

  统计 个数

  ```js
  // 统计所有个数
  StuModel.count({},(err,count)=>{
          console.log(count);
  })
  StuModel.countDocuments({},(err,count)=>{
          console.log(count);
  })
  ```

将在下一个版本移除，推荐使用countDocuments 方法代替  in v 5.927

### Document

Document 是Model 构造的 实例

````js
//创建 Document 实例
const stu=new StuModel({
        name:"小米",
        age:20
});

console.log(stu);
````

​		**实例方法**

- doc.save([options],callback)

  将文档保存到集合

  - callback :(err,**updateWriteOpResult**)

- doc.update(update,[options],**callback**)

  - update

  - callback : (err)

    **回调函数必传或者使用then（await ）接收返回数据，否则不会更新**

 将要弃用 ，推荐 document.updateOne/updateMany 代替  in  v 5.927

```js
// 创建一个 docuemnt 对象
const stu = new StuModel({
        name: "小米",
        age: 20
});


(async function () {
         await stu.save();
        StuModel.findOne({ name: "小米" }, async (err, doc) => {
                console.log(doc);
                let res;
                 doc.update({ $set: { age: 777 } });
                // console.log(res);
            
                //第二种方法
                doc.address = "武汉小米";
                res = await doc.save();
                // console.log(res);
            //删除
                res = await doc.remove();
                // console.log(res);
        })

})()
```



- doc.remove([callback])

- doc.get(feild)
- doc.set(feild,value)

- doc.toJSON([options])

  转换为JSON对象

  - [options](https://mongoosejs.com/docs/api/document.html#document_Document-toObject) 选项参数

- doc.toObject([options])

​     返回 **js 普通对象**，返回的对象  **没有Document 的实例属性和方法**

​        options 和toJSON方法一致

- doc.id属性 

   documents._id 的字符串形式，

  使用filter 进行查找时，_id可以传入字符串，而，**document 之间的比较**   需要使用  .id属性，进行字符串的比较，因为 **对象形式**的ObjectId()是一个引用，始终不相等，

### Mongoose 的模块化

抽离模块

- 连接模块

  专门用于和数据库进行连接

- 模型对象模块

  抽象出不同的Model 对象，并导出，在路由内调用，操作数据库

放置在不同文件夹