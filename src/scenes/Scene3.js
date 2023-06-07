class Scene3 extends Phaser.Scene {

    constructor() {
  
      super('scene3');
  
    }
  
    preload() {

      // sound effects
      this.load.audio('B4', './sounds/B4.wav');
      this.load.audio('C5', './sounds/C5.wav');
      this.load.audio('C5#', './sounds/C5Sharp.wav');
      this.load.audio('D5', './sounds/D5.wav');
      this.load.audio('D5#', './sounds/D5Sharp.wav');
      this.load.audio('E5', './sounds/E5.wav');
      this.load.audio('F5', './sounds/F5.wav');
      this.load.audio('F5#', './sounds/F5Sharp.wav');
      this.load.audio('G5', './sounds/G5.wav');
      this.load.audio('G5#', './sounds/G5Sharp.wav');
      this.load.audio('A5', './sounds/A5.wav');
      this.load.audio('A5#', './sounds/A5Sharp.wav');
      this.load.audio('B5', './sounds/B5.wav');
      this.load.audio('C6', './sounds/C6.wav');
      this.load.audio('C6#', './sounds/C6Sharp.wav');
      this.load.audio('D6', './sounds/D6.wav');
      this.load.audio('D6#', './sounds/D6Sharp.wav');

    }
  
    create() { 

      console.log("creating Scene 3...")

      // naturals
      keyA =
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);   // B
      keyS = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);   // C
      keyD = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);   // D
      keyF = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);   // E
      keyG = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);   // F
      keyH = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);   // G
      keyJ = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);   // A
      keyK = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);   // B
      keyL = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);   // C
      keySEMICOLON = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEMICOLON);                               // D

      // sharps
      keyE = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);   // low-C sharp
      keyR = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);   // low-D sharp
      keyY = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);   // F sharp
      keyU = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);   // G sharp
      keyI = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);   // A sharp
      keyP = 
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);   // high-C sharp

      
      console.log(Phaser.Input.Keyboard.KeyCodes);


      // piano
      this.piano = new Piano(this, game.config.width/2, game.config.height/2);

    }

    update() {

      this.piano.update();

    }

    someFunction() {



    }

}
