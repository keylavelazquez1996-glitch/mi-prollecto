input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
})
