class Scene2_test_movement extends Phaser.Scene {

    constructor() {
  
      super('scene2_test_movement');
  
    }
  
    preload() {
        
        this.load.image('car', './assets/car.png');
        this.load.image('box', './assets/box.png');

        this.load.image('borderVert', './assets/borderVertical.png');
        this.load.image('borderHoriz', './assets/borderHorizontal.png');

        this.load.image('presence', './assets/presence.png');

        // map
        this.load.tilemapTiledJSON('scene2_trial_JSON', './assets/scene2_trial.json');

        // testing
        this.load.image('spaceship', './assets/spaceship.png');

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

        //creating tilemap
        const map = this.add.tilemap('scene2_trial_JSON');

        console.log("from Scene2_test_movement.js: from constructor(): should've added tilemap");

            // spawn points
        const guidoSpawn = map.findObject('spawn_player', obj => obj.name === 'guido');

            // men spawns
        const man1Spawn = map.findObject('spawn_men', obj => obj.name === 'man_01');
        const man2Spawn = map.findObject('spawn_men', obj => obj.name === 'man_02');

            // women spawns
        const oldSpawn = map.findObject('spawn_women', obj => obj.name === 'old');

        // camera

        this.camera1 = this.cameras.main;
        this.camera1.setBackgroundColor('rgba(135, 135, 135, 1)');  // gray
        this.worldCenter = new Center(this, game.config.width/2, game.config.height/2, 'carl').setOrigin(0.5, 0.5);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        
        // objects

            // guido
        this.guido = new Guido(this, guidoSpawn.x, guidoSpawn.y, 'car', 0, 'suspended').setOrigin(0.5, 0);
        this.camera1.startFollow(this.guido);

        this.presence = this.physics.add.image(this.guido.x, this.guido.y, 'presence');
        this.presence.alpha = 0;

            // box
        this.box = new Box(this, guidoSpawn.x, guidoSpawn.y, 'box', this.guido).setOrigin(0.5, 0.5);
        
        this.guido.box = this.box;

        this.box.alpha = 0;
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
        // this.man1 = new Dummy_Man(this, man1Spawn.x, man1Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man2 = new Dummy_Man(this, man2Spawn.x, man2Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.woman = new Dummy_Woman(this, oldSpawn.x, oldSpawn.y, 'spaceship', this.guido, false, "angry").setOrigin(0.5, 0.5);
        
        //this.physics.add.collider(this.box, this.man, this.stopGuidoBouncing, null, this);
        // this.physics.add.collider(this.box, this.man1);
        this.physics.add.collider(this.box, this.man2);
        this.physics.add.collider(this.guido, this.woman);

        
        this.presence.body.onOverlap = true;
        
        this.physics.add.overlap(this.presence, this.woman);


        this.physics.world.on('overlap', (gameObject1, gameObject2, body1, body2) =>
        {
            console.log("overlapped");
            gameObject2.activated = true;

        })

    }

    update() {

        this.box.update();
        this.guido.update();
        this.woman.update();
        
        this.presenceUpdate();

        if (this.woman.activated) { 
            
            this.physics.moveToObject(this.woman, this.guido, this.woman.acceleration) 
        
        };

        this.someWall.update();
        this.someWallLeft.update();
        this.someWallUp.update();
        this.someWallDown.update();

    }

    presenceUpdate() {

        this.presence.x = this.guido.x;
        this.presence.y = this.guido.y;

    }

    setGuidoBouncing() {

        this.guido.bumped = true;

    }

    overlapFlag() {

        console.log("we overlapped!");

    }

    someFunction() {



    }

}
