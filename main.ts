input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 4; index++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
let sprite : game.LedSprite = null
sprite = game.createSprite(0, 0)
