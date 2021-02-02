# Python学习笔记

[慕课Python课程](https://www.icourse163.org/course/BIT-268001?tid=1460270441#/info)学习 笔记

## 第一周

### 1.1 程序设计基本方法

### 1.2Python 开发环境配置

1. 安装 python

安装vscode 插件

### 1.3 温度转换

![](https://ftp.bmp.ovh/imgs/2020/10/255be7e6853c1b11.png)

```python
# 注释
TempStr = input("请输入带有富豪的温度值:")  #  用户输入字符串
if TempStr[-1] in ['F', 'f']:     # 判断结尾字符
    C = (eval(TempStr[0:-1])-32)/1.8  #eval 转换字符串为 数字
    print("转换后的温度是{:.2f}C".format(C))   # 格式化输出
elif TempStr[-1] in ['C', 'c']:
    F = 1.8*eval(TempStr[0:-1])+32
    print("转换后的温度是{:.2f}F".format(F))
else:
    print("输入格式错误")
    '''sadasddad块级注释''' 
```



#### 缩进

**Python 中 缩进是严格明确的 ，是语法的一部分**

是 python 中代表层次和包含的唯一手段

#### 注释

当行 #xxx

多行  '''sadasddad'''

#### 变量

命名规则

#### 数据类型

python 是一个弱类型语言：定义变量是不需要 声明变量的数据类型

- 字符串

  - 索引 ：

    str[0]

  - 切片 ：

    str[1:3] 第1，2 个字符，不包含第三个

    **str[0:-1] :不包含最后一个字符**

- 数字
  
- 列表：（数组？）

  - ['F','f']

  - **in**  判断一个元素是否一个列表中

    in ['F','f']

  #### 语句和函数

  ####  输入和输出

  1. input 函数

     <变量> =input("提示信息") **返回字符串**

  2. print(<字符串或变量>)

     - 普通用法

     - 格式化输出

       ```python
       print("转换后的温度是{:.2f}F".format(F)) 
       ```

       使用F 替换 {}内容，保留两位小数

     

     3.**eval 函数**

     **执行字符串参数内的语句**

     - 字符串转数字 ：eval("123") 返回 123
     - 执行代码

## 第二周

### 2.2 绘制蟒蛇

```python
import turtle  #导入 库
turtle.setup(650, 350, 200, 200)  #设置窗口
turtle.penup()            #抬起画笔
turtle.fd(-250)       # 倒退250px
turtle.pendown()     #放置画笔
turtle.pensize(25)  # 设置粗细
turtle.pencolor("purple")  #设置颜色
turtle.seth(-40)
for i in range(4):
    turtle.circle(40, 80)  #正向 80
    turtle.circle(-40,80)  #反向 80
turtle.circle(40,80/2)
turtle.fd(40)
turtle.circle(16,180)
turtle.fd(40*2/3)
turtle.done()       #等待 用户退出

```



### 2.3 turtle库的使用

图形绘制的标准库

1. 绘图窗体布局
   - setup**(width，height[,startx,starty]**) 设置窗体大小,起始位置  单位px   **非必须**

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201003171622498.png" style="zoom:67%;" />

2. 窗体空间坐标体系

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201003171918.png" style="zoom:67%;" />

**绝对坐标系，绘制过程中不会改变**，初始位置 在画布最中心

 - goto  到达某个坐标

3. 相对坐标，相对于海龟本身

- fd(d) 前进
- bk(d) 后退
- circle（r,angle）以左侧某位置的圆心 ，angle 度



4. 角度坐标体系

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201003172651.png" style="zoom:67%;" />

- seth(angle) angle ：绝对角度，改变方向

- right（angle）/left(angle)  ：向左右

  ```python
  import turtle
  turtle.left(45)
  turtle.fd(150)
  turtle.right(135)
  turtle.fd(300)
  turtle.left(135)
  turtle.fd(150)
  ```

5. RGB 色彩

### 2.4 语法元素

#### 1. 库引用，import

- import  xxx 

  库名.aaa  引用库内的变量

- **from turtle import ***

  直接使用，不用 库名.

可能会出现   **命名 冲突**的问题

- import 库名 as 别名

  重命名库

#### 2. 画笔控制

- penup/up () 画笔 抬起，不会痕迹
- pendown/pd() 
- pensize /width 设置画笔宽度
- pencolor(color) 
  - (color:string):字符串，小写
  - （r,g,b）RGB 小数值

#### 3. 运动控制 函数

- forward/fd（d） d<0 倒退
- circle（r,angle）以左手侧圆心，转angle 度
  - circle(100) 完整的
  - circle(-100,90)  右侧原型， 1/4 个圆心

#### 4. 方向控制函数

- setheading/seth （angle ）改编为某个绝对角度
- left/right(angle) 左右转angle



#### 5. 循环语句

- **for** 变量 in  **range** (参数)**：**

- range 函数
  - **range**（N） 产生 **0到 N-1** 的整数序列
  - range(M，N)  产生 **M到N -1**的整数序列

## 第三周

### 3.1 数字类型及操作

#### 1,整数类型

十，二，八，十六进制

- pow（a,b） 函数

#### 2.浮点数

不确定位数   精度问题（js也有）  和计算机的小数表示

- round(x,d) :四舍五入 ，保留d位小数， 用于浮点数之间的比较

#### 3.复数

和数学的复数意义一致

#### 4.数值运算操作符

x/y 结果可能产生 浮点数， 数据决定数据类型，**弱类型**

x//y :整数除，整数除商 10//3 为3 

混合运算， 生成最宽的类型，互相转换

#### 5.数值运算函数

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201004202755.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/Snipaste_2020-09-19_19-48-58.png" style="zoom:67%;" />

**直接调用**

**类型转换函数**

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/asdasdd.png" style="zoom:67%;" />

### 3.2天天向上

### 3.3 字符串类型和操作

#### 1.表示

- 一对单引号/双引号  表示 单行字符串

- 一对**三单引号/三双引号 表示多行**   

  '''xxx'

  ''

  python 不提供**多行注释**，但是不对三单引号 的字符串进行操作，**代替注释的作用**

  提供多种表示方法的作用：

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005192708.png" style="zoom:67%;" />

- 正向和反向索引

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005192831.png" style="zoom:67%;" />

- 索引和切片

  - [index]

  - [M:N]

    **高级用法：**[M:N:K]

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005193047.png" style="zoom:67%;" />

 逆序输出：**[::-1]** 

- 转移字符

#### 2.字符串操作符

- x+y: 连接
- s*n ：复制x次n
- a **in** b ：判断a是否是b的字串

#### 3.字符串处理函数

- len（s）：获取字符串函数

- str（v）：转换为字符串类型

  str([1,2])  :"[1,2]"

- chr(u) ：unicode->字符
- ord（c）：字符->unicode

print(x,end=""):end 输出结束字符串

#### 4.字符串处理方法

str.xxx

- str.lower()/str.upper()
- str.split(sep):分隔字符串
- str.join(iter):
- str.count(sub):返回字串的出现次数
- str.replace(old,new) :替换字串
- str.center(width[,fill]):居中和填充
- str.strip(chars):去除两侧的指定字符  （js中的str.trim()函数）

#### 5.字符串格式化

模板字符串.format()

- 槽

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005195815.png" style="zoom:67%;" />

- 格式控制

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005200259.png" style="zoom:67%;" />

### 3.4 time 库

处理时间的标准库

#### 1.时间获取

- time.time() 返回时间戳
- time.ctime() ：表示当前时间的字符串，可读
- time.gmtime() :返回struct_time,其他程序可用

#### 2.格式化

strtime（"格式",t） 方法

**strftime("%Y-%m-%d %H:%M:%S",time.gmtime())**

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/aaaa.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201005201617.png" style="zoom:67%;" />

**strptime(str,fomat)** 

表示时间的字符串 转化为时间

```python
import time
print(time.time())
print(time.ctime())
t=time.gmtime()
print(time.strftime("%Y-%m-%d %H:%M:%S",t))
t2=time.strptime("2020-10-05 12:20:57","%Y-%m-%d %H:%M:%S")
print(t2)
```

#### 3.程序计时

- 测量时间： time.perf_counter()返回CPU 级别的精准数值

  需要取差值

- 休眠

  time.sleep(s):s停滞时间，支持浮点

### 3.5 文本进度条

```python
import time
scale = 10  # 定义进度条的 总长度
print("执行开始".center(scale//2, "-"))  # 输出开始
start = time.perf_counter()
for i in range(scale+1):
    a = '*'*i  # i个*
    b = '.'*(scale-i)
    rate = (i/scale)*100  # 当前的百分比进度
    dur = time.perf_counter()-start #计算耗时
    # 保证每一次输出不换行，切位置回到最开始
    print("\r{:^3.0f}% {:.2f}s [{}->{}]".format(rate, dur, a, b), end="")
    time.sleep(0.2)
print("\n"+"执行结束".center(scale//2, "-"))  # 输出结束 提示

```

## 第4周

### 4.1 分支结构

1. 单分支

2. 二分支

   - **紧凑形式**

     <表达式1> **if**<条件> **else**<表达式2>  ：满足条件 则返回表达式1 ，**相当于js和其他语言中的三元表达式**（pyhton 不支持三元表达式）

     **js和其他语言的三元表达式** ：<条件>**？**<表达式1>**：**<表达式2>，

     

3. 多分支

4. 条件判断和组合

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201006142933.png" style="zoom:67%;" />

代替其他语言的 &&，||，！

5. 异常处理

   - 基础

   **try**:

    xxx

   **except**  **<异常类型>**:

   xxx

   - 高级

     配合 else：

     finally:

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/xxxxx.png" style="zoom:67%;" />

### 4.2 BMI

   ```python
height, weight = eval(input('请输入身高，体重，[逗号分隔]'))  # 逗号分隔，分别接收身高， 体重
bmi = weight/pow(height, 2)
print("BMi数值为:{:.2f}".format(bmi))
who, nat = '', ''  # 同时初始化
if bmi < 18.5:
    who, nat = '偏瘦', '偏瘦'  # 同时赋值两个 变量
elif bmi < 24:
    who, nat = '正常', '正常'
elif bmi < 25:
    who, nat = '正常', '偏胖'
elif bmi < 28:
    who, nat = '偏胖', '偏胖'
elif bmi < 30:
    who, nat = '偏胖', '肥胖'
else:
    who, nat = '肥胖', '肥胖'
print('BMI指标为：国际:{},国内:{}'.format(who,nat))

   ```

### 4.3 循环结构

- 1. 遍历循环

     - 计数循环

     for  <循环变量> in <遍历结构>

     for i in range（N） 循环N次

     for i in range(M,N,K) **从M，到N-1, 步长 K**

     - 字符串循环遍历

       for c in ”12314“

     - 列表循环

       for i in [123,"py",456]

     - 文件遍历

       for line in file

  2. 无线循环 

     while

  3. 循环控制保留字

     break，continue

  4. **高级用法**：**循环和else**

     当循环没有**被break 语句退出时**，执行

     和异常处理 else 一致

### 4.4 random 库的使用

使用随机数的标准库

- 基本随机数函数

  - random.seed() 初始化给定的种子，默认是系统时间
  - random.ramdom()  产生0.0 到1，0）的小数

- 扩展函数

  <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201006153934.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201006154033395.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201006154056388.png" style="zoom:67%;" />



## 第5周

### 5.1 函数的定义与使用

1. 定义

2. 使用

3. 参数

   - 可选参数

     1. - 

        <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201007154409.png" style="zoom:67%;" />

     必传参数 要在可选之前

     ```python
     def fun(a,m=1):
         printf(a,b)
         
     fun(1)
     ```

   - 可变参数

     <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201007154825.png" style="zoom:67%;" />

     b 为可变参数的列表，（js中的 剩余参数）

   - 参数传递

     - 按照位置对应

     - 名称指定

       fact(n=2,m=4)

4. 返回值

   多个返回值

   ```python
   
   def fun():
      return [1,2,3]#返回列表 [1,2,3]
   def fun1():
       return 1,2,3#返回元组 (1,2,3)
   ```

5. **局部和全局变量**

   - 在函数体中使用**global** 表示引用全局的变量

     **要在函数内部使用全局变量**，**必须使用global 声明，**

     ```python
     c = 10
     def test():
         global c  #必须声明是外部变量， 否则要报错
         c=c+1
     ```

   - 局部变量为**组合数据类型且函数内未创建**，等同于全局变量，无需声明,使用指针

     ```python
     list=['F','f']
     def fun(c):
         list.append(c)
     fun('C')
     print(list)#['F', 'f', 'C']
     ```

     

6. lamba 函数

   匿名函数，（js中的箭头函数功能一直，但箭头函数功能更多，支持函数体等）

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201007160812.png" style="zoom:67%;" />

只能使用表达式

**用作特定函数，和方法的参数**

一般不使用

### 5.2 七段数码管

```python
import turtle
import time
#绘制段与段之间的间隙
def drawGap():
    turtle.penup()
    turtle.fd(5)
# 绘制单段数码管的函数
def drawLine(draw=True):
    drawGap()
    turtle.pendown() if draw else turtle.penup()
    turtle.fd(40)
    drawGap()
    turtle.right(90) #画完一段后右转 90度

#绘制对应数字的 数码管
def drawDigit(digit):
    drawLine() if digit in [2, 3, 4, 5, 6, 8, 9] else drawLine(False)
    drawLine() if digit in [0,1,3,4,5,6,7,8,9] else drawLine(False)
    drawLine() if digit in [0,2,3,5,6,8,9] else drawLine(False)
    drawLine() if digit in [0,2,6,8] else drawLine(False)
    turtle.left(90)
    drawLine() if digit in [0,4,5,6,8,9] else drawLine(False)
    drawLine() if digit in [0,2,3,5,6,7,8,9] else drawLine(False)
    drawLine() if digit in [0,1,2,3,4,7,8,9] else drawLine(False)
    turtle.left(180)
    turtle.penup()
    turtle.fd(20)

def drawDate(date):
    for i in date:
        drawDigit(eval(i))

def main():
    turtle.setup(800,350,200,200)
    turtle.penup()
    turtle.fd(-300)
    turtle.pensize(5)
    drawDate(time.strftime('%Y%m%d',time.gmtime()))
    turtle.hideturtle()
    turtle.done()

main()
```

### 5.3 代码复用和递归

1. 代码复用和模块化

### 5.4 PyInstaller 模块

1. 安装

   pip install  PyInstaller

2. 使用

3. 

### 5.5 科赫雪花

## 第6周 组合类型

### 6.1集合数据类型

1. 定义

   多个元素的无序组合，元素之间**唯一，不重复** ， 类型可以不一致，类似其他 语言中中的Set

python 的集合，**要求元素是不可变元素**

用**{,x,x,x,x}**表示

或者set()函数生成，定义空集合必须使用set()函数

```python
# 无序，唯一 
A={'python',123,'python',123} #{'python', 123}
print(A)
B=set('pypy123')
print(B) #{'2', 'p', '1', 'y', '3'}
```

2. 集合的操作

   符合数学中的相关运算

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201008150756.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201008150940.png" style="zoom:67%;" />

3. 集合的方法

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201008151613.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201008151633.png" style="zoom:67%;" />

4. 应用场景

   - 包含关系比较

     "x" in {"x",123}

   - **数据去重**

list-》set-》list

### 6.2 序列类型

1. 定义

   有序，类型可以不一致

   一种基类

   派生类型：字符串，元组，列表

   - 序号的定义

   正序，反序

2. 操作

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/20201008152737.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008153109403.png" style="zoom:67%;" />

3. 元组类型

   一种序列类型，一旦**定义不可修改**

   使用（）或者tuple()创建 ，逗号分隔

   小括号 可以省略，

   函数返回多个变量，其实是只返回一个元组，

   可以用多个逗号分隔的变量对元组进行解析（js的解构）

   ```python
   C=1,2,3,4
   print(C)
   
   def fun1():
       return 1, 2, 3 #返回一个元组
   
   ```

   

4. 列表类型

   序列类型的扩展，定义后可以修改，有序

   使用[]或者list()函数创建

   <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008155809817.png" style="zoom:67%;" />

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008160306262.png" style="zoom:67%;" />****

ls.append

ls.insert

del ls[i]

ls.index(x)

x in ls

```python
l1=[1,2,3,4]
l1[1:2]=['a','b','c']
print(l1)

l1.append(6) #添加 6
l1+=[0,0,0,0]#添加4个0

del l1[1]
del l1[1:4]
l1.index(0)
```

5. 应用场景

### 6.3 基本统计值

```python
# 输入数字
def getNumbers():
    nums = []
    numInput = input("请输入数字，单独的回车退出输入")
    while numInput != '':
        nums.append(eval(numInput))
        numInput = input("请输入数字，单独的回车退出输入")
    return nums
# 计算平均值


def getAve(numbers):
    ave = 0
    for num in numbers:
        ave += num
    return ave/len(numbers)

# 计算方差


def dev(numbers, ave):
    dev = 0
    for num in numbers:
        dev += (num-ave)**2
    return pow(dev/(len(numbers)-1), 0.5)

# 计算中位数


def medium(numbers):
    sorted(numbers)
    length = len(numbers)
    if length % 2 == 0:
        med = (numbers[length//2-1] + numbers[length//2])/2
    else:
        med = numbers[length//2]
    return med


def main():
    numbers=getNumbers()
    ave=getAve(numbers)
    print("平均值:{},方差:{:.2},中位数:{}.".format(ave, dev(numbers,ave),medium(numbers)))

main()
```

### 6.4 字典类型

1. 定义

   映射：键值的对应

   字典是 键值对的集合，

   使用 {}或者dist（）创建  **，{}：空字典类型**     （类似js 对象）

   键只能是不可变类型，字符串等

   使用[键名]得到值

   ```python
   d={'China':'北京'}
   print(d)
   ```

   

2. 操作

<img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008165024299.png" style="zoom:67%;" />

```python
A={} 
A['China']=666
A['ltt']=666

A[2]=5
'C' in A
len(A)
print(A)
A.clear()
print(A)
```

3. 应用场景

   表达键值对数据



### 6.5 jiaba 库

中文分词 第三方库

分词:获取每一个单词

原理：利用一个词库，按照组合概率

1. 安装

   pip Install jieba

2. 使用

   三种模式

   - 精确模式：把文本切分开，不存在冗余单词

   - 全模式：把所有可能的词语都扫描出来，有冗余

   - 搜索引擎模式：在精确模式上，对长词划分

     <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008171617400.png" style="zoom:67%;" />
     
     <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201008171631649.png" style="zoom:67%;" />



**关键：jieba.lcut(s)**

### 6.6 文本词频统计

```python
import jieba
excludes = {"将军","却说","荆州","二人","不可","不能","如此"}
txt = open("threekingdoms.txt", "r", encoding='utf-8').read()
words  = jieba.lcut(txt)
counts = {}
for word in words:
    if len(word) == 1:
        continue  # 跳过单个汉字
    elif word == "诸葛亮" or word == "孔明曰": #处理 人物的不同称谓
        rword = "孔明"
    elif word == "关公" or word == "云长":
        rword = "关羽"
    elif word == "玄德" or word == "玄德曰":
        rword = "刘备"
    elif word == "孟德" or word == "丞相":
        rword = "曹操"
    else:
        rword = word
    counts[rword] = counts.get(rword,0) + 1
for word in excludes:  #排除特殊
    del counts[word]
items = list(counts.items())
items.sort(key=lambda x:x[1], reverse=True) 
for i in range(10):  #取前10名
    word, count = items[i]
    print ("{0:<10}{1:>5}".format(word, count)) #对齐 输出
```

## 第7周 文件和数据可视化

### 7.1 文件的使用

1. 文件类型

   文本文件vs二进制文件

2. 文件打开和关闭

   变量=open(<文件名，路径>，<打开模式>)

   - 文件路径

   - 打开模式

     <img src="https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20201009144942990.png" alt="image-20201009144942990" style="zoom: 50%;" />

3. 文件读取

   <img src="https://ftp.bmp.ovh/imgs/2020/10/1ae52d7820d13551.png" alt="image-20201009145754151" style="zoom:50%;" /><img src="https://ftp.bmp.ovh/imgs/2020/10/90d73ec169eaa5c5.png" alt="image-20201009145806681" style="zoom:67%;" />

   <img src="https://ftp.bmp.ovh/imgs/2020/10/ca3f0787fc820e99.png" alt="image-20201009145841090" style="zoom:50%;" />

   - 一次读入

   - 逐步读入

   - 逐行读取

     ```python
     f1=open('text.txt','r')
     text=f1.read()
     print(text)
     f1.close()
     
     
     f2=open('text.txt')
     lines=f2.readlines()
     for line in lines: 
         print(line)
     f2.close()
     
     # 逐行读取 处理
     f3=open('text.txt')
     for line in f3:  #!!!! 逐行读取并处理
         print(line)
     
     f3.close() #
     ```

4. 文件写入

<img src="https://ftp.bmp.ovh/imgs/2020/10/a9a7d83638188e3c.png" alt="image-20201009150909315" style="zoom:50%;" /><img src="https://ftp.bmp.ovh/imgs/2020/10/9c170bc4313aa081.png" alt="image-20201009151016828" style="zoom:67%;" />

<img src="https://ftp.bmp.ovh/imgs/2020/10/9c170bc4313aa081.png" alt="image-20201009151016828" style="zoom:50%;" />

```python

# 文件写入
f4=open('text.txt','w+')
ls=['中国','法国','美国']
f4.writelines(ls)
f4.seek(0) #此时必须吧文件指针重新定位到 文件开头
for line in f4:
    print(line)

f4.close()
```

### 7.2 自动轨迹设计

```python
import turtle as t
t.title('自动轨迹绘制')
t.setup(800, 600, 0, 0)
t.pencolor("red")
t.pensize(5)
# 数据读取
datals = []
f = open("data.txt")
for line in f:
    line = line.replace("\n", "")
    datals.append(list(map(eval, line.split(","))))  # datails 是一个二维列表
f.close()
# 自动绘制
## 改进的二维数组遍历
for datal in datals:
    t.pencolor(datal[3], datal[4], datal[5])
    t.fd(datal[0])
    if datal[1]:
        t.right(datal[2])
    else:
        t.left(datal[2])
t.done()  ## 窗口停留
```

### 7.3 一维数据 的格式化

1.  维度
2. 表示
   - 有序-列表
   - 无序-集合
3. 存储
4. 处理

### 7.4 二维数据的格式化

1. 表示

   二维列表

2. CSV

   逗号分隔的存储格式， .csv

   

### 7.5 wordcloud 库

词云展示的第三方库

1. 安装

2. 使用

   方法：

<img src="https://ftp.bmp.ovh/imgs/2020/10/8828777c730f8e08.png" alt="image-20201009165720358" style="zoom: 33%;" />

​		步骤：

<img src="Python.assets/image-20201009165743899.png" alt="image-20201009165743899" style="zoom:33%;" />

​	配置参数：

### 7.6 政府工作报告 词云





## 第8周 程序设计方法学

### 8.1 体育竞技分析

- 自顶向下，自底向上

<img src="https://ftp.bmp.ovh/imgs/2020/10/321e8428d32c47dd.png" alt="image-20201010202520176" style="zoom:67%;" />

```python
import random
# 打印介绍信息 函数
def printIntro():
    print('这个程序模拟两个选手A和B的某种竞技比赛')
    print('程序运行需要A和B的能力值（以0到1之间的小数表示）')

# 获取用户输入
def getInputs():
    probA=eval(input('请输入选手A的能力值'))
    probB=eval(input('请输入选手B的能力值'))
    n=eval(input('请输入比赛场数'))
    return probA,probB,n

# 重复模拟进行n 次比赛
def simNGames(n,probA,probB):
    winsA,winsB=0,0 # 初始化
    for i in range(n):
        scoreA,scoreB= simOneGame(probA,probB) #模拟进行一次比赛
        if scoreA >scoreB:
            winsA+=1
        elif scoreB>scoreA :
            winsB+=1
    
    return winsA,winsB

#模拟一次比赛
def simOneGame(probA,probB):
    scoreA,scoreB=0,0
    serving='A' #A先发球
    while not (scoreA==15 or scoreB==15) :#结束条件
        if serving =='A':
            if random.random() <probA:
                scoreA+=1
            else:
               serving='B'
        else:
            if random.random() <probB:
                scoreB+=1
            else:
                serving='A'
    return scoreA,scoreB

def printSummary(winsA, winsB):
    n = winsA + winsB
    print("竞技分析开始，共模拟{}场比赛".format(n))
    print("选手A获胜{}场比赛，占比{:0.1%}".format(winsA, winsA/n))
    print("选手B获胜{}场比赛，占比{:0.1%}".format(winsB, winsB/n))


def main():
    printIntro()
    probA, probB, n = getInputs()
    winsA, winsB = simNGames(n, probA, probB)
    printSummary(winsA, winsB)


main()
```

### 8.2

### 8.3 第三方库的安装

1. PyPI 网站

2. 安装

   - pip 安装

     - pip install xxx
     - pip install -U 更新
     - pip download xxx 
     - pip search **keyword**
     - pip list
     - 

   - 集成安装

     Anaconda

   - 文件环境

### 8.4 os库的使用

1. 路径操作 **os.path**

   <img src="https://ftp.bmp.ovh/imgs/2020/10/807ce041d2b38e6d.png" alt="image-20201010212547409" style="zoom:67%;" /><img src="https://ftp.bmp.ovh/imgs/2020/10/96fc9fe3afaa00c1.png" alt="image-20201010212622302" style="zoom:67%;" />

   <img src="https://ftp.bmp.ovh/imgs/2020/10/96fc9fe3afaa00c1.png" alt="image-20201010212622302" style="zoom:67%;" />

   <img src="https://ftp.bmp.ovh/imgs/2020/10/d63d1fb2658503ab.png" alt="image-20201010212711827" style="zoom:67%;" />

   <img src="https://ftp.bmp.ovh/imgs/2020/10/03b4c658478a8509.png" alt="image-20201010212730775" style="zoom:67%;" />

   <img src="https://ftp.bmp.ovh/imgs/2020/10/b440c5b29f9c9047.png" alt="image-20201010212740435" style="zoom:67%;" />

2. 进程管理  os.system(command)

   

3. 环境参数

   <img src="https://ftp.bmp.ovh/imgs/2020/10/1ff6ad7df975c915.png" alt="image-20201010213138990" style="zoom:67%;" />![image-20201010213152310](https://ftp.bmp.ovh/imgs/2020/10/118a425e1b42310f.png)

<img src="https://ftp.bmp.ovh/imgs/2020/10/1ff6ad7df975c915.png" alt="image-20201010213138990" style="zoom:67%;" />![image-20201010213152310](https://ftp.bmp.ovh/imgs/2020/10/118a425e1b42310f.png)<img src="https://ftp.bmp.ovh/imgs/2020/10/b647ca56c57178f8.png" alt="image-20201010213205119" style="zoom: 67%;" />



### 8.5 第三方库安装脚本

```python
import os
libs = {"numpy","matplotlib","pillow","sklearn","requests",\
        "jieba","beautifulsoup4","wheel","networkx","sympy",\
        "pyinstaller","django","flask","werobot","pyqt5",\
        "pandas","pyopengl","pypdf2","docopt","pygame"}
try:
    for lib in libs:
        os.system("pip3 install "+lib)
    print("Successful")        
except:
```

## 第9周 计算生态

### 9.1 从数据处理到人工智能

1. 数据分析

   Numpy-表达N维数组

   基于C语言

   Pandas-

   Scipt

2. 数据可视化

   Matplotlib

   Seaborn：统计类

   Mayavi

3. 文本处理

   PyPDF2

   NLTK：自然语言文本处理

4. 机器学习

   TensorFlow

### 9.2 霍兰德人格分析

### 9.3 Web解析到网络空间

1. 网络爬虫

   requests

   scrapy 框架

2. web 信息提取

   beautiful Soup ：解析 html

   Re 

3. Web后端

   Django

   Pyramid

   Flask 

4. 网络应用开发

   aip

   MyQR

### 9.5 从人机交互到艺术技术

1. 图像用户界面

   PyQt5

   wxPython

2. 游戏开发

3. 虚拟现实

   VR zero

4. 图形艺术

### 9.6 玫瑰花

<Vssue />