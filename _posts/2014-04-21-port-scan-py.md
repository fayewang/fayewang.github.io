---
layout: post

title: "Python-多线程端口扫描脚本"

categories: Python

tags: Python

---
###代码如下：

{% highlight python %}

#!/usr/bin/python
# -*- coding: utf-8 -*-
# 多线程端口扫描程序Beta版，仅供学习研究之用

import time,socket,thread

socket.setdefaulttimeout(3)

def port_scan(ip,port):
    try:
        if port>=65535:
            print 'Scanning stop by 0-65535'
        # create an AF_INET, STREAM socket (TCP)
        s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        scan_result = s.connect_ex((ip,port))
        if scan_result == 0:
            print ip,":",port,"Port is open!"
        s.close()
    except:
        print "port-scan error-1"

def ip_scan(ipaddress):
    try:
        t = time.time()
        for item in range(0,1000+1):
            #使用start_new_thread函数可以简单的启动一个线程,
			#第一个参数指定线程中执行的函数，第二个参数为元组型的传递给指定函数的参数值
            thread.start_new_thread(port_scan,(ipaddress,int(item)))
            time.sleep(0.003)
        print 'Port-scan complete! Takes: %f'% (time.time()-t)
    except:
        print "port-scan error-2"

if __name__ == "__main__":
    ip_scan("127.0.0.1")


{% endhighlight %}