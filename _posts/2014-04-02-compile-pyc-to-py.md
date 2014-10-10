---
layout: post

title: "如何将.pyc和.pyo文件反编译为.py文件"

categories: Python

tags: Python

---

**目的：**下载一批pyc文件，希望可以将其反编译为py文件，便于阅读和修改。

**工具：**py2.7  uncompyle2  （win7 x64系统）

**步骤：**

*step 1.* 安装python2.7，将python设置为系统环境变量

*step 2.* 安装uncompyle2
    
    下载uncompyle2： https://github.com/wibiti/uncompyle2
    解压之后，在cmd模式进入该目录，输入命令： python setup.py install
    测试是否安装成功：python C:\Python27\Scripts\uncompyle2 -h

![](http://bravelee.u.qiniudn.com/2014-04-02-compile-pyc-to-py.jpg)

*step 3.* 反编译pyc文件

    使用命令：python C:\Python27\Scripts\uncompyle2 C:\vpn.pyc > vpn.py

It Works!


其它功能和技巧，等待进一步学习和挖掘......