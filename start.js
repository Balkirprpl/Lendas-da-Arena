import {main} from "./main.js";

console.log("start.js loaded!");

var start = new Phaser.Scene("SceneA");
var space;
var botao;
var cursors;
var jogar = false

start.preload = function () {
    this.load.image("background", "assets/background.png");
    this.load.image("click", "assets/cliqueaqui.png");
};

start.create = function () {
    this.add.image(512, 310, "background");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    botao = this.physics.add.sprite(512, 312, 'click').setInteractive().setScale(0.3);
    cursors = this.input.keyboard.createCursorKeys();
};

start.update = function () {
    if (jogar) {
        this.scene.start(main);
    };

    if (space.isDown)
    {
        jogar = true;
    }

    botao.on('pointerdown', pointer);
};

function pointer ()
{
    jogar = true;
}

export {start};