def on_button_pressed_a():
    global i
    i += 1
    basic.show_number(i)
input.on_button_pressed(Button.A, on_button_pressed_a)

i = 0
i = 0

def on_forever():
    pass
basic.forever(on_forever)
