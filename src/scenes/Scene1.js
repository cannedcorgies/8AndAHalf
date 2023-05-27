class Scene1 extends Phaser.Scene {

    constructor() {
  
      super('scene1');
  
    }
  
    preload() {
        
      this.load.image('car', './assets/car.png');
      this.load.image('borderVert', './assets/borderVertical.png');
      this.load.image('borderHoriz', './assets/borderHorizontal.png');

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

      
      // objects

        // guido
      this.guido = new Guido(this, game.config.width/2, game.config.height/2, 'car', 0, 'panicAttack').setOrigin(0.5, 0);

        // box
      this.center = new Center(this, game.config.width/2, game.config.height/2, 'carl').setOrigin(0.5, 0);    // center for walls to follow
      this.center.alpha = 0;

            // walls
      this.someWall = new BorderRight(this, this.center.x + 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWall, this.moveRight, null, this);

      this.someWallLeft = new BorderLeft(this, this.center.x - 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallLeft, this.moveLeft, null, this);

      this.someWallUp = new BorderUp(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallUp, this.moveUp, null, this);

      this.someWallDown = new BorderDown(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallDown, this.moveDown, null, this);

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
      this.chillinTime = 5000;        // 56000 ms def;
      this.chillin = true;
      this.panicAttackTime = 5000;    // 54000 ms def;
      this.panicAttack = false;
      this.free;

      uiConfig.fixedWidth = 0;
      this.clock = this.time.delayedCall(this.chillinTime, () => {

        this.chillin = false;
        this.panicAttack = true;
        this.startPanicAttack();

      }, null, this);

        // UI - clock
      this.remainingTime = 0;
      this.clockUI = this.add.text(game.config.width/2, borderUISize + borderPadding*2, this.remainingTime, uiConfig).setOrigin(0, 0);
      this.clockUI.alpha = 0;

    }

    update() {

      // clock ui update
      if (this.panicAttack) {

        this.clockUI.alpha = 1;
        this.remainingTime = Math.floor(this.clock.getRemainingSeconds());
        this.clockUI.text = this.remainingTime;

        if (this.remainingTime <= 10) {
          this.clockUI.setColor("#ff0000");
        }

      }

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

      this.clock = this.time.delayedCall(this.panicAttackTime, () => {

        this.someWallUp.destroy();
        this.clockUI.alpha = 0;

        this.panicAttack = false;
        this.free = true;

        this.guido.setPhysicsState("free");

      }, null, this);

    }

    moveRight() {


      if (this.someWall.x < game.config.width) { this.center.moveRight(); }

    }

    moveLeft() {

      if (this.someWallLeft.x >= 0) { this.center.moveLeft(); }

    }

    moveUp() {

      if (this.someWallUp.y >= 0) { this.center.moveUp(); }

    }

    moveDown() {

      if (this.someWallDown.y < game.config.height) { this.center.moveDown(); }

    }

}
