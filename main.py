def on_button_pressed_a():
    for index in range(4):
        sprite.move(4)
        sprite.turn(Direction.RIGHT, 90)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

sprite: game.LedSprite = None
sprite = game.create_sprite(0, 0)