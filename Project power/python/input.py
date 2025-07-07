# operator = input("Enter an operator: (* - + /): ")
# num1 = float(input("Enter a first number: "))
# num2 = float(input("Enter a second number: "))
#
# if operator == "+":
#     print(round(num1 + num2, 4))
# elif operator == "-":
#     print(round(num1 - num2, 4))
# elif operator == "/":
#     print(round(num1 / num2, 4))
# elif operator == "*":
#     print(round(num1 * num2, 4))
# else:
#     print("Invalid operator")

                            # LOGICAL OPERATORS
# temp = 36
# is_raining = False
#
# if temp > 35 or temp < 0 or is_raining:
#     print("The outdoor event is cancelled")
# else:
#     print("The outdoor event is still scheduled")

# name = input("Enter your full name: ")
# if len(name) > 12:
#     print("Too long")
# elif not name.find(" ") == -1:
#     print("Cannot contain spaces")
# elif not name.isalpha():
#     print("Cannot contain numbers")
# else:
#     print(f"Welcome {name}")

# result = name.upper().count("I")

# print(result)

# word = input("Enter your word: ")
# if word[::-1] == word:
#     print(f"{word.upper()} is a palindrome")
# else:
#     print(f"{word.upper()} is not a palindrome")

# price1 = 3232389
# price2 = -94543
# price3 = 1234
#
# print(f"Price 1 is: {price1: ,.2f}")
# print(f"Price 2 is: {price2: ,.2f}")
# print(f"Price 3 is: {price3: ,.2f}")

# name = input("Enter your name: ")
#
# while name == "":
#     print("Name is empty")
#     name = input("Enter your name: ")
#
# print(f"Name is, {name}")

# num = int(input("Enter a number between 1 and 10: "))
#
# while num < 1 or num > 10:
#     print("Not valid")
#     num = int(input("Enter a number between 1 and 10: "))
# print(f"Your number is: {num}")

# principal = 0
# rate = 0
# time = 0
#
# while True:
#     principal = float(input("Enter the principal amount: "))
#     if principal < 0:
#         print("Please enter a positive number")
#     else:
#         break
#
# while True:
#     rate = float(input("Enter the rate: "))
#     if rate < 0:
#         print("Please enter a positive rate")
#     else:
#         break
#
# while True:
#     time = int(input("Enter the time in years: "))
#     if time < 0:
#         print("Please enter a valid time")
#     else:
#         break
#
# # print(principal, rate, time)
#
# total = pow(principal * (1 + rate / 100), time)
# print(f"Your new amount is ${total :,.2f} after {time} years.")

# for x in reversed(range (1, 11, 2)):
#     print(x)

# import time
#
# my_time = int(input("Enter the time in seconds: "))
#
# for x in range(my_time, 0, -1):
#     seconds = x % 60
#     minutes = int(x / 60) % 60
#     hours = int(x / 3600)
#     print(f"{hours:02}:{minutes:02}:{seconds:02}")
#     time.sleep(1)
#
# print

# import random
# numbers = []
# for num in range(1,11):
#     num = random.randint(1,101)
#     numbers.append(num)
#
# print(numbers)

# import random

# def roll_until_six():
#     roll = 0
#     count = 0
#     while roll != 6:
#         roll = random.randint(1, 6)
#         count += 1
#
#         print(f"Rolls {count}: {roll}")
#         print(f"It took {count} attempts")
#
# roll_until_six()

# def roll_until_six():
#     dice = random.randint(1, 6)
#     while dice != 6:
#         print("Rolling...")
#         dice = random.randint(1, 6)
#     else:
#         print("Six rolled")
#
# roll_until_six()

# string = "Interview"
# new_string = string.replace('e', '-', 1 )
# print(new_string)

# rows = int(input("Enter number of rows: "))
# columns = int(input("Enter number of columns: "))
# symbol = input("Enter symbol: ")
#
# for x in range(rows):
#     for y in range(columns):
#         print(symbol, end= '')
#     print()

# foods = []
# prices = []
# total = 0
#
# while True:
#     food = input("Enter food to buy (q to quit): ")
#     if food.lower() == 'q':
#         break
#     else:
#         price = float(input(f"Enter the price of {food}: "))
#         foods.append(food)
#         prices.append(price)
#
# print("-----YOUR CART------")
#
# for food in foods:
#     print(food, end=" ")
#
#
# for price in prices:
#     total += price
#
# print()
# print(f"Your total is: ${total}")

def fibonacci():
    a, b = 0, 1
    while a < 100:
        print(a, end=" ")
        a, b = b, a + b

fibonacci()








