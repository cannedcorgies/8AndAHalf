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
        this.load.image('terrainImage', './assets/Terrain/Terrain.png');

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

        config.width = map.widthInPixels;
        config.height = map.heightInPixels;

        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        console.log(map.widthInPixels);
        console.log(config.height);

        // const terrainTileSet = map.addTilesetImage('Terrain (16x16)', 'terrainImage');
        // let terrainLayer = map.createLayer('background', terrainTileSet, 0, 0);

        console.log("from Scene2_test_movement.js: from constructor(): should've added tilemap");

            // spawn points
        const guidoSpawn = map.findObject('spawn_player', obj => obj.name === 'guido');

            // men spawns
        const man1Spawn = map.findObject('spawn_men', obj => obj.name === 'man_01');
        const man2Spawn = map.findObject('spawn_men', obj => obj.name === 'man_02');
        const man3Spawn = map.findObject('spawn_men', obj => obj.name === 'man_03');
        const man4Spawn = map.findObject('spawn_men', obj => obj.name === 'man_04');
        const man5Spawn = map.findObject('spawn_men', obj => obj.name === 'man_05');
        const man6Spawn = map.findObject('spawn_men', obj => obj.name === 'man_06');
        const man7Spawn = map.findObject('spawn_men', obj => obj.name === 'man_07');
        const man8Spawn = map.findObject('spawn_men', obj => obj.name === 'man_08');
        const man9Spawn = map.findObject('spawn_men', obj => obj.name === 'man_09');
        const man10Spawn = map.findObject('spawn_men', obj => obj.name === 'man_10');
        const man11Spawn = map.findObject('spawn_men', obj => obj.name === 'man_11');
        const man12Spawn = map.findObject('spawn_men', obj => obj.name === 'man_12');
        const man13Spawn = map.findObject('spawn_men', obj => obj.name === 'man_13');
        const man14Spawn = map.findObject('spawn_men', obj => obj.name === 'man_14');
        const man15Spawn = map.findObject('spawn_men', obj => obj.name === 'man_15');
        const man16Spawn = map.findObject('spawn_men', obj => obj.name === 'man_16');
        const man17Spawn = map.findObject('spawn_men', obj => obj.name === 'man_17');
        const man18Spawn = map.findObject('spawn_men', obj => obj.name === 'man_18');
        const man19Spawn = map.findObject('spawn_men', obj => obj.name === 'man_19');
        const man20Spawn = map.findObject('spawn_men', obj => obj.name === 'man_20');
        const man21Spawn = map.findObject('spawn_men', obj => obj.name === 'man_21');
        const man22Spawn = map.findObject('spawn_men', obj => obj.name === 'man_22');

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
        this.box.x = this.guido.x;
        this.box.y = this.guido.y;
        
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
        
            // men

        this.man1 = new Dummy_Man(this, man1Spawn.x, man1Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man2 = new Dummy_Man(this, man2Spawn.x, man2Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man3 = new Dummy_Man(this, man3Spawn.x, man3Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man4 = new Dummy_Man(this, man4Spawn.x, man4Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man5 = new Dummy_Man(this, man5Spawn.x, man5Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man6 = new Dummy_Man(this, man6Spawn.x, man6Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man7 = new Dummy_Man(this, man7Spawn.x, man7Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man8 = new Dummy_Man(this, man8Spawn.x, man8Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man9 = new Dummy_Man(this, man9Spawn.x, man9Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man10 = new Dummy_Man(this, man10Spawn.x, man10Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man11 = new Dummy_Man(this, man11Spawn.x, man11Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man12 = new Dummy_Man(this, man12Spawn.x, man12Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man13 = new Dummy_Man(this, man13Spawn.x, man13Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man14 = new Dummy_Man(this, man14Spawn.x, man14Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man15 = new Dummy_Man(this, man15Spawn.x, man15Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man16 = new Dummy_Man(this, man16Spawn.x, man16Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man17 = new Dummy_Man(this, man17Spawn.x, man17Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man18 = new Dummy_Man(this, man18Spawn.x, man18Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man19 = new Dummy_Man(this, man19Spawn.x, man19Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man20 = new Dummy_Man(this, man20Spawn.x, man20Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man21 = new Dummy_Man(this, man21Spawn.x, man21Spawn.y, 'car').setOrigin(0.5, 0.5);
        this.man22 = new Dummy_Man(this, man22Spawn.x, man22Spawn.y, 'car').setOrigin(0.5, 0.5);

        this.physics.add.collider(this.box, this.man1);
        this.physics.add.collider(this.box, this.man2);
        this.physics.add.collider(this.box, this.man3);
        this.physics.add.collider(this.box, this.man4);
        this.physics.add.collider(this.box, this.man5);
        this.physics.add.collider(this.box, this.man6);
        this.physics.add.collider(this.box, this.man7);
        this.physics.add.collider(this.box, this.man8);
        this.physics.add.collider(this.box, this.man9);
        this.physics.add.collider(this.box, this.man10);
        this.physics.add.collider(this.box, this.man11);
        this.physics.add.collider(this.box, this.man12);
        this.physics.add.collider(this.box, this.man13);
        this.physics.add.collider(this.box, this.man14);
        this.physics.add.collider(this.box, this.man15);
        this.physics.add.collider(this.box, this.man16);
        this.physics.add.collider(this.box, this.man17);
        this.physics.add.collider(this.box, this.man18);
        this.physics.add.collider(this.box, this.man19);
        this.physics.add.collider(this.box, this.man20);
        this.physics.add.collider(this.box, this.man21);
        this.physics.add.collider(this.box, this.man22);


            // women

        this.old = new Dummy_Woman(this, oldSpawn.x, oldSpawn.y, 'spaceship', this.guido, false, "angry").setOrigin(0.5, 0.5);
        
        this.physics.add.collider(this.guido, this.old);

        
        this.presence.body.onOverlap = true;
        this.old.body.onOverlap = true;
        
        this.physics.add.overlap(this.presence, this.old);


        this.physics.world.on('overlap', (gameObject1, gameObject2, body1, body2) =>
        {
            console.log("overlapped");
            gameObject2.activated = true;

        })

    }

    update() {

        this.camera1.shake(100, 0.0008)

        this.guido.update();
        this.box.update();
        this.presenceUpdate();


        this.old.update();

        if (this.old.activated) { 
            
            this.physics.moveToObject(this.old, this.guido, this.old.acceleration) 
        
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
