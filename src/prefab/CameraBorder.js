// Camera Border

//// NOTES ///////////
//
//
//
//////////////////////

class CameraBorder extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, center, camera, side, frame) {

        console.log("from CameraBorder.js: constructing", side, "...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene

            this.camera = camera;
            this.center = center;
            this.side = side;

        // set up physics sprite

            // this.body.setBounce(0.2);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setImmovable();

        // displacements

        this.displacements = {
                top: [game.config.width/2, game.config.height/2 - this.camera.displayHeight/2],
                bottom: [game.config.width/2, game.config.height/2 + this.camera.displayHeight/2],
                left: [game.config.width/2 - this.camera.displayWidth/2, game.config.height/2],
                right: [game.config.width/2 + this.camera.displayWidth/2, game.config.height/2]
        }

        this.activeDisplacement = this.displacements[this.side];
        this.displacementUpdate(1.0);


        // overlap check

            this.colliding = false;

        // final check
        
            this.alpha = 0;
            // console.log("from Player.js: constructed!");

    }

    displacementUpdate(zoomQuant) {      // update method

        if (this.side == 'top') {

            this.x = this.center.x; 
            this.y = this.center.y - ((this.camera.displayHeight/2));

        } else if (this.side == 'bottom') {

            this.x = this.center.x; 
            this.y = this.center.y + ((this.camera.displayHeight/2));

        } else if (this.side == 'left') {

            this.x = this.center.x - ((this.camera.displayWidth/2)); 
            this.y = this.center.y;

        } else if (this.side == 'right') {

            this.x = this.center.x + ((this.camera.displayWidth/2)); 
            this.y = this.center.y;

        }

        console.log("from cameraBorder.js: from displacementUpdate: stats:")
        console.log("       -->", this.side);
        console.log("       -->", this.x);
        console.log("       -->", this.y);

    }

}