// Border

//// NOTES ///////////
//
//
//
//////////////////////

class Center extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame) {

        console.log("from Guido.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene

        // physics variables

            this.ACCELERATION = 20000;            // rate of change
            this.MAX_X_VEL = 20000;              // as fast as it can go on x axis
            this.MAX_Y_VEL = 20000;              // as fast on y axis
            this.GROUND_DRAG = 500;            // slow-down rate
            this.AIR_DRAG = 500;               // slow-down rate
            this.JUMP_VELOCITY = -1000;         // jump power!
            this.GLIDE_VELOCITY = 150;

            this.activated = false;         // ignore - for own testing

        // set up physics sprite

            // this.body.setBounce(0.2);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setSize(this.width/2);                                // physics size
            this.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world
        
            // overlap check

            this.colliding = false;

        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        /*if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {           // moving left

            this.body.setAccelerationX(-this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {   // moving right

            this.body.setAccelerationX(this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

            this.body.setAccelerationY(-this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {  

            this.body.setAccelerationY(this.ACCELERATION);
        
        }  else {                          // idle */

        this.body.setAccelerationX(0);      // cut acceleration
        this.body.setAccelerationY(0);      // delete this for cool gravity thing
            
        this.body.setDragX(this.GROUND_DRAG);      // but don't cut immediately
        this.body.setDragY(this.GROUND_DRAG);

        


    }

    moveRight() {

        console.log("collided with right");
        //this.body.setAccelerationX(this.ACCELERATION);
        this.body.setVelocityX(100);

    }

    moveLeft() {

        console.log("collided with left");
        //this.body.setAccelerationX(this.ACCELERATION);
        this.body.setVelocityX(-100);

    }

    moveUp() {

        console.log("collided with up");
        //this.body.setAccelerationX(this.ACCELERATION);
        this.body.setVelocityY(-100);

    }

    moveDown() {

        console.log("collided with down");
        //this.body.setAccelerationX(this.ACCELERATION);
        this.body.setVelocityY(100);

    }

}