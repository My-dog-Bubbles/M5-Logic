# Challenge 1:
'''
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
print("2B")
increment=1
while increment <= 5:
    print(increment)
    increment+=1

#C

a = 1 
b = 1 
num= int(input("Give me a number:"))
while a<=num:
    b*=a 
    a+=1
    print(b) 


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

#B
students = {"Bianca":26, "Marcus":9, "Angel":77 }
for student, grade in students.items():
    print(f"{student} has a {grade}")
'''
#C
a = int(input("Give me a number: "))
b = int(input("Give me another number: "))
c = int(input("Give me another number: "))
d = int(input("Give me another number: "))
e = int(input("Give me another number: "))
f = int(input("Give me another number: "))
g = int(input("Give me another number: "))
h = int(input("Give me another number: "))
highest = 0
numbersArray = [[a,b,c],[d,e],[f,g,h]]
for i in range(len(numbersArray)):
    for x in range(len(numbersArray[i])):
        if numbersArray[i][x]>highest:
            highest = numbersArray[i][x]
print(highest)