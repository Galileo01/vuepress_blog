(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{421:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"本笔记主要记录学习微信小程序原生（wxml，wxss-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本笔记主要记录学习微信小程序原生（wxml，wxss-）"}},[t._v("#")]),t._v(" 本笔记主要记录学习微信小程序原生（wxml，wxss ）")]),t._v(" "),s("p",[t._v("--- 本笔记旨在了解学习下原生")]),t._v(" "),s("p",[s("strong",[t._v("学后总结：")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("小程序并没有DOM的概念")]),t._v("，没有给开发人员提供原生的操作也页面的方法，只能通过渲染层和逻辑层的数据绑定来实现，这给开发带来一定的局限性，")])]),t._v(" "),s("li",[s("p",[t._v("类MVVM框架的语法")]),t._v(" "),s("p",[t._v("小程序使用了类Vue（或者说MVVM框架）的语法，很多地方相似，却又有很大不同，很多地方并没有Vue好用，例如，事件处理（参数传递方面），数据绑定，组件和页面之间的关系等，相比与Vue，小程序的很多地方显得很麻烦")])]),t._v(" "),s("li",[s("p",[t._v("运行环境和传统web的差异")]),t._v(" "),s("p",[t._v("在实际的开发过程中，我发现对于wxml和wxss，传统web的很多属性并不具备，像伪类和伪元素选择器，并不能很好的支持")])])]),t._v(" "),s("h3",{attrs:{id:"一-设计规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-设计规范"}},[t._v("#")]),t._v(" 一.设计规范")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("友好：重点突出  、流程清楚")])]),t._v(" "),s("li",[s("p",[t._v("清晰：导航明确、减少等待、"),s("strong",[t._v("异常可控/反馈")])])]),t._v(" "),s("li",[s("p",[t._v("便捷：减少输入、避免误操作、操作流畅")])]),t._v(" "),s("li",[s("p",[t._v("统一：视觉统一")])])]),t._v(" "),s("h3",{attrs:{id:"二-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-目录结构"}},[t._v("#")]),t._v(" 二.目录结构")]),t._v(" "),s("p",[t._v("小程序包含一个描述整体程序的 "),s("code",[t._v("app")]),t._v(" 和多个描述各自页面的 "),s("code",[t._v("page")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200712134137432.png",alt:"image-20200712134137432"}})]),t._v(" "),s("ul",[s("li",[t._v("一个小程序页面由四个文件组成，分别是：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200712134158574.png",alt:"image-20200712134158574"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("小程序配置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("app.json 配置文件")]),t._v(" "),s("p",[t._v("必须配置 pages 属性：表示页面路径的列表")]),t._v(" "),s("p",[t._v("每个页面的json 文件不能为空")])]),t._v(" "),s("li",[s("p",[t._v("某个页面.js")]),t._v(" "),s("p",[t._v("每个页面的 js文件 要用 Page（{}）注册页面")])])])])]),t._v(" "),s("h3",{attrs:{id:"三-view，text，image-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-view，text，image-组件"}},[t._v("#")]),t._v(" 三.View，text，image 组件")]),t._v(" "),s("p",[t._v("text ：容纳文本，只能容纳纯文本，其他组件会被忽略")]),t._v(" "),s("p",[t._v("iamge")]),t._v(" "),s("p",[t._v("View：类型div 的容器元素")]),t._v(" "),s("p",[s("strong",[t._v("知识点：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("wxml中 元素和组件概念一致")])]),t._v(" "),s("li",[s("p",[t._v("wxml 中所有的元素都是闭合的，没有自闭和的组件")])])]),t._v(" "),s("h3",{attrs:{id:"四-navigator-组件-导航页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-navigator-组件-导航页面"}},[t._v("#")]),t._v(" 四.navigator 组件 导航页面")]),t._v(" "),s("p",[t._v("类似于a标签")]),t._v(" "),s("p",[s("strong",[t._v("url 属性")]),t._v("指向的外部链接或内部页面路径")]),t._v(" "),s("p",[s("strong",[t._v("open-type 属性")]),t._v("：修饰 链接的跳转行为（默认navigator，可返回）")]),t._v(" "),s("p",[t._v("设置为redirect 将不能返回，重定向路由")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("hover-class 属性")]),t._v("： 指定触摸按住的类名，")]),t._v(" "),s("p",[t._v("生效原理就是"),s("span",{staticStyle:{color:"red"}},[t._v("覆盖 原有的class")]),t._v(" ，注意css权重问题")]),t._v(" "),s("p",[s("strong",[t._v("注意事项")])]),t._v(" "),s("p",[t._v("默认是行级元素")]),t._v(" "),s("h3",{attrs:{id:"五-配置tabbar-全局底部标签栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-配置tabbar-全局底部标签栏"}},[t._v("#")]),t._v(" 五.配置tabBar (全局底部标签栏)")]),t._v(" "),s("p",[t._v("在全局配置文件app.json")]),t._v(" "),s("p",[t._v("tabBar下的l"),s("strong",[t._v("ist 属性")]),t._v("（一个对象数组）")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabBar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"每周推荐"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagePath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/weekly/weekly"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iconPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/images/home.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selectedIconPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/images/home_active.png"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"关于"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagePath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/about/about"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iconPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/images/about.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selectedIconPath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/images/about_active.png"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果使用tabBar ，那么navigator 的"),s("strong",[t._v("open-type")]),t._v(" 属性就要改为 "),s("strong",[t._v("switchTab")])]),t._v(" "),s("p",[t._v("表示完成两个动作：")]),t._v(" "),s("ol",[s("li",[t._v("路径和页面的切换")]),t._v(" "),s("li",[t._v("底部tabBar 的切换")])]),t._v(" "),s("h3",{attrs:{id:"六-全局导航栏的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六-全局导航栏的配置"}},[t._v("#")]),t._v(" 六.全局导航栏的配置")]),t._v(" "),s("p",[t._v("app.json 中配置")]),t._v(" "),s("p",[t._v("window 属性 全局窗口属性")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTextStyle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarBackgroundColor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTitleText"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"校园猫猫图鉴"')]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//页面的默认导航栏 文字")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"七-数据绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七-数据绑定"}},[t._v("#")]),t._v(" 七.数据绑定")]),t._v(" "),s("p",[t._v("类似于Vue（MVVM）")]),t._v(" "),s("p",[t._v("在Page()注册页面传入的参数对象中")]),t._v(" "),s("p",[t._v("data 上声明，")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("在wxml 中所有的 引用 必须使用，包括指令mustache 语法（"+t._s(t.name)+"）进行引用,")])]),t._v(" "),s("h3",{attrs:{id:"_8-小程序的运行环境和基本架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-小程序的运行环境和基本架构"}},[t._v("#")]),t._v(" 8.小程序的运行环境和基本架构")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("运行环境")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200712174203345.png",alt:"image-20200712174203345"}})]),t._v(" "),s("li",[s("p",[t._v("基本架构：视图层和逻辑层")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200712174133208.png",alt:"image-20200712174133208"}})]),t._v(" "),s("p",[t._v("wxml+wxss:渲染层 view")]),t._v(" "),s("p",[t._v("js：逻辑层 model")]),t._v(" "),s("p",[t._v("页面的webviewId属性记录页面所在的渲染层进程id")]),t._v(" "),s("h3",{attrs:{id:"八-条件渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八-条件渲染"}},[t._v("#")]),t._v(" 八.条件渲染")]),t._v(" "),s("p",[t._v('wx:if="'+t._s(t.isshow)+'"')]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{isRecommend}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("强烈推荐"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hidden")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{isRecommend}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("强烈推荐"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意使用插值语法")])]),t._v(" "),s("p",[t._v("hidden 和wx:if 区别 和v-if和v-show 的区别一致")]),t._v(" "),s("h3",{attrs:{id:"九-列表渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九-列表渲染"}},[t._v("#")]),t._v(" 九.列表渲染")]),t._v(" "),s("p",[t._v('wx:for="{{}}"')]),t._v(" "),s("p",[t._v("内置规定的item，index 变量，表示当前的数组项和下标")]),t._v(" "),s("h3",{attrs:{id:"十-swiper-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十-swiper-组件"}},[t._v("#")]),t._v(" 十.swiper 组件")]),t._v(" "),s("p",[t._v("swiper 组件的属性：")]),t._v(" "),s("p",[t._v("indicator-dots 属性：表示是否显示指示器")]),t._v(" "),s("p",[t._v("previous-margin：设置前一个 item露出宽度，")]),t._v(" "),s("p",[t._v("next-margin :设置后一个item 露出宽度")]),t._v(" "),s("p",[t._v("配合子元素，swiper-item")]),t._v(" "),s("p",[t._v("设置swiper 的大小")]),t._v(" "),s("h3",{attrs:{id:"十一-声明周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十一-声明周期函数"}},[t._v("#")]),t._v(" 十一.声明周期函数")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("不能在声明 data 上的状态时，引用 data 对象上的其他变量")]),t._v(" ,必须在页面的某个"),s("strong",[t._v("生命周期")]),t._v("中对它赋值，（和Vue的区别在此）")]),t._v(" "),s("p",[t._v("在onLoad 函数中 使用"),s("strong",[t._v("this.setData")]),t._v(" 对data 上的状态赋值")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("生命周期函数：")]),t._v(" onLoad(query)")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onLoad-Object-query",target:"_blank",rel:"noopener noreferrer"}},[t._v("onLoad"),s("OutboundLink")],1)]),t._v(" "),s("th",[t._v("function")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("生命周期回调—监听页面加载")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShow",target:"_blank",rel:"noopener noreferrer"}},[t._v("onShow"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td",[s("strong",[t._v("query:打开当前页面路径中的参数")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("生命周期回调—监听页面显示")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onReady",target:"_blank",rel:"noopener noreferrer"}},[t._v("onReady"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("生命周期回调—监听页面初次渲染完成， "),s("strong",[t._v("可以开始交互")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onHide",target:"_blank",rel:"noopener noreferrer"}},[t._v("onHide"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("生命周期回调—监听页面隐藏，"),s("strong",[t._v("路由切换")])])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onUnload",target:"_blank",rel:"noopener noreferrer"}},[t._v("onUnload"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("生命周期回调—监听页面卸载，"),s("strong",[t._v("路由重定向，原页面会被关闭写在")])])])])]),t._v(" "),s("p",[t._v("一个页面加载的 触发顺序：   onLoad->onShow->onReady")]),t._v(" "),s("p",[t._v("通过this.data.xxx使用状态")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("使用setData 函数")]),t._v(" 对状态更新，新增状态")])]),t._v(" "),s("p",[t._v("Page.prototype.setData(Object data, Function callback)")]),t._v(" "),s("p",[t._v("Object 以 key: value 的形式表示，"),s("strong",[t._v("将 this.data 中的 key 对应的值改变成 value")])]),t._v(" "),s("p",[s("code",[t._v("setData")]),t._v(" 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 "),s("code",[t._v("this.data")]),t._v(" 的值（同步）")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("同步的更新视图层和逻辑层，只能用setData 方法对状态进行")])]),t._v(" "),s("p",[s("strong",[t._v("直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致")])]),t._v(" "),s("p",[t._v("1.局部更新状态 ：array[2].message，a.b.c.d")]),t._v(" "),s("p",[t._v("2.新增状态")]),t._v(" "),s("p",[t._v("小程序中视图层的绑定的数据更新不会反应到逻辑层的状态，"),s("strong",[t._v("即数据绑定默认是单向的")])]),t._v(" "),s("h3",{attrs:{id:"十二：事件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十二：事件机制"}},[t._v("#")]),t._v(" 十二：事件机制")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("bindEventName  和catchEventName=“fun”  绑定")]),t._v(" "),s("p",[s("strong",[t._v("区别:")])]),t._v(" "),s("p",[t._v("catchxxx 绑*定的事件不会向上冒泡，*而bindxxx 绑定的事件会正常冒泡")])]),t._v(" "),s("li",[s("p",[t._v("event对象")]),t._v(" "),s("p",[t._v("属性")]),t._v(" "),s("p",[t._v("type:事件类型")]),t._v(" "),s("p",[t._v("currentTarget:事件处理函数的所在的元素")]),t._v(" "),s("p",[s("strong",[t._v("target:真正触发事件的元素")])]),t._v(" "),s("p",[t._v("touches：包含事件触发的 位置信息")])])]),t._v(" "),s("h3",{attrs:{id:"十三：dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十三：dataset"}},[t._v("#")]),t._v(" 十三：dataset")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("编程式的页面 跳转")]),t._v(" "),s("p",[t._v("wx.navigateTo(Obj) /redirectTo(obj)/switchTab({obj)")])]),t._v(" "),s("li",[s("p",[t._v("路径参数")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("传递：detail?id=77  包裹在url，进行query传递")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/pages/detail/detail?id=77")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("获取：生命周期函数的"),s("strong",[t._v("参数获取")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("dataset")]),t._v(" 组件的自定义属性 "),s("strong",[t._v("用于给事件处理函数的参数传递")])])])]),t._v(" "),s("p",[t._v("组件上 :data-xxx (驼峰)的属性；事件触发时存储到组件的dataset 属性上，")]),t._v(" "),s("p",[t._v("获取事件对象event.currentTarget,属性")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-movie-id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{item.id}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("goDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("go-detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("查看电影详情"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("goDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/pages/detail/detail?id=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//包裹在url，进行query传递")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"十四：api请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十四：api请求"}},[t._v("#")]),t._v(" 十四：API请求")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.php'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅为示例，并非真实的接口地址")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//携带参数")]),t._v("\n    x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无论状态码是什么，都会调用success")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"十五-动态-设置导航栏loading和标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十五-动态-设置导航栏loading和标题"}},[t._v("#")]),t._v(" 十五: 动态 设置导航栏loading和标题")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200714160242100.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"十六：页面事件处理哈桑农户和自定义页面转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十六：页面事件处理哈桑农户和自定义页面转发"}},[t._v("#")]),t._v(" 十六：页面事件处理哈桑农户和自定义页面转发")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("页面事件处理函数")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Galileo01/imgCloud@master/image-20200714161823039.png",alt:"image-20200714161823039"}})])])]),t._v(" "),s("p",[t._v("下拉刷新")]),t._v(" "),s("p",[t._v("上划触底")]),t._v(" "),s("p",[t._v("滑动")]),t._v(" "),s("p",[t._v("分享，转发事件")]),t._v(" "),s("ul",[s("li",[t._v("分享")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShareAppMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'电影'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"十七：组件化开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十七：组件化开发"}},[t._v("#")]),t._v(" 十七：组件化开发")]),t._v(" "),s("p",[t._v("高内聚+可复用")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("构成和结构")]),t._v(" "),s("p",[t._v("json，wxml，wxss，js 文件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("组件本身json 配置文件的 "),s("strong",[t._v("component")]),t._v("属性为true")])]),t._v(" "),s("li",[s("p",[t._v("需要在用到这个组件的page的"),s("strong",[t._v("usingComponents")]),t._v(" 属性声明组件及其路径")])])])]),t._v(" "),s("li",[s("p",[t._v("component构造函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  behaviors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对外属性名，类似于prop")]),t._v("\n    myProperty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    myProperty2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 简化的定义方式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 私有数据，可用于模板渲染")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期函数，可以为函数，或一个在methods段中定义的方法名")]),t._v("\n  created："),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//组件被创建")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("attached")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//组件被挂载到页面dom")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ready")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("detached")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//组件从页面dom移除")]),t._v("\n\n\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onMyButtonTap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新属性和数据的方法与更新页面数据的方法类似")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部方法建议以下划线开头")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_myPrivateMethod")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里将 data.A[0].B 设为 'myPrivateData'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A[0].B'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myPrivateData'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_propertyChange")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itemremove'")]),t._v("，myEventDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//传递自定义事件")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n使用 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);