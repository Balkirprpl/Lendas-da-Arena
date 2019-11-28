import {
    start
} from "./start.js";

console.log("gameover.js loaded!");

var jogarnovamente = false;
var botao;
var gameover = new Phaser.Scene("gameOver");

gameover.preload = function () 
{
    this.load.image('parabens', 'assets/logo.png');
    this.load.image("click", "assets/cliqueaqui.png");
    jogarnovamente = false;
}
gameover.create = function () 
{
    this.add.image(512, 310, 'parabens');
    botao = this.physics.add.sprite(512, 512, 'click').setInteractive().setScale(0.3).on('pointerdown', playagain);
}
gameover.update = function () 
{
    if (jogarnovamente)
    {
        this.scene.start(start);
    }
}

function playagain()
{
    jogarnovamente = true;
}

export {gameover};