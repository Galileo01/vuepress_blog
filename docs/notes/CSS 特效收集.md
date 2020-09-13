# CSS 特效收集

## 1,文字边框

html 代码

```html
<div id="draw-border">
            <button>Hover me</button>
        </div>
```

css 代码

```cs
#draw-border {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            button {
                /* 移除 button 的默认样式*/
                border: 0;
                background: none;
                outline: none;
                text-transform: uppercase;
                color: #4361ee;
                font-weight: bold;
                position: relative;

                padding: 10px 20px;
                box-sizing: border-box;
            }

            button::before,
            button::after {
                box-sizing: inherit; /* 继承border-box  防止 大小溢出*/
                position: absolute;
                content: '';
                border: 2px solid transparent;
                width: 0;
                height: 0;
            }
            
            /* 位于button 的右下角*/
            button::after {
                bottom: 0;
                right: 0;
            }
            /*位于 button 的左上角*/
            button::before {
                top: 0;
                left: 0;
            }
            /*高度和宽度分别 延申*/
            button:hover::before,
            button:hover::after {
                width: 100%;
                height: 100%;
            }

            button:hover::before {
                border-top-color: #4361ee;
                border-right-color: #4361ee;
                transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;/* width 先变化，height 后变化*/
            }

            button:hover::after {
                border-bottom-color: #4361ee;
                border-left-color: #4361ee;
                transition: border-color 0s ease-out 0.6s,
                    width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;/* width 先变化，height 后变化*/
            }
```

gif 展示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/295e3b962d9b4b08b34226604343d256~tplv-k3u1fbpfcp-zoom-1.image)