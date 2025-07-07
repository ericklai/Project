import turtle
import math

screen = turtle.Screen()
screen.bgcolor("black")

pen = turtle.Turtle()
pen.color("purple")
pen.speed(0)
pen.begin_fill()

a = 200
k = 4

pen.penup()
for theta in range(0, 361 * 1):
    angle = math.radians(theta)
    r = a * math.sin(k * angle)
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    if theta == 0:
        pen.goto(x, y)
        pen.pendown()
    else:
        pen.goto(x, y)

pen.end_fill()
pen.hideturtle()
turtle.done()

