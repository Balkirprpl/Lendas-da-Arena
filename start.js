import {main} from "./main.js";

console.log("start.js loaded!");

var start = new Phaser.Scene("SceneA");
var space;
var botao;
var cursors;
var jogar = false
var pontos = 5;
var pontosshow;
var tempo = 30;
var temposhow;
var botaoup;
var botaodown;
var maxpoints = 5;

start.preload = function () {
    this.load.image("background", "assets/background.png");
    this.load.image("click", "assets/cliqueaqui.png");
    this.load.image("arrow", "assets/arrow.png");
    this.load.image("alvo", "assets/alvo.png");
    this.load.image("relogio", "assets/relogio.png");
};

start.create = function () {
    this.add.image(512, 310, "background");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    botao = this.physics.add.sprite(512, 312, 'click').setInteractive().setScale(0.3);
    botaodown = this.physics.add.sprite(874, 300, 'arrow').setInteractive().setScale(0.05).setAngle(180).on('pointerdown', scoredown);
    botaoup = this.physics.add.sprite(874, 260, 'arrow').setInteractive().setScale(0.05).on('pointerdown', scoreup);
    cursors = this.input.keyboard.createCursorKeys();
    this.add.sprite(835,280, 'alvo').setScale(0.1);
    this.add.sprite(835,200, 'relogio').setScale(0.027).setInteractive().on('pointerdown', changetime);
    temposhow = this.add.text(825, 193, tempo + "s", { fontFamily: 'ComicSans'});
    pontosshow = this.add.text(828, 273, pontos, { fontFamily: 'ComicSans'});
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

function changetime ()
{
    if (tempo < 179)
    {tempo = tempo + 30
    temposhow.setText(tempo + "s");
    }
    else
    {
        tempo = 30;
        temposhow.setText(tempo + "s");
    }
}

function scoreup ()
{
    if (pontos <= 59)
    {
    pontos = pontos + 5;
    pontosshow.setText(pontos);
    }
}

function scoredown ()
{
    if (pontos > 0)
    {
    pontos = pontos - 5;
    pontosshow.setText(pontos);
    }
}

export {start};
export {pontos};
export {tempo};