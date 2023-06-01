class Scene2_test_movement extends Phaser.Scene {

    constructor() {
  
      super('scene2_test_movement');
  
    }
  
    preload() {
        
        this.load.image('car', './assets/car.png');
        this.load.image('box', './assets/box.png');

        this.load.image('borderVert', './assets/borderVertical.png');
        this.load.image('borderHoriz', './assets/borderHorizontal.png');

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

        // this.box.alpha = 0;
            // OTHER box
        
        // walls
        this.someWall = new BorderRight(this, this.box.x + 50, this.box.y, 'borderVert', this.guido, this.box).setOrigin(0.5, 0);
        this.physics.add.collider(this.guido, this.someWall, this.moveRight);

        this.someWallLeft = new BorderLeft(this, this.box.x - 50, this.box.y, 'borderVert', this.guido, this.box).setOrigin(0.5, 0);
        this.physics.add.collider(this.guido, this.someWallLeft, this.moveLeft);

        this.someWallUp = new BorderUp(this, this.box.x - 50, this.box.y, 'borderHoriz', this.guido, this.box).setOrigin(0.5, 0);
        this.physics.add.collider(this.guido, this.someWallUp);

        this.someWallDown = new BorderDown(this, this.box.x - 50, this.box.y, 'borderHoriz', this.guido, this.box).setOrigin(0.5, 0);
        this.physics.add.collider(this.guido, this.someWallDown, this.moveDown);

        this.someWall.body.setImmovable(true);
        this.someWallLeft.body.setImmovable(true);
        this.someWallUp.body.setImmovable(true);
        this.someWallDown.body.setImmovable(true);

            // testing objects
        //this.man = new Dummy_Man(this, game.config.width/2, game.config.height/2 + 150, 'car').setOrigin(0.5, 0.5);
        //this.man2 = new Dummy_Man(this, game.config.width/2, game.config.height/2 - 150, 'car').setOrigin(0.5, 0.5);
        this.woman = new Dummy_Woman(this, game.config.width/2, game.config.height/2 + 150, this.guido, 'someSprite').setOrigin(0.5, 0.5);

        //this.physics.add.collider(this.box, this.man, this.stopGuidoBouncing, null, this);
        this.physics.add.collider(this.box, this.man2, this.stopGuidoBouncing, null, this);
        this.physics.add.collider(this.guido, this.woman, this.setGuidoBouncing, null, this);

        this.physics.add.overlap(this.woman, this.box, this.woman.activate);

    }

    update() {

        this.box.update();
        this.guido.update();

        if (this.woman.activated) { this.physics.moveToObject(this.woman, this.guido, this.woman.acceleration) };

        // this.woman.update();

        if (this.box.body.touching.up) { console.log("---> GAHHHHHHHH!!!!!!!!!!!UPPP"); }
        if (this.box.body.touching.down) { console.log("---> GAHHHHHHHH!!!!!!!!!!!DOWNNN"); }

        // console.log("---->touch", this.box.body.touching);
        // console.log("---->block", this.box.body.blocked);

        this.someWall.update();
        this.someWallLeft.update();
        this.someWallUp.update();
        this.someWallDown.update();

    }

    setGuidoBouncing() {

        this.guido.bouncing = true;
        
        let next = this.time.delayedCall(3000, () => {

            this.guido.bouncing = false;
    
        }, null, this);

    }

    stopGuidoBouncing() {

        console.log("should be colliding, box!!");
        console.log("---->", this.box.body.touching);
        console.log("---->", this.box.body.blocked);

        if (this.box.body.touching.up) { console.log("---> GAHHHHHHHH!!!!!!!!!!!UPPP"); }
        if (this.box.body.touching.down) { console.log("---> GAHHHHHHHH!!!!!!!!!!!DOWNNN"); }

        this.guido.bouncing = false;

    }

    someFunction() {



    }

}
