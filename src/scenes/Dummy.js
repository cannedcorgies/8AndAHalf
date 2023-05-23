class ObjectName extends Phaser.Scene {

    constructor() {
  
      super('scene name');
  
    }
  
    preload() {
        
        // player
        this.load.image('image name', './assets/image.png');
        
        // animations
        this.load.spritesheet('animation name', './assets/spriteSheet.png', {
            frameWidth: 63,     // frame width
            frameHeight: 19     // frame height
        });
        
        // sound effects
        this.load.audio('sfx name', './sounds/someSound.wav');
        
        // background music
        this.load.audio('backgroundMusic', './sounds/someMusic.mp3');

    }
  
    create() { 



    }

    update() {



    }

    someFunction() {



    }

}
