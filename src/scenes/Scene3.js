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

      this.load.image('key full', './assets/key_full.png');
      this.load.image('key sharp-right', './assets/key_sharpRight.png');
      this.load.image('key sharp-left', './assets/key_sharpLeft.png');
      this.load.image('key sharp-both-sides', './assets/key_bothSides.png');

      this.load.spritesheet('spritesheet_slyMan', './assets/Cutaways/Reporters/slyMan_scaledDown.png', {
        frameWidth: 160, 
        frameHeight: 76
      });

      this.load.spritesheet('spritesheet_guidoIdle', './assets/GuidoIdle/guido_idle.png', {
        frameWidth: 150, 
        frameHeight: 76
      });

    }
  
    create() { 

      console.log("creating Scene 3...")

      this.midWay = game.config.width/2;
      this.cutawaysSpawnY = game.config.height/2 - 100;

      // cutaways
      this.guido = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'spritesheet_guidoIdle', 15, "guido idle", 0, 0, -1);
      this.guido.alpha = 1;
      this.guido.play();

      this.slyMan = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'spritesheet_slyMan', 11, "sly boi", 0);

      // just the cam
      this.camera1 = this.cameras.main;

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

      
      // piano keys

      this.marginSides = 120;
      this.marginBottom = game.config.height - 90;

      this.keyB4 = this.add.image(this.marginSides, this.marginBottom, "key full");
      this.keyC5 = this.add.image(this.keyB4.x + this.keyB4.width, this.marginBottom, "key sharp-right");
      this.keyD5 = this.add.image(this.keyC5.x + this.keyC5.width, this.marginBottom, "key sharp-both-sides");
      this.keyE5 = this.add.image(this.keyD5.x + this.keyD5.width, this.marginBottom, "key sharp-left");
      this.keyF5 = this.add.image(this.keyE5.x + this.keyE5.width, this.marginBottom, "key sharp-right");
      this.keyG5 = this.add.image(this.keyF5.x + this.keyF5.width, this.marginBottom, "key sharp-both-sides");
      this.keyA5 = this.add.image(this.keyG5.x + this.keyG5.width, this.marginBottom, "key sharp-both-sides");
      this.keyB5 = this.add.image(this.keyA5.x + this.keyA5.width, this.marginBottom, "key sharp-left");
      this.keyC6 = this.add.image(this.keyB5.x + this.keyB5.width, this.marginBottom, "key sharp-right");
      this.keyD6 = this.add.image(this.keyC6.x + this.keyC6.width, this.marginBottom, "key sharp-left");

      // piano
      this.piano = new Piano(this, game.config.width/2, game.config.height/2,
          this.keyB4,
          this.keyC5,
          this.keyD5,
          this.keyE5,
          this.keyF5,
          this.keyG5,
          this.keyA5,
          this.keyB5,
          this.keyC6,
          this.keyD6,
          this.marginBottom
      );

      // sheet music
      this.sheetMusic = new SheetMusic(this, 0, 0);
      this.piano.sheetMusic = this.sheetMusic;

      // first part

      for (let i = 0; i < 3; i++) {
        // first line
        this.sheetMusic.push("c5sharp", this.slyMan);
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");  // measure's over

        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");  //

        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");       //

        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5sharp");  //

        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");  //

        // second line
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");  //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");  //

        // third line
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");  //

        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");  //

        this.sheetMusic.push("c5");
        this.sheetMusic.push("c5sharp");  //
      
      }
      // second art
        // fourth line
        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");  //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");  //

        this.sheetMusic.push("a5");
        this.sheetMusic.push("a5sharp");
        this.sheetMusic.push("b5");
        this.sheetMusic.push("a5sharp");
        this.sheetMusic.push("b5");
        this.sheetMusic.push("a5sharp");  //

        //fifth line
        this.sheetMusic.push("b5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("e5");       //

        this.sheetMusic.push("c6");   // misc
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6sharp");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6sharp");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("d6");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("d6");


      //this.sheetMusic.print();

      this.noteToPlay = this.add.text(game.config.width/2, game.config.height/2, this.sheetMusic.getFront());


    }

    update() {

      this.camera1.shake(100, 0.0009)
      this.piano.update();
      this.noteToPlay.text = this.sheetMusic.translateFront();

    }

    someFunction() {



    }

}
