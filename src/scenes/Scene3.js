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
      this.load.audio('gunshot', './sounds/Gunshot Sound Effect (Loud and Short).wav')

      this.load.image('key full', './assets/key_full.png');
      this.load.image('key sharp-right', './assets/key_sharpRight.png');
      this.load.image('key sharp-left', './assets/key_sharpLeft.png');
      this.load.image('key sharp-both-sides', './assets/key_bothSides.png');

      // first round
      this.load.image('carla', './assets/Cutaways/FirstRound/carla_resized.png');
      this.load.image('saraghina', './assets/Cutaways/FirstRound/saraghina_resized.png');
      this.load.image('claudia', './assets/Cutaways/FirstRound/claudia_resized.png');
      this.load.image('luisa', './assets/Cutaways/FirstRound/luisa_resized.png');
      this.load.image('old', './assets/Cutaways/FirstRound/old_resized.png');
      this.load.image('mom', './assets/Cutaways/FirstRound/mom_resized.png');

      // second round
      this.load.image('magician', './assets/Cutaways/SecondRound/magician.png');
      this.load.image('priest', './assets/Cutaways/SecondRound/priest.png');
      this.load.image('producer', './assets/Cutaways/SecondRound/producer.png');
      this.load.image('writer', './assets/Cutaways/SecondRound/writer.png');
      this.load.image('writer hung', './assets/Cutaways/SecondRound/writerHung.png');
      this.load.image('father', './assets/Cutaways/SecondRound/father.png');

      // reporters
      this.load.spritesheet('spritesheet_draggingGuido', './assets/Cutaways/Reporters/spritesheet_draggingGuido.png', {
        frameWidth: 150, 
        frameHeight: 76
      });

      this.load.image('at press', './assets/Cutaways/Reporters/01_atPress.png');
      this.load.image('cameras', './assets/Cutaways/Reporters/02_cameras.png');
      this.load.image('panic', './assets/Cutaways/Reporters/03_panic.png');
      this.load.image('interrogation', './assets/Cutaways/Reporters/04_interrogation.png');
      this.load.image('sneak gun', './assets/Cutaways/Reporters/05_sneakGun.png');
      this.load.image('surprised guido', './assets/Cutaways/Reporters/06_surprised.png');

      this.load.spritesheet('spritesheet_slyMan', './assets/Cutaways/Reporters/slyMan_scaledDown.png', {
        frameWidth: 160, 
        frameHeight: 76
      });

      this.load.image('sneaking under table', './assets/Cutaways/Reporters/07_sneakingUnder.png');
      this.load.image('under table', './assets/Cutaways/Reporters/08_underTable.png');

      this.load.image('gun 01', './assets/Cutaways/Reporters/gun_01.png');
      this.load.image('gun 02', './assets/Cutaways/Reporters/gun_02.png');
      this.load.image('gun 03', './assets/Cutaways/Reporters/gun_03.png');
      this.load.image('gun 04', './assets/Cutaways/Reporters/gun_04.png');
      this.load.image('gun 05', './assets/Cutaways/Reporters/gun_05.png');
      this.load.image('gun 06', './assets/Cutaways/Reporters/gun_06.png');
      this.load.image('mom calling out', './assets/Cutaways/Reporters/momCallingOut.png');

      this.load.image('black screen', './assets/blackScreen.png');
      this.load.image('eye cover', './assets/eyeCover.png');

      // idle
      this.load.spritesheet('spritesheet_guidoIdle', './assets/GuidoIdle/guido_idle.png', {
        frameWidth: 150, 
        frameHeight: 76
      });

    }
  
    create() { 

      console.log("creating Scene 3...")

      this.midWay = game.config.width/2;
      this.cutawaysSpawnY = game.config.height/2 - 100;

      // idle animation
      this.guido = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'spritesheet_guidoIdle', 15, "guido idle", 0, 0, -1);
      this.guido.alpha = 1;
      this.guido.play();

      this.eyeCover = this.add.image(this.midWay, this.cutawaysSpawnY - 13, 'eye cover');
      this.eyeCover.scale = 1.5;
      this.eyeCover.alpha = 0;

      // cutaways
        // first round
      this.carla = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'carla', 0, 0, 0, 1);
      this.saraghina = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'saraghina', 0, 0, 0, 1);
      this.claudia = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'claudia', 0, 0, 0, 1);
      this.luisa = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'luisa', 0, 0, 0, 1);
      this.old = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'old', 0, 0, 0, 1);
      this.mom = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'mom', 0, 0, 0, 1);

        // second round
      this.magician = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'magician', 0, 0, 0, 1);
      this.priest = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'priest', 0, 0, 0, 1);
      this.producer = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'producer', 0, 0, 0, 1);
      this.writer = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'writer', 0, 0, 0, 1);
      this.writerHung = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'writer hung', 0, 0, 0, 1);
      this.dad = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'dad', 0, 0, 0, 1);

        // last stretch
      this.draggingGuido = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'spritesheet_draggingGuido', 11, "dragging guido", 0);

      this.atPress = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'at press', 0, 0, 0, 4);
      this.camerasShot = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'cameras', 0, 0, 0, 2);
      this.panic = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'panic', 0, 0, 0, 2);
      this.interrogation = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'interrogation', 0, 0, 0, 0.5);
      this.sneakGun = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'sneak gun', 0, 0, 0, 5);
      this.surprised = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'surprised guido', 0, 0, 0, 3);

      this.slyMan = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'spritesheet_slyMan', 11, "sly boi", 0);

      this.sneakingUnder = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'sneaking under table', 0, 0, 0, 1);
      this.crawling = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'under table', 0, 0, 0, 1);

      this.gun01 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 01', 0, 0, 0, 1);
      this.gun02 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 02', 0, 0, 0, 1);
      this.gun03 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 03', 0, 0, 0, 1);
      this.gun04 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 04', 0, 0, 0, 1);
      this.gun05 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 05', 0, 0, 0, 1);
      this.gun06 = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'gun 06', 0, 0, 0, 1);
      this.momCallingOut = new Cutaway(this, this.midWay, this.cutawaysSpawnY, 'mom calling out', 0, 0, 0, 1);

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
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");  // measure's over

        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("a5");
        this.sheetMusic.push("g5sharp");  //

        if (i == 1) {
          this.sheetMusic.push("a5", this.carla);
        } if (i == 2) {
          this.sheetMusic.push("a5", this.magician)
        } else { 
          this.sheetMusic.push("a5"); }
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
        if (i == 1) {
          this.sheetMusic.push("g5sharp", this.saraghina);
        } if (i == 2) {
          this.sheetMusic.push("g5sharp", this.priest)
        } else { 
          this.sheetMusic.push("g5sharp"); }
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

        if (i == 1) {
          this.sheetMusic.push("e5", this.claudia);
        } if (i == 2) {
          this.sheetMusic.push("e5", this.producer)
        } else { 
          this.sheetMusic.push("e5"); }
        this.sheetMusic.push("d5sharp");
        this.sheetMusic.push("e5");
        this.sheetMusic.push("d5sharp");  //

        // third line
        if (i == 1) {
          this.sheetMusic.push("d5", this.luisa);
        } if (i == 2) {
          this.sheetMusic.push("d5", this.writer)
        } else { 
          this.sheetMusic.push("d5"); }
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");  //

        if (i == 1) {
          this.sheetMusic.push("d5", this.old);
        } if (i == 2) {
          this.sheetMusic.push("d5", this.writerHung)
        } else { 
          this.sheetMusic.push("d5"); }
        this.sheetMusic.push("c5sharp");
        this.sheetMusic.push("d5");
        this.sheetMusic.push("c5sharp");  //

        if (i == 1) {
          this.sheetMusic.push("c5", this.mom);
        } if (i == 2) {
          this.sheetMusic.push("c5", this.father)
        } else { 
          this.sheetMusic.push("c5"); }
        this.sheetMusic.push("c5sharp");  //
      
      }
      // second part
        // fourth line
        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp", this.draggingGuido);
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp", this.atPress);  //

        this.sheetMusic.push("e5", this.camerasShot);
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp", this.panic);
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp", this.interrogation);
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp", this.interrogation);
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("e5", this.interrogation);
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("f5");
        this.sheetMusic.push("f5sharp", this.sneakGun);  //

        this.sheetMusic.push("a5");
        this.sheetMusic.push("a5sharp");
        this.sheetMusic.push("b5", this.surprised);
        this.sheetMusic.push("a5sharp", this.slyMan);
        this.sheetMusic.push("b5");
        this.sheetMusic.push("a5sharp");  //

        //fifth line
        this.sheetMusic.push("b5");
        this.sheetMusic.push("g5sharp", this.sneakingUnder);
        this.sheetMusic.push("a5");       //

        this.sheetMusic.push("e5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("g5sharp");
        this.sheetMusic.push("g5");
        this.sheetMusic.push("g5sharp", this.crawling);
        this.sheetMusic.push("g5");
        this.sheetMusic.push("f5sharp");
        this.sheetMusic.push("e5");       //

        this.sheetMusic.push("c6", this.gun01);   // misc
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6", this.gun02);
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6sharp", this.gun03);
        this.sheetMusic.push("e5");
        this.sheetMusic.push("c6sharp", this.gun04);
        this.sheetMusic.push("f5");       //

        this.sheetMusic.push("d6", this.gun05);
        this.sheetMusic.push("f5");
        this.sheetMusic.push("d6", this.momCallingOut);


      //this.sheetMusic.print();

      this.noteToPlay = this.add.text(game.config.width/2, game.config.height/2, this.sheetMusic.getFront());

      this.theEnd = false;
      this.blackScreen = this.add.image(game.config.width/2, game.config.height/2, 'black screen');
        this.blackScreen.alpha = 0;
      this.gunSFX = this.sound.add('gunshot');

    }

    update() {

      this.camera1.shake(100, 0.0009)
      
      if (this.sheetMusic.size() == 25) {
        this.eyeCover.alpha = 1;
      }

      if (this.sheetMusic.size()) {

        this.piano.update();
        this.noteToPlay.text = this.sheetMusic.translateFront();

      } else if (!this.theEnd) {

        this.theEnd = true;
        this.blackScreen.alpha = 1;
        this.gunSFX.play();

        let next = this.time.delayedCall(10000, () => {

          this.scene.start("scene3");
      
      }, null, this);

      }

    }

    someFunction() {



    }

}
