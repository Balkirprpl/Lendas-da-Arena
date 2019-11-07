import {
    start
} from "./start.js";

console.log("gameover.js loaded!");

var gameover = new Phaser.Scene("gameOver");
var space;

gameover.preload = function () 
{
    this.load.image('parabens', 'assets/logo.png');
}
gameover.create = function () 
{
    this.add.image(512, 310, 'parabens');
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}
gameover.update = function () 
{
    if (space.isDown) {
        this.scene.start(start);
    }
}

export {gameover};