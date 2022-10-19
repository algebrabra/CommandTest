def on_button_pressed_a():
    global i
    i += 1
    basic.show_number(i)
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            0,
            3000,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global i
    i += -1
    basic.show_number(i)
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            3000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.IN_BACKGROUND)
input.on_button_pressed(Button.B, on_button_pressed_b)

def resetTimer():
    global timer
    timer = 1000
timer = 0
i = 0
state = 0
resetTimer()
i = 0
basic.show_number(i)

def on_forever():
    pass
basic.forever(on_forever)
