---
layout: post

title: "PyQt4练习一：日历界面（Calendar）"

categories: Python

tags: PyQt4

---

使用PyQt可以基于Python语言编写GUI程序，PyQt是自由软件，提供了GPL与商业协议两种授权方式。PyQt支持Windows、Mac、nix等多种平台。

Windows环境下安装：下载对应版本的[PyQt](http://www.riverbankcomputing.com/software/pyqt/download)

Mac OSX环境安装：昨天折腾到凌晨一点多，还木有搞定，):，今天下班回家继续折腾。


####PyQt4练习一：日历（无实意，仅为练手之用）
----

代码如下：

{% highlight python %}

#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
from PyQt4 import QtGui,QtCore

class Calendar(QtGui.QWidget):
    def __init__(self,parent=None):
        QtGui.QWidget.__init__(self)
        self.setGeometry(300,300,350,300)
        self.setWindowIcon(QtGui.QIcon('bl.ico'))
        self.setWindowTitle('Calendar by Bravelee @2014-02-28')

        self.cal = QtGui.QCalendarWidget(self)
        self.cal.setGridVisible(True)
        self.connect(self.cal,QtCore.SIGNAL('selectionChanged()'),self.showDate)
        self.label = QtGui.QLabel(self)
        date = self.cal.selectedDate()
        self.label.setText(str(date.toPyDate()))
        vbox = QtGui.QVBoxLayout()
        vbox.addWidget(self.cal)
        vbox.addWidget(self.label)
        self.setLayout(vbox)
    def showDate(self):
        date = self.cal.selectedDate()
        self.label.setText(str(date.toPyDate()))

app = QtGui.QApplication(sys.argv)
test = Calendar()
test.show()
sys.exit(app.exec_())

{% endhighlight %}


运行效果如下：

![](http://bravelee.u.qiniudn.com/Pyqt4-20140228150744.jpg)