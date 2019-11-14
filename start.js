import {main} from "./main.js";

console.log("start.js loaded!");

var start = new Phaser.Scene("SceneA");
var space;

start.preload = function () {
    this.load.image("background", "assets/background.png");
};

start.create = function () {
    this.add.image(512, 310, "background");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

start.update = function () {
    if (space.isDown) {
        this.scene.start(main);
    }
}

export {start};