---
layout: post

title: "基于Ubuntu搭建python + django开发环境"

categories: Python

tags: python-django

---
###题外话
很久没有更新博客了，其实这个博客存在的意义也只是供我自己备份之用，基本没有推广，也没有人来关注，只是督促自己做事要记得坚持。

虽然博客没有更新，却没有停止学习的脚步，Evernote记录了很多学习笔记（又是在给自己的懒惰找借口，让自己拥有一个冠冕堂皇的懒惰的理由）

调侃至此，进入正文......

###部署环境
---------------
- VMware 10.0.2
- Ubuntu 12.04.4 LTS
- Python 2.7.3

- 为了便于操作，使用root用户登陆Ubuntu

- 关于django的发音，《被解放的姜戈》这部电影中描述过，姜戈在庄园喝酒的时候：
> 白人：你叫什么名字？
> 
> 姜戈：my name is django
> 
> 白人：how to spell？
> 
> 姜戈：d-j-a-n-g-o，（此时姜戈特别强调 d 不发音）

感谢昆汀导演，感谢姜戈。

###安装所需工具
--------------

- python 2.7  // linux自带python版本较低，你可以将其更新至较新版
- easy_install  //安装python工具命令，执行【apt-get install python-setuptools 】
- pip       //python包管理工具， 执行【apt-get install python-pip】
- git      //版本管理工具（个人一般用于向github push 代码），如果你只是在本地学习django，可以无需安装。执行【apt-get install git】
- virtualenv   //模拟环境， 执行【easy_install virtualenv】


###部署开发环境（基于virtualenv）
---------------------------------
**Tips：**安装virtualenv虚拟环境主要是便于折腾，比如可以在虚拟环境下安装多个版本的python，随意折腾，不用担心损坏系统配置。

- 新建工作目录：cd/opt —— mkdir www-django—— cd www-django
- 执行命令： virtualenv env  //创建名为env的虚拟环境，显示如下：
> New python executable in env/bin/python
> 
> Installing setuptools, pip...done.

- 执行命令：source env/bin/activate  //进入evn环境，显示如下：
> root@ubuntu:/opt/www-django# source env/bin/activate

> (env)root@ubuntu:/opt/www-django# 

- 执行命令：pip freeze   //查看当前env目录安装包情况
- 安装django，执行命令：pip install django


###测试django
-------------------

- 执行命令：django-admin.py startproject mysite //创建名为mysite的django工程目录
- cd mysite  //进入该目录
- 执行命令：python manage.py runserver  显示如下：

>(env)root@ubuntu:/opt/www-django/mysite# python manage.py runserver

>Validating models...

>0 errors found

>April 16, 2014 - 08:36:00

>Django version 1.6.5, using settings 'mysite.settings'

>Starting development server at http://127.0.0.1:8000/

>Quit the server with CONTROL-C.

>[16/Apr/2014 08:37:08] "GET / HTTP/1.1" 200 1757

- 浏览器中访问 http://127.0.0.1:8000/  It worked！

> It worked!

> Congratulations on your first Django-powered page.


### 参考
---------------
[1] http://blog.csdn.net/zaqwes8099/article/details/26201491

### 进一步学习
----------------

个人感觉vamei君 python 一系列的文章质量较高，请参考学习：

http://www.cnblogs.com/vamei/tag/Python/



###The End
