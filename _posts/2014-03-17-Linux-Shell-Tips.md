---
layout: post

title: "Linux Shell学习笔记集锦"

categories: Linux

tags: Shell

---

之前断断续续的学习linux一些常用命令，对于shell脚本的熟悉程度仅仅是了解，近期工作之中，感悟shell脚本的方便和高效，决心好好学习一下，该博文主要记录Bravelee学习shell脚本的过程以及思路，重点包含一些常用的命令，及一些肤浅的见解。

该笔记并非按照基础——中级——高级的记录顺序，天马行空，任意发挥，待学习完毕，再将该笔记进行整理。

### 0. 决心开启shell学习的那一刻...
 处理白名单的时候，发现host.txt文件中存在很多重复的URL，决定去重，发现sort命令：
> sort host.txt -u > temp.txt

命令运行结果：删除host.txt文件中重复的url，并将排序结果重定向保存在 temp.txt文件中。

### 1. Getting started

一、创建多个文件
手动：touch {file_1.txt,file_2.txt,file_3.txt}

自动：
{% highlight python %}
for ((i=0;i<5;i++))
do
touch file_$i.txt
done
{% endhighlight %}

在终端运行 sh  create_file.sh  出现错误：**错误为Syntax error: Bad for loop variable**

解决办法：sudo dpkg-reconfigure dash  在选择项中选No  即可

原因：从 ubuntu 6.10 开始，ubuntu 就将先前默认的bash shell 更换成了dash shell；其表现为 /bin/sh 链接倒了/bin/dash而不是传统的/bin/bash。

持续更新.......
