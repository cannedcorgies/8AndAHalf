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

      
      this.center = new Center(this, game.config.width/2, game.config.height/2, 'carl')
      this.center.alpha = 0;
      this.guido = new Guido(this, game.config.width/2, game.config.height/2, 'car').setOrigin(0.5, 0);

      this.someWall = new BorderRight(this, this.center.x + 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWall, this.moveRight, null, this);

      this.someWallLeft = new BorderLeft(this, this.center.x - 50, this.center.y, 'borderVert', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallLeft, this.moveLeft, null, this);

      this.someWallUp = new BorderUp(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallUp, this.moveUp, null, this);

      this.someWallDown = new BorderDown(this, this.center.x - 50, this.center.y, 'borderHoriz', this.guido, this.center).setOrigin(0.5, 0);
      this.physics.add.collider(this.guido, this.someWallDown, this.moveDown, null, this);

    }

    update() {

      //Phaser.Physics.Arcade.ArcadePhysics.collide(this.guido, this.someWall, this.center.moveRight());

      this.guido.update();
      
      this.someWall.update();
      this.someWallLeft.update();
      this.someWallUp.update();
      this.someWallDown.update();
      this.center.update();

    }

    someFunction() {



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
