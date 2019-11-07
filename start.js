import {main} from "./main.js";

console.log("start.js loaded!");

var start = new Phaser.Scene("SceneA");
var pointer;

start.preload = function () {
    this.load.image("background", "assets/background.png");
};

start.create = function () {
    this.add.image(512, 310, "background");
    pointer = this.input.activePointer;
};

start.update = function () {
    if (pointer.isDown) {
        this.scene.start(main);
    }
}

export {start};