## socket.io

node模块，

面向实时的web应用，

基于**websocket**协议，

双向数据通信

**事件驱动**

socket.io 包含 服务端和客户端



### 服务端

实例：

```js
// **socket** 代表的是某一个与某一个客户端的ws连接
io.on('connection', function (socket) {
    console.log('a user connected');
    //使用socket 监听 事件
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
    // io.emit('chat message',666)
});

 socket.on('login', (name, callback) => {
        updateUser();
        callback();// 告诉 客户端在接收到响应之后执行callback
    });
```

**socket** 代表的是某一个与某一个客户端的ws连接

io 代表的是服务端的ws服务，

通过**io.emit** 会向 **所有**符合条件的客户端发送事件

### 客户端

实例：

```js
    const socket = io([url]);//创建 websocket 连接，默认在当前页面 主机 url
    console.log(socket);

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
 
//emit(event,args,callback)     callback 将会和服务器的响应一起执行,服务端需执行callback（）参数
socket.emit('login', this.name, () => {
                        this.$message.success('登录成功');

                        this.isLoged = true;
              });
```

