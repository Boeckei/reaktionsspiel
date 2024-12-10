let zufall = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (zufall == 0) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showIcon(IconNames.No)
        basic.setLedColor(0xff0000)
    }
    basic.pause(100)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (zufall == 1) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showIcon(IconNames.No)
        basic.setLedColor(0xff0000)
    }
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    zufall = randint(0, 1)
    if (zufall == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
