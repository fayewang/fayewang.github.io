---
layout: post
title: "实现博客静态搜索"
categories: Others
tags: Search

---

特别感谢 [Pual lee](http://liberize.me/) 的指导和帮助！

####静态搜索主要思路：

基于atom feed进行搜索，通过js获取文章的标题以及文章正文前xx字数的文字。

针对本Blog的具体实现过程：

1. 在 \\_layouts\default.html 文件中添加form表单以及js代码。
   请将 <https://gist.github.com/bravelee/7821667> 内容复制到  default.html文件的&lt;header&gt; &lt;/header&gt; 之间（注意不是&lt;head&gt;）.修改 var rl = /^http:\/\/www\\.bravelee\\.net\/\d{4}\/\d{2}\/\d{2}\/(.+)\/$/;  为你的url博客地址

2. 由于该搜索是基于 atom feed，而本博客是Rss feed，为了方便起见，在\feed目录直接新建atom.xml文件（本博客将基于文章标题以及正文前300个字符进行搜索）

3. 此时push到github上，可以完成基本的搜索功能，不过样式丑陋：存在搜索框位置、loading.gif 图片持续在页面显示等问题。

4. 针对以上问题进行修正：修改sytle.css文件，在尾部增加如下样式


{% highlight c %}
	/* 以下样式为控制搜索框 */
	#loader {
     	display: none;
	}
	#loader img {
    	 margin-left: 150px;
     	 margin-top: 30px;
    	 margin-bottom: 30px;
    	 box-shadow: none;
	}

	#main {
     	position: relative;
	}

	#search-form {
     	position: absolute;
     	right: 10px;
     	top: 3px;
	}

	#query {
     	border: 1px solid #999 !important;
     	border-radius: 13px;
     	height: 22px;
     	padding: 2px 0 2px 10px;
	}

	#search-form button {
     	position: absolute;
     	width: 15px;
     	height: 15px;
     	right: 12px;
     	top: 8px;
     	border: none;
	}

	.icon-search {
     	background-image: url("/assets/images/icons.png");
    	background-color: transparent;
	}
{% endhighlight %}

5. Push到github即可， OK It Works！


#####参考
--------

* "Jekyll 基于 Feed 实现静态搜索" : <http://liberize.me/post/jekyll-static-blog-search.html>



