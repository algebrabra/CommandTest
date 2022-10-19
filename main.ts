input.onButtonPressed(Button.A, function () {
    i += 1
    basic.showNumber(i)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 0, 3000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    i += -1
    basic.showNumber(i)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
function resetTimer () {
    timer = 1000
}
let timer = 0
let i = 0
let state = 0
resetTimer()
i = 0
basic.showNumber(i)
basic.forever(function () {
	
})
