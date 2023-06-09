// Cutaway prefab

//// NOTES ///////////



//////////////////////

class Cutaway extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, numFrames, animsKey, frame, time = 0, animsRepeat = 0) {

        console.log("from Cutaway.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        scene.add.existing(this); 
        this.parentScene = scene;               // save scene for later

        this.time = time;
        this.numFrames = numFrames;
        this.alpha = 0;     // an "abstract" object
        this.scale = 2;

        this.animsKey = animsKey

        this.anims.create({         // simple animation that oscillates between frames 0 and 1, repeating
            key: this.animsKey,
            repeat: animsRepeat,
            frameRate: 12,
            frames: this.anims.generateFrameNumbers(texture, {start: 0, end: numFrames})
        });

        // final check
        console.log("   --> constructed!");

    }

    update() {      // update method

        // checks
        
    }


    print() {

    }


    play() {

        console.log("from Cutaway.js: from play(): playing anims")

        this.alpha = 1;

        if (this.time) {

            let next = this.parentScene.time.delayedCall(this.time * 1000, () => {

                this.alpha = 0;
        
            }, null, this);

        } else {

            this.anims.play(this.animsKey);

            this.on('animationcomplete', () => {

                this.alpha = 0;       // get out of there

            });
        
        }

    }

}