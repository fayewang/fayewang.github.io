---
layout: post
title: "设置终端启动Sublime_text 2"
categories: Mac-OSX
tage: sublime-subl

---

环境：Mavericks 10.9.1

目的：通过终端快速调用Sublime Text 2程序来打开文件/目录/项目等。

思路：将sublime终端命令链接到/usr/bin/目录下即可

步骤：

---

在终端（Terminal.app）中运行：
>ln -s "/opt/homebrew-cask/Caskroom/sublime-text/2.0.2/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl" /usr/bin/subl

![](
http://bravelee.u.qiniudn.com/subl-con-1.png
)

###Tips

---
1. 以上链接操作需要切换到root用户（sudo -i），否则会显示权限不足。
          
2. 由于本机上的Sublime 默认使用homebrew-cask 方法安装，所以由home brew 方式安装的所有程序都默认保存在 /opt/homebrew-cask/Caskroom/


###测试

---
终端运行 subl 命令即可调出sublime编辑器

在终端运行 subl --help 可以查看 subl 命令的使用方法：

![](http://bravelee.u.qiniudn.com/subl-con-2.png
)