// Rocket prefab

//// NOTES ///////////

// NEXT STEPS:
//  - queue object
//      - print out sheet music
//          - transcribe the notes
//      - figure out queue structure
//          - queue must have efficient:
//              .check()
//                  .front()
//                  .pop()
//              .push()
//              actual queue
//                  [{key: "key", cut: true/false, image: "image key"], {key..."image key"}]

//////////////////////

class Piano extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, b4, c5, d5, e5, f5, g5, a5, b5, c6, d6, marginBottom, texture, frame) {

        console.log("from Piano.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        this.alpha = 0;     // an "abstract" object
        

        // piano keys
            // save the keys images so we can give the illusion of pressing on them
        this.b4 = b4;
        this.c5 = c5;
        this.d5 = d5;
        this.e5 = e5;
        this.f5 = f5;
        this.g5 = g5;
        this.a5 = a5;
        this.b5 = b5;
        this.c6 = c6;
        this.d6 = d6;

        this.marginBottom = marginBottom;           // y origin for all keys
        this.pushDown = marginBottom + 10;          // key displacement distance


        // piano notes (sfx)
        this.B4 = scene.sound.add('B4');
        this.C5 = scene.sound.add('C5');
        this.C5Sharp = scene.sound.add('C5#');
        this.D5 = scene.sound.add('D5');
        this.D5Sharp = scene.sound.add('D5#');
        this.E5 = scene.sound.add('E5');
        this.F5 = scene.sound.add('F5');
        this.F5Sharp = scene.sound.add('F5#');
        this.G5 = scene.sound.add('G5');
        this.G5Sharp = scene.sound.add('G5#');
        this.A5 = scene.sound.add('A5');
        this.A5Sharp = scene.sound.add('A5#');
        this.B5 = scene.sound.add('B5');
        this.C6 = scene.sound.add('C6');
        this.C6Sharp = scene.sound.add('C6#');
        this.D6 = scene.sound.add('D6');
        this.D6Sharp = scene.sound.add('D6#');

        this.sheetMusic;
        
        // final check
        console.log("from Piano.js: constructed!");

    }

    update() {      // update method

        // checks
            // first if per note is to emit the sound
        if (Phaser.Input.Keyboard.JustDown(keyA)) {     // B4

            console.log("A");
            this.B4.play();

            this.sheetMusic.frontNoteCheck("b4");       // send "tick" of last note played
                                                            // if it's the right note,
                                                            // next prompt will display
            
        }

            // if-else is for illusion of pressing down the key
        if (keyA.isDown) {
            this.b4.y = this.pushDown;      // displace key downwards if matching keyboard key being pressed..
        } else {
            this.b4.y = this.marginBottom;  // ..and reset otherwise
        }


        if (Phaser.Input.Keyboard.JustDown(keyS)) {     // C5

            console.log("S");
            this.C5.play();

            this.sheetMusic.frontNoteCheck("c5");
            
        }

        if (keyS.isDown) {
            this.c5.y = this.pushDown;
        } else {
            this.c5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyD)) {     // D5

            console.log("D");
            this.D5.play();

            this.sheetMusic.frontNoteCheck("d5");
            
        }

        if (keyD.isDown) {
            this.d5.y = this.pushDown;
        } else {
            this.d5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyF)) {     // E5

            console.log("F");
            this.E5.play()

            this.sheetMusic.frontNoteCheck("e5");
            
        }

        if (keyF.isDown) {
            this.e5.y = this.pushDown;
        } else {
            this.e5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyG)) {     // F5

            console.log("G");
            this.F5.play();

            this.sheetMusic.frontNoteCheck("f5");
            
        }

        if (keyG.isDown) {
            this.f5.y = this.pushDown;
        } else {
            this.f5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyH)) {     // G5

            console.log("H");
            this.G5.play();

            this.sheetMusic.frontNoteCheck("g5");
            
        }

        if (keyH.isDown) {
            this.g5.y = this.pushDown;
        } else {
            this.g5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyJ)) {     // A5

            console.log("J");
            this.A5.play();

            this.sheetMusic.frontNoteCheck("a5");
            
        }

        if (keyJ.isDown) {
            this.a5.y = this.pushDown;
        } else {
            this.a5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyK)) {     // B5

            console.log("K");
            this.B5.play();

            this.sheetMusic.frontNoteCheck("b5");
            
        }

        if (keyK.isDown) {
            this.b5.y = this.pushDown;
        } else {
            this.b5.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keyL)) {     // C6

            console.log("L");
            this.C6.play();

            this.sheetMusic.frontNoteCheck("c6");
            
        }

        if (keyL.isDown) {
            this.c6.y = this.pushDown;
        } else {
            this.c6.y = this.marginBottom;
        }
        

        if (Phaser.Input.Keyboard.JustDown(keySEMICOLON)) {     // D6

            console.log("SEMICOLON;");
            this.D6.play();

            this.sheetMusic.frontNoteCheck("d6");
            
        }

        if (keySEMICOLON.isDown) {
            this.d6.y = this.pushDown;
        } else {
            this.d6.y = this.marginBottom;
        }
        

        // sharps
        if (Phaser.Input.Keyboard.JustDown(keyE)) {     // C5#

            console.log("E");
            this.C5Sharp.play();

            this.sheetMusic.frontNoteCheck("c5sharp");
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyR)) {     // D5#

            console.log("R");
            this.D5Sharp.play();
            
            this.sheetMusic.frontNoteCheck("d5sharp");

        }

        if (Phaser.Input.Keyboard.JustDown(keyY)) {     // F5#

            console.log("Y");
            this.F5Sharp.play();

            this.sheetMusic.frontNoteCheck("f5sharp");
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyU)) {     // G5#

            console.log("U");
            this.G5Sharp.play();

            this.sheetMusic.frontNoteCheck("g5sharp");
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyI)) {     // A5#

            console.log("I");
            this.A5Sharp.play();

            this.sheetMusic.frontNoteCheck("a5sharp");
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyP)) {     // C6#

            console.log("P");
            this.C6Sharp.play();

            this.sheetMusic.frontNoteCheck("c6sharp");
            
        }


    }

}