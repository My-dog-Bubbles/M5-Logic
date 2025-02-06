# Challenge 1:

#A 
num = int(input("Give me a number: "))
if num%2==0:
    print("This number is even.")
else:
    print("this number is not even.")
#B
userAge = int(input("How old are you: "))
if userAge > 18:
    print("You are eligible to vote.")
else:
    print("You are to young to vote.")

#C
if num==0:
    print("Your number is zero.")
elif num<0:
    print("Your number is a negative number.")
elif num>0:
    print("Your number is positive.")


# Challenge 2

#A
for i in range(1,11,1):
    print(i)

#B
a=1
while a <= 5:
    print(i)
    a+=1

#C


#Challenge 3

#A
userName = input("What is your name: ")
def userHello(user):
    print("Hello, " + user + "!!")
userHello(userName)

#B 
newNum = int(input("Give me a number: "))
def odd_or_even(num):
    if num%2==0:
        print("This number is even.")
    else:
        print("this number is not even.")
odd_or_even(newNum)

#C
vowel = ["a","e","i","o","u"]

userWord = input("GIVE ME A WORD: ")
def vowel_Num(word):
    amount = 0
    for letter in word:
        if letter in vowel:
            amount +=1
            print(amount)
vowel_Num(userWord)

# Challenge 4

#A

list = ["APPLE", "BANANA", "MANGO", "PINEAPPLE"]
for i in range(len(list)):
    print(list[i])
    i+=1
    

