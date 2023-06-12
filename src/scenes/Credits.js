class Credits extends Phaser.Scene {

    constructor() {
  
      super('credits');
  
    }
  
    preload() {
        
        // effects
        this.load.image('black screen', './assets/blackScreen.png');
    }
  
    create() { 

        this.camera1 = this.cameras.main;
        this.gap = 35;

        this.director = this.add.text(game.config.width/2 - 50, game.config.height/2, "film by federico fellini");
        this.me = this.add.text(game.config.width/2 - 40, this.director.y + this.gap, "game by me (fern)");
        this.piano = this.add.text(game.config.width/2 - 30, this.me.y + this.gap, "paino sfx from onlinesequencer.net");
        this.gunshot = this.add.text(game.config.width/2 - 20, this.piano.y + this.gap, "gunshot sfx by benyay on youtube");

        this.blackScreen = this.add.image(game.config.width/2, game.config.height/2, 'black screen');
        this.blackScreen.alpha = 0;

        let someTime = this.time.delayedCall(10000, () => {

            this.next();
    
        }, null, this);

    }

    update() {

        this.camera1.shake(100, 0.0009);

    }

    next() {

        console.log("next");

        var tween = this.tweens.add({

            targets: this.blackScreen,
            alpha: 1,
            ease:"Linear",
            duration: 5000,
            callbackScope: this,
            onComplete: function(){
                this.next2();
            }

        })

    }

    next2() {

        console.log("next 2");

        let next = this.time.delayedCall(5000, () => {

            this.scene.start("main menu");
    
        }, null, this);

    }

    someFunction() {



    }

}
