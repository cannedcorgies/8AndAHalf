// Rocket prefab

//// NOTES ///////////



//////////////////////

class Piano extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {

        console.log("from Piano.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        this.alpha = 0;     // an "abstract" object


        // piano notes
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
        
        // final check
        console.log("from Piano.js: constructed!");

    }

    update() {      // update method

        // checks

        if (Phaser.Input.Keyboard.JustDown(keyA)) {     // B4

            console.log("A");
            this.B4.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyS)) {     // C5

            console.log("S");
            this.C5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {     // D5

            console.log("D");
            this.D5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyF)) {     // E5

            console.log("F");
            this.E5.play()
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyG)) {     // F5

            console.log("G");
            this.F5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyH)) {     // G5

            console.log("H");
            this.G5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyJ)) {     // A5

            console.log("J");
            this.A5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyK)) {     // B5

            console.log("K");
            this.B5.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyL)) {     // C6

            console.log("L");
            this.C6.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keySEMICOLON)) {     // D6

            console.log("SEMICOLON;");
            this.D6.play();
            
        }

        // sharps
        if (Phaser.Input.Keyboard.JustDown(keyE)) {     // C5#

            console.log("E");
            this.C5Sharp.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyR)) {     // D5#

            console.log("R");
            this.D5Sharp.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyY)) {     // F5#

            console.log("Y");
            this.F5Sharp.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyU)) {     // G5#

            console.log("U");
            this.G5Sharp.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyI)) {     // A5#

            console.log("I");
            this.A5Sharp.play();
            
        }

        if (Phaser.Input.Keyboard.JustDown(keyP)) {     // C6#

            console.log("P");
            this.C6Sharp.play();
            
        }


    }

}