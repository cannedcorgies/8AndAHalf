class MainMenu extends Phaser.Scene {

    constructor() {
  
      super('main menu');
  
    }
  
    preload() {
        
        // effects
        this.load.image('title screen', './assets/titleScreen.png');
        this.load.image('black screen', './assets/blackScreen.png');
    }
  
    create() { 

        this.camera1 = this.cameras.main;

        this.titleScreen = this.add.image(game.config.width/2, game.config.height/2, 'title screen');
        this.titleScreen.scale = 0.4;
        this.tut = this.add.text(game.config.width/2 + 75, game.config.height/2, "press ← ↑ → ↓");

        this.blackScreen = this.add.image(game.config.width/2, game.config.height/2, 'black screen');
        this.blackScreen.alpha = 0;

        keyLEFT = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.keyPressed = false;
        this.transitionNow = false;

    }

    update() {

        this.camera1.shake(100, 0.0008)

        if (this.transitionNow) {

            this.scene.start("scene1");

        }

        if (!this.keyPressed) {
        
            if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {           // moving left

                this.keyPressed = true;

                var tween = this.tweens.add({

                    targets: this.blackScreen,
                    alpha: 1,
                    ease:"Linear",
                    duration: 5000,
                    callbackScope: this,
                    onComplete: function(){
                        this.transitionNow = true;
                        }

                })
            
            } else if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {   // moving right

                this.keyPressed = true;

                var tween = this.tweens.add({

                    targets: this.blackScreen,
                    alpha: 1,
                    ease:"Linear",
                    duration: 5000,
                    callbackScope: this,
                    onComplete: function(){
                        this.transitionNow = true;
                        }
                        
                })
            
            } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

                this.keyPressed = true;

                var tween = this.tweens.add({

                    targets: this.blackScreen,
                    alpha: 1,
                    ease:"Linear",
                    duration: 5000,
                    callbackScope: this,
                    onComplete: function(){
                        this.transitionNow = true;
                        }
                        
                })
            
            } else if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {  

                this.keyPressed = true;

                var tween = this.tweens.add({

                    targets: this.blackScreen,
                    alpha: 1,
                    ease:"Linear",
                    duration: 5000,
                    callbackScope: this,
                    onComplete: function(){
                        this.transitionNow = true;
                        }
                        
                })
            
            }
        
        }

    }

    next() {

        console.log("should be starting next scene")

        this.scene.start("scene1");

    }

    someFunction() {



    }

}
