// Rocket prefab

//// NOTES ///////////

// ground-pounding is giving an INSANE amound of points
    // collision doesn't disable ship sprite - there is some
    // latency before it resets to right of screen

//////////////////////

class Guido extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {

        console.log("from Guido.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene

        // physics variables

            this.ACCELERATION = 5000;            // rate of change
            this.MAX_X_VEL = 2000;              // as fast as it can go on x axis
            this.MAX_Y_VEL = 2000;              // as fast on y axis
            this.GROUND_DRAG = 3000;            // slow-down rate
            this.AIR_DRAG = 500;               // slow-down rate
            this.JUMP_VELOCITY = -1000;         // jump power!
            this.GLIDE_VELOCITY = 150;

            this.activated = false;         // ignore - for own testing

        // set up physics sprite

            this.body.setBounce(0.5);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setSize(this.width/2);                                // physics size
            this.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world


        // checks

            this.glidable = false;      // simple boolean for whether or not glide available
            this.grounded = false;
        
        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        /*if (this.body.blocked.down) {   // if on ground..

            this.glidable = false;      // gliding not possible
            this.grounded = true;       // grounded

            this.body.setDragX(this.GROUND_DRAG);   // more immediate deceleration

        } else {                        // otherwise..

            this.grounded = false;      // NOT on ground

            this.body.setDragX(this.AIR_DRAG);  // less control on ground

        }*/

        // movement

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {           // moving left

            this.body.setAccelerationX(-this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {   // moving right

            this.body.setAccelerationX(this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

            this.body.setAccelerationY(-this.ACCELERATION);
        
        } else if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {  

            this.body.setAccelerationY(this.ACCELERATION);
        
        }  else {                          // idle

            this.body.setAccelerationX(0);      // cut acceleration
            
            this.body.setDragX(this.GROUND_DRAG);      // but don't cut immediately

        }


    }

}