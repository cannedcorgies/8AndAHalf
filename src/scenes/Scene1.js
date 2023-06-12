////////////////
//
// this scene is interprets the panic
//  attack guido has at the beginning
//  of the film
//
//  prefabs
//  - center
//  - guido
//  - borders left-thru-right
//  - camera border
//
//  NOTE ABOUT PHYSICS SPRITES
//  - guido
//  - center
//  physics sprites here are "state" based
//  - they receive a state label, which each
//    carry their own physics attributes
//    and directly determine movement of
//    the sprites
//
////////////////

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
      this.cutawayDistances = [9000, 18000, 10000];   // how long in between cuts
      this.cutawayTime = [1000, 1100, 750]            // how long each cutaway last
      this.zoomie = 0.3;                              // camera zoom after cut

      this.zoom();  // set initial zoom

    }

    update() {

      if (this.guido.y < -500) {

        this.scene.start("scene2")

      }
      
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

    // simple begins the stage with the timer
    startPanicAttack() {

      console.log("from Scene1.js: from startPanicAttack(): panic attack started");

      this.cutawayNext();   // starts cutaways

      // at the end of this TIMED stage, liberate guido
      this.clock = this.time.delayedCall(this.panicAttackTime, () => {

        this.camera1.setZoom(1.0);    // zoom is reset
        
        this.someWallUp.destroy();    // upper wall is broken as to let guido through
        this.clockUI.alpha = 0;

        for (let i = 0; i < this.cameraBounds.length; i++) {    // not bounded by the screen any longer
          this.cameraBounds[i].destroy();
        }

        this.panicAttack = false;
        this.free = true;

        this.guido.setPhysicsState("free");             // transition guido to
        this.guido.body.setCollideWorldBounds(false);   //    another physics state

      }, null, this);

    }

    // set off the next cutaway timer
    cutawayNext() {

      if (this.cutaway <= 3) {    // while there are still cutaways left...

        this.cutaway += 1;
      
        // the edge case
        if (this.cutaway == 1) { 

          this.clockUI.alpha = 1;
          this.cueCam();

        } else {

          //  1. pull camera back out to show whole cutaway

          this.camera1.setZoom(1.0);
          
          this.cutawayImages[this.cutaway - 2].alpha = 1;
          this.clockUI.alpha = 0;

          //  2. set timer to reset cutaway visibility
          //    plus zoom camera back in

          let next = this.time.delayedCall(this.cutawayTime[this.cutaway - 2], () => {

            this.cutawayImages[this.cutaway - 2].alpha = 0;
            this.clockUI.alpha = 1;
            
            this.cueCam();    // at end of each cutaway timer, begins the next
    
          }, null, this);
        }

      }

    }

    cueCam() {

      if (this.cutaway != 1) {
        let zoomQuant = (this.cutaway-1) * this.zoomie;
        this.camera1.setZoom(1.0 + (zoomQuant));
      }

      // after the cutaway, queue next one plus zoom-in
      let next = this.time.delayedCall(this.cutawayDistances[this.cutaway - 1], () => {

        this.zoom();
        this.cutawayNext();

      }, null, this);

    }

    // the zoom function exists to reposition and recenter camera
    //  plus objects every cutaway
    //  - it's done in such a way that the close-up seemingly occurs
    //    naturally, however, the box and guido are also recentered
    //    (but proportionally) as to get the player out of world corners
    zoom() {

      let zoomQuant = this.cutaway * this.zoomie;

      let pastDistanceX = this.center.x - this.guido.x;
      let pastDistanceY = this.center.y - this.guido.y;

      // recenter the box
      this.center.x = game.config.width/2;
      this.center.y = game.config.height/2;
      // recenter guido proportionately to where he last was within the box
      this.guido.x = this.center.x - pastDistanceX;
      this.guido.y = this.center.y - pastDistanceY;

      // bring cam just a bit closer
      this.camera1.setZoom(1.0 + (zoomQuant));

      // change "world bounds" every time the camera zoom
      if (this.cutaway >= 1) {    // (except at the very beginning when cam is not yet zoomed)

        for (let i = 0; i < this.cameraBounds.length; i++) {
          this.cameraBounds[i].displacementUpdate(zoomQuant);   // change the camera's distance
        }

      }

      // finally, recenter camera on the top of the screen
      this.clockUI.y = this.cameraBorder_top.y + 10;
      this.clockUI.x = this.center.x;

    }

    // the following are called when the player collides when anyone of the walls
      // the walls all, connected to an invisible center, chug along behind the center
      // depending on which wall was collided, the center will move in that direction

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
