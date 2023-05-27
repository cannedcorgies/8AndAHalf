// Border

//// NOTES ///////////
//
//
//
//////////////////////

class BorderUp extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, guido, center, frame) {

        console.log("from BorderUp.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene

            this.guido = guido;
            this.center = center;

        // physics variables

            this.ACCELERATION = 1000;            // rate of change
            this.MAX_X_VEL = 10000;              // as fast as it can go on x axis
            this.MAX_Y_VEL = 10000;              // as fast on y axis
            this.GROUND_DRAG = 500;            // slow-down rate
            this.AIR_DRAG = 500;               // slow-down rate
            this.JUMP_VELOCITY = -1000;         // jump power!
            this.GLIDE_VELOCITY = 150;

            this.activated = false;         // ignore - for own testing

        // set up physics sprite

            // this.body.setBounce(0.2);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world
            this.body.setImmovable();


        // overlap check

            this.colliding = false;

        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        this.x = this.center.x;
        this.y = this.center.y - this.width/2;

    }

}