input.onButtonPressed(Button.A, function () {
    i += 1
    basic.showNumber(i)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 0, 3000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    resetTimer()
})
input.onButtonPressed(Button.B, function () {
    i += -1
    basic.showNumber(i)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    resetTimer()
})
function resetTimer () {
    timer = 3000
}
let timer = 0
let i = 0
music.setVolume(200)
let state = 0
resetTimer()
i = 0
basic.showNumber(i)
basic.forever(function () {
    timer += -100
    basic.pause(100)
    if (timer == 0) {
        basic.showString("SHIT")
    }
})
