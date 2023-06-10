class Scene1 extends Phaser.Scene {

    constructor() {
  
      super('scene1');
  
    }
  
    preload() {
        
      this.load.image('car', './assets/car.png');

      this.load.image('borderVert', './assets/borderVertical.png');
      this.load.image('borderHoriz', './assets/borderHorizontal.png');

      this.load.image('cameraBorderVert', './assets/cameraBorder_vertical.png');
      this.load.image('cameraBorderHoriz', './assets/cameraBorder_horizontal.png');

      this.load.image('bus', './assets/bus.png');
      this.load.image('manInCar', './assets/manInCar.png');
      this.load.image('oldManAndLady', './assets/oldManAndLady.png');
      this.load.image('others', './assets/others.png');

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
      this.guido = new Guido(this, game.config.width/2, game.config.height/2, 'car', 0, 'panicAttack').setOrigin(0.5, 0);

        // box
      this.center = new Center(this, game.config.width/2, game.config.height/2, 'carl').setOrigin(0.5, 0.5);    // center for walls to follow
      //this.center.alpha = 0;

            // walls
      this.someWall = new BorderRight(this, this.center.x + 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWall, this.moveRight, null, this);

      this.someWallLeft = new BorderLeft(this, this.center.x - 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallLeft, this.moveLeft, null, this);

      this.someWallUp = new BorderUp(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallUp, this.moveUp, null, this);

      this.someWallDown = new BorderDown(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallDown, this.moveDown, null, this);

        // camera bounds
      this.cameraBorder_top = new CameraBorder(this, 0, 0, 'cameraBorderHoriz', this.center, this.camera1, 'top');
      
      this.cameraBorder_bottom = new CameraBorder(this, 0, 0, 'cameraBorderHoriz', this.center, this.camera1, 'bottom');
      
      this.cameraBorder_left = new CameraBorder(this, 0, 0, 'cameraBorderVert', this.center, this.camera1, 'left');
      
      this.cameraBorder_right = new CameraBorder(this, 0, 0, 'cameraBorderVert', this.center, this.camera1, 'right');
      
      this.cameraBounds = [this.cameraBorder_top, this.cameraBorder_bottom, this.cameraBorder_left, this.cameraBorder_right];

        // cutaways
      this.bus = this.add.image(game.config.width/2, game.config.height/2, 'bus');
        this.bus.alpha = 0;
      this.manInCar = this.add.image(game.config.width/2, game.config.height/2, 'manInCar');
        this.manInCar.alpha = 0;
      this.oldManAndLady = this.add.image(game.config.width/2, game.config.height/2, 'oldManAndLady');
        this.oldManAndLady.alpha = 0;
      this.others = this.add.image(game.config.width/2, game.config.height/2, 'others');
        this.others.alpha = 0;

      this.cutawayImages = [this.bus, this.manInCar, this.oldManAndLady, this.others];


      // UI - configurations
      let uiConfig = {

        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#000000',
        color: '#ffffff',
        align: 'right',
        padding: {

            top: 5,
            bottom: 5,

        },
        fixedWidth: 100

      }

        // clock
      this.gameOver = false;          // flag for game over state
      this.chillinTime = 15000;        // 56000 ms def;
      this.chillin = true;
      this.panicAttackTime = 54000;    // 54000 ms def;
      this.panicAttack = false;
      this.free;

      uiConfig.fixedWidth = 0;
      this.clock = this.time.delayedCall(this.chillinTime, () => {    // start the states of the scene
                                                                        // goes from "tutorial" to timed scene
        this.chillin = false;
        this.panicAttack = true;
        this.startPanicAttack();

      }, null, this);

        // UI - clock
      this.remainingTime = 0;
      this.clockUI = this.add.text(game.config.width/2, borderUISize + borderPadding*2, this.remainingTime, uiConfig).setOrigin(0, 0);
      this.clockUI.alpha = 0;
      this.clockUI.setScrollFactor(0);


      // cutaways
        // at certain time intervals, the player is shown cuts from the movie scene
      this.cutaway = 0;
      this.cutawayDistances = [9000, 18000, 10000];
      this.cutawayTime = [1000, 1100, 750]
      this.zoomie = 0.3;

      this.zoom();  // set initial zoom

    }

    update() {

      if (this.guido.y < -500) {

        this.scene.start("scene2_test_movement")

      }
      //this.camera.shake(100, this.shake)
      this.camera1.shake(100, 0.0008)

      // clock ui update
      if (this.panicAttack) {

        this.remainingTime = Math.floor(this.clock.getRemainingSeconds());
        this.clockUI.text = this.remainingTime;

        if (this.remainingTime <= 10) {
          this.clockUI.setColor("#ff0000");
        }

      } else { this.clockUI.alpha = 0; }

      if (this.gameOver) {
        this.scene.start("scene2");
      }

      // character movement
      this.guido.update();
      

      // walls deceleration
      this.someWall.update();
      this.someWallLeft.update();
      this.someWallUp.update();
      this.someWallDown.update();
      this.center.update();

    }

    startPanicAttack() {

      console.log("from Scene1.js: from startPanicAttack(): panic attack started");

      this.cutawayNext();   // starts cutaways

      this.clock = this.time.delayedCall(this.panicAttackTime, () => {

        this.camera1.setZoom(1.0);
        
        this.someWallUp.destroy();
        this.clockUI.alpha = 0;

        for (let i = 0; i < this.cameraBounds.length; i++) {
          this.cameraBounds[i].destroy();
        }

        this.panicAttack = false;
        this.free = true;

        this.guido.setPhysicsState("free");
        this.guido.body.setCollideWorldBounds(false);

      }, null, this);

    }

    cutawayNext() {

      console.log("from Scene1.js: from cutawayNext(): called!");

      if (this.cutaway <= 3) {

        this.cutaway += 1;
      
        if (this.cutaway == 1) { 

          console.log("   --> first one");

          this.clockUI.alpha = 1;
          this.cueCam();

        } else {

          this.camera1.setZoom(1.0);
          
          console.log("   --> NOT first one");

          this.cutawayImages[this.cutaway - 2].alpha = 1;
          this.clockUI.alpha = 0;

          let next = this.time.delayedCall(this.cutawayTime[this.cutaway - 2], () => {

            this.cutawayImages[this.cutaway - 2].alpha = 0;
            this.clockUI.alpha = 1;
            
            this.cueCam();    // at end of each cutaway timer, begins the next
    
          }, null, this);
        }

      }

    }

    cueCam() {

      console.log("from Scene1.js: from cueCam(): called!");

      if (this.cutaway != 1) {
        let zoomQuant = (this.cutaway-1) * this.zoomie;
        this.camera1.setZoom(1.0 + (zoomQuant));
      }

      let next = this.time.delayedCall(this.cutawayDistances[this.cutaway - 1], () => {

        this.zoom();
        this.cutawayNext();

      }, null, this);

    }

    zoom() {

      let zoomQuant = this.cutaway * this.zoomie;

      let pastDistanceX = this.center.x - this.guido.x;
      let pastDistanceY = this.center.y - this.guido.y;

      this.center.x = game.config.width/2;
      this.center.y = game.config.height/2;
      this.guido.x = this.center.x - pastDistanceX;
      this.guido.y = this.center.y - pastDistanceY;

      console.log("from Scene1.js: from zoom(): closing in camera...");
      this.camera1.setZoom(1.0 + (zoomQuant));

      console.log("   --> display width:", this.camera1.displayWidth);
      console.log("   --> display height:", this.camera1.displayHeight);

      if (this.cutaway >= 1) {

        for (let i = 0; i < this.cameraBounds.length; i++) {
          this.cameraBounds[i].displacementUpdate(zoomQuant);
          //console.log("from Scene1.js: from zoom(): updating a bound")
        }

      }

      this.clockUI.y = this.cameraBorder_top.y + 10;
      this.clockUI.x = this.center.x;

    }

    moveRight() {


      if (this.someWall.x <= this.cameraBorder_right.x) { this.center.moveRight(); }

    }

    moveLeft() {

      if (this.someWallLeft.x >= this.cameraBorder_left.x) { this.center.moveLeft(); }

    }

    moveUp() {

      if (this.someWallUp.y >= this.cameraBorder_top.y) { this.center.moveUp(); }

    }

    moveDown() {

      if (this.someWallDown.y < this.cameraBorder_bottom.y) { this.center.moveDown(); }

    }

}
