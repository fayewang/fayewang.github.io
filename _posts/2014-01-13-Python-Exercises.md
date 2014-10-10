---
layout: post

title: "python练习题合集--不定期更新"

categories: Python

tags: Python

---


- 使用`print`语句向txt文件中输入字符：
{% highlight python %}
import os
path = "D:/test"
os.chdir(path)
char = "Hello Bravelee"
f = open("test.txt","w")
print >>f,char
{% endhighlight %}

- 批量修改文件后缀名：

{% highlight python %}
#!/usr/bing/python
# -*- coding: utf-8 -*-
import os
files = os.listdir(".")
for filename in files:
    li = os.path.splitext(filename)
    if li[1]==".txt":
        newname = li[0]+".php"
        os.rename(filename,newname)
print 'The mission is done.'
{% endhighlight %}


- 简易倒计时

{% highlight python %}
#!/usr/bin/python
# -*- coding: utf-8 -*- 
import time
count = 0
a = raw_input('Please input the time:\n')
b = int(a)*60
while (count<b):
    ncount = b - count
    print ncount
    time.sleep(1)
    count += 1
print('done')
{% endhighlight %}


- if 循环（猜数字）

{% highlight python %}
number = 14
guess = int(raw_input('Please input a number: \n'))

if guess == number:
    print 'Wow，You R right，what a clever man!'
elif guess < number:
    print 'Sorry The number is less than target,Try it again \n'
else:
    print 'Sorry the number is larger than target ,Try it again \n'
{% endhighlight %}


- while 循环(猜数字)

{% highlight python %}
number = 14
while True:
    guess = int(raw_input('Please input a number: \n'))
    if guess == number:
        print 'Wow, You R right! The game is done! \n'
        break
    elif guess < number:
        print 'Sorry, the number is less than target, Try it again \n'
    else:
        print 'Sorry, the number is larger than target, Try it again \n'
else:
    print 'The loop is done!!'
{% endhighlight %}