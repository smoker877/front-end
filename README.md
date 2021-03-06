# 前端基础

## 网页布局基础

CSS的定位机制有3种：

1. 标准文档流（Normal flow，从上到下，从左到右就像写文章一样，由块级元素和行级元素组成）。
2. 浮动（float）可以实现横向双列布局和横向三列布局。
	- 设置了浮动的元素仍然处于标准文档流中。设置浮动的元素会对它紧临的元素产生影响。
	- 因为浮动的存在可能导致布局混乱，常用的清除浮动的方法是：
		- 受到浮动影响的元素的**clear**属性设置为both（紧邻其后的元素）。`clear`的属性还可以是left、right（分别表示左侧或者右侧不允许出现浮动元素）
		- 为元素设置宽度为**100%**或者**固定宽度**，同时设置`overflow:hiden;`
		- 不要使用`<br />`标记，因为它毫无意义，会对文档的结构产生影响。
3. 绝对定位（absolute）。
	- 绝对定位布局使用`position`属性进行的布局。该属性有4个值：static、relative、absolute、fixed。（其中static是标准文档流，是默认；最后两个是绝对定位）
		- 相对定位
			- 相对于自身原有的位置进行偏移（物理运动中的参照物）。
			- 相对定位的元素仍然处于标准文档流中。
			- 相对定位的元素拥有偏移属性（`top`、`left`）和`z-index`属性（空间堆叠）。
		- 绝对定位
			- 建立了以**包含块**为基准的定位，当没有设置宽度的时候会根据内容调节。
			- 完全脱离的标准文档流。
			- 拥有偏移属性和`z-index`属性。
			- 未设置偏移量
				- 无论是否存在已定位的祖先元素，都保持元素的起始位置。
			- 设置了偏移量
				- 没有已经定位的祖先元素，以`html`为参照基准，不是`body`。
				- 有已经定位的祖先元素，以离它最近的祖先元素为偏移参照基准。

----------

- 块级元素：从左到右撑满页面，独占一行，当碰到页面边缘的时候自动换行，如div、ul、li、p、dl、dt等。
- 行级元素：能在同一行显示，不会改变html文档的结构，如：span、img、strong、input等大部分的表单标签。
- 行级元素和块级元素都是盒子模型。

### 盒子模型
![](http://i.imgur.com/xJV03Ss.jpg)
盒子模型的宽高的计算方法：margin + border + padding + width/height

盒子模型其实是3D立体模型。
![](http://i.imgur.com/fWpDo8i.jpg)
各个层次之间相互叠加就形成了平面模型。

网页的布局其实就是利用CSS处理块与块之间的关系：

1. 块挨着块；
2. 块嵌套者块；
3. 块叠加这块。

----------

- 单列布局

例如百度。简单、主题突出、不适合防止多行文本。

- 双列布局

例如：腾讯软件中心。主要用到的技能：
#### 方式一：使用浮动

1. `float`属性使纵向排列的块级元素横向排列。
2. `margin`属性设置两列之间的间距。

#### 方式二： 使用绝对定位
这种方式常用于一列固定宽度，另一列宽度自适应的情况。（绝对定位的元素要放在相对定位的元素的里面）

1. `relative`：父元素相对定位。
2. `absolute`:自适应宽度元素绝度定位。

**注意：**自适应宽度的列的高度>自适应宽度的列

- 三列布局

### 网页布局范例
1. 新浪微博布局中的第三种情况。
![](http://i.imgur.com/jcmuVIU.jpg)

### CSS雪碧图 
![](http://i.imgur.com/RDHNItr.jpg)
一些大型的网站为了性能的优化。导航条上的图片并不是使用的是img标签。使用雪碧图（CSS Sprite）的场景：

- 静态信息，不经常变化。
- 小图片，容量小。

例如：淘宝的导航条。
![](http://i.imgur.com/GowMdOB.jpg)
发现它是由很多的小图片混杂在一起的大图片。这样做的目的就是减少http请求的数目，加速显示。
![](http://i.imgur.com/uJVBSIc.png)
![](http://i.imgur.com/j7LAPz2.jpg)
它主要使用的是CSS的`background-position`属性控制显示的图片。我们可以通过控制这个属性来控制需要显示的小图片。

生成雪碧图常用sprite工具自动生成。[CSSgaga教程](http://www.99css.com/1524/)。

## 清除浮动的终结版本

`after`伪类选择器：

```css
.top-nav:before,.top-nav:after{
    content: '';
    display: table;
}
.top-nav:after{
    clear: both;
}
```

## 网站上常用的小三角的实现

```css
.box{
    display: block;
    width: 0;
    border-top: 10px solid red;
    border-right: 10px solid blue;
    border-bottom: 10px solid yellow;
    border-left: 10px solid magenta;
}
```

设置小三角只需要将别的边的颜色设置为透明即可。

## jQuery浏览器检测

```js
$.browser.msie && $.browser.version.substr(0,1) < 7
```

## `mouseover`事件和`mouseenter`事件的区别

`mouseover`事件会在鼠标穿入子元素及其子元素的时候触发，而`mouseenter`事件仅会在穿入该元素的是皇后触发，参见：[W3School演示](http://www.w3school.com.cn/tiy/t.asp?f=jquery_event_mouseenter_mouseover)，同理可以类比`mouseout`和`mouseleave`.

javascript中并非所有的事件都能够冒泡，`blur`,`focus`,`load`和`unload`事件不能冒泡。

## 图片居中

图片设置`display:block;margin:0 auto;width:300px;`,参见：[W3CPlus](http://www.w3cplus.com/css%2520/img-vertically-center-content-with-css)

## 使用javascript设置样式的优化

如果有多个`obj.style.xxx=xxx`，我们可以设置`obj.style.cssText=xx`，简化操作，提高性能。

# 注意事项 

1. CSS中只有多行注释，在其他语言中的"//"方式是不行的。
2. html中输出空格可以有以下2种解决方案：
	1.  使用html的`&nbsp;`来解决：`1 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3`
	2.  使用CSS样式：`<span style="white-space:pre">1 2          3</span>`