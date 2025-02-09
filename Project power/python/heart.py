import turtle

def draw_heart():
    turtle.fillcolor('red')
    turtle.begin_fill()
    turtle.left(140)
    turtle.forward(224)
    turtle.circle(-112, 200)
    turtle.left(120)
    turtle.circle(-112, 200)
    turtle.forward(224)
    turtle.end_fill()
    turtle.hideturtle()

# Set up the turtle
turtle.speed(1)
turtle.title("Heart Shape")
draw_heart()
turtle.done()