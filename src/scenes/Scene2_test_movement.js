class Scene2_test_movement extends Phaser.Scene {

    constructor() {
  
      super('scene2_test_movement');
  
    }
  
    preload() {
        
        this.load.image('car', './assets/car.png');
        this.load.image('box', './assets/box.png');

        // testing

        this.load.image('someSprite', './assets/indigoRoad.png');

    }
  
    create() { 

        keyLEFT = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyUP = 
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        // camera

        this.camera1 = this.cameras.main;
        this.camera1.setBackgroundColor('rgba(135, 135, 135, 1)');  // gray
        this.worldCenter = new Center(this, game.config.width/2, game.config.height/2, 'carl').setOrigin(0.5, 0.5);
        this.camera1.startFollow(this.worldCenter);

        
        // objects

            // guido
        this.guido = new Guido(this, game.config.width/2, game.config.height/2, 'car', 0, 'suspended').setOrigin(0.5, 0);

            // box
        this.box = new Box(this, game.config.width/2, game.config.height/2, 'box', this.guido).setOrigin(0.5, 0.5);
        
        this.guido.box = this.box;

            // testing objects
        this.man = new Dummy_Man(this, game.config.width/2, game.config.height/2 - 100, 'car').setOrigin(0.5, 0.5);
        this.woman = new Dummy_Woman(this, game.config.width/2, game.config.height/2 + 150, 'someSprite').setOrigin(0.5, 0.5);

        this.physics.add.collider(this.box, this.man, this.stopGuidoBouncing, null, this);
        this.physics.add.collider(this.guido, this.woman, this.setGuidoBouncing, null, this);

    }

    update() {

        this.box.update();
        this.guido.update();

    }

    setGuidoBouncing() {

        this.guido.bouncing = true;
        
        let next = this.time.delayedCall(3000, () => {

            this.guido.bouncing = false;
    
        }, null, this);

    }

    stopGuidoBouncing() {

        this.guido.bouncing = false;

    }

    someFunction() {



    }

}
