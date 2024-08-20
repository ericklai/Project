import turtle
animation = turtle.Turtle()
animation.speed(20)
animation.hideturtle()
animation.getscreen().bgcolor("black")
animation.color("red")

for i in range(170):
    animation.circle(i)
    animation._rotate(10)