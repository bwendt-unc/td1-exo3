let nb = 0
input.onButtonPressed(Button.A, function () {
    nb = 1
    for (let nb = 0; nb <= 10; nb++) {
        basic.showString("" + (nb + 1))
    }
})
basic.forever(function () {
	
})
