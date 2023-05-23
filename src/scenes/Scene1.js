class Scene1 extends Phaser.Scene {

    constructor() {
  
      super('scene1');
  
    }
  
    preload() {
        
      this.load.image('car', './assets/car.png');

    }
  
    create() { 

      this.guido = new Guido(this, game.config.width/2, game.config.height/2, 'car').setOrigin(0.5, 0);

      keyLEFT = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      keyDOWN = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      keyUP = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    }

    update() {

      this.guido.update();

    }

    someFunction() {



    }

}
