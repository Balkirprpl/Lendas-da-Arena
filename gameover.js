import {
    start
} from "./start.js";

import {
    scorep1,scorep2
} from "./main.js";

console.log("gameover.js loaded!");

var jogarnovamente = false;
var botao;
var gameover = new Phaser.Scene("gameOver");

gameover.preload = function () 
{
    this.load.image('player2w', 'assets/win2.png');
    this.load.image('player1w', 'assets/win1.png');
    this.load.image("click", "assets/cliqueaqui.png");
    this.load.image("player1big", "assets/player1big.png");
    this.load.image("player2big", "assets/player2big.png");
    jogarnovamente = false;
}
gameover.create = function () 
{
    if (scorep1 > scorep2)
    {
        player1win();
    }

    else
    {
        player2win();
    }
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

function player1win()
{
    gameover.add.image(100, 400, 'player2big').setTint(0xff0000);
    gameover.add.image(924, 400, 'player1big').setFlipX(true);
    gameover.add.image(512, 310, 'player2w');
}
function player2win()
{
    gameover.add.image(100, 400, 'player2big');
    gameover.add.image(924, 400, 'player1big').setFlipX(true).setTint(0xff0000);
    gameover.add.image(512,310, 'player1w');
}

export {gameover};