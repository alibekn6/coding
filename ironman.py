import turtle

# Set up the turtle
t = turtle.Turtle()
t.speed(10)
t.color("red")
t.penup()
t.goto(-200, 0)
t.pendown()

# Draw the body
t.begin_fill()
t.forward(400)
t.right(90)
t.forward(100)
t.right(90)
t.forward(400)
t.right(90)
t.forward(100)
t.end_fill()

# Draw the roof
t.color("black")
t.penup()
t.goto(-200, 50)
t.pendown()
t.begin_fill()
t.right(120)
t.forward(100)
t.left(60)
t.forward(100)
t.left(60)
t.forward(100)
t.end_fill()

# Draw the wheels
t.color("gray")
t.penup()
t.goto(-150, -50)
t.pendown()
t.begin_fill()
t.circle(25)
t.end_fill()

t.penup()
t.goto(150, -50)
t.pendown()
t.begin_fill()
t.circle(25)
t.end_fill()

# Hide the turtle
t.hideturtle()

# Show the drawing
turtle.done()
