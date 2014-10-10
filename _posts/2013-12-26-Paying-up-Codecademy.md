---
layout: post

title: "Codecademy中关于Paying Up的试题"

categories: Python

tags: Python

---
###Paying Up
Now it's time for you to make a function that computes how much you still owe after every monthly payment.

You'll create the function `make_payment` as described below. The function should `return` how much you still owe after you make an arbitrary payment at the beginning of the month.

Note: you calculate how much you still owe by subtracting your payment from your total balance and then adding interest using your `add_monthly_interest` function.

Next, we will call our `make_payment` function to try and solve a real world problem. Note that this may be more difficult than what you are used to but we have faith in you!

###Instructions
Finish the function `make_payment` that takes the inputs `payment` and `balance`.

Have the function `print` the string `"You still owe: x"`, with `x` being the amount that you still owe. Then `return` the amount you still owe. Remember to add interest to the final amount!

We went to a hotel for `5` nights. We then decided to pay half the bill. Then we decided to pay another `100` dollars. At the end of your code, make sure to `print` out how much we still owe. (Check the hint if you need help!)

###My code:
---

{% highlight python %}
#!usr/bin/python
#Filename:Paying-up.py

def hotel_cost(nights):
    return nights * 140

bill = hotel_cost(5)

def add_monthly_interest(balance):
    return balance * (1 + (0.15 / 12))

def make_payment(payment, balance):
    still_own = balance - payment
    total_own = add_monthly_interest(still_own)
    print "You still owe: %f" % total_own
    return total_own
    
new_bill = make_payment(bill/2,bill)
print make_payment(100,new_bill)
{% endhighlight %}

