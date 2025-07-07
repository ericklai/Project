#Simple Calculator
def calc():
    operator = input("Please enter your operator (+, -, /, *): ")
    num1 = int(input("Please enter your first number: "))
    num2 = int(input("Please enter your second number: "))

    if operator == "+":
        result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        if num2 == 0:
            result = "Error division by zero"
        else:
            result = num1 / num2
    else:
        result = 'Invalid operator!'

    print(f"{num1} {operator} {num2} = {result}")

calc()