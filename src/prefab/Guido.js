// Rocket prefab

//// NOTES ///////////

// ground-pounding is giving an INSANE amound of points
    // collision doesn't disable ship sprite - there is some
    // latency before it resets to right of screen

//////////////////////

class Guido extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, state) {

        console.log("from Guido.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene


        // physics variables

            this.acceleration = 0;
            this.max_x_vel = 0;
            this.max_y_vel = 0;
            this.ground_drag = 0;

            console.log("--> acceleration:", this.acceleration);
            console.log("--> maxx:", this.max_x_vel);
            console.log("--> maxy:", this.max_y_vel);
            console.log("--> drag:", this.ground_drag);

            // panic attack
            this.ACCELERATION_PANIC = 8000;            // rate of change
            this.MAX_X_VEL_PANIC = 20000;              // as fast as it can go on x axis
            this.MAX_Y_VEL_PANIC = 20000;              // as fast on y axis
            this.GROUND_DRAG_PANIC = 500;              // slow-down rate

            // free attack
            this.ACCELERATION_FREE = 8000;            // rate of change
            this.MAX_X_VEL_FREE = 20000;              // as fast as it can go on x axis
            this.MAX_Y_VEL_FREE = 20000;              // as fast on y axis
            this.GROUND_DRAG_FREE = 500;              // slow-down rate

            // ignore
            this.activated = false;              // ignore - for own testing

        
        // physics states

            if (state == 'panic attack') {

                console.log(" --> panic state should've been set..");

                this.acceleration = this.ACCELERATION_PANIC + 0;
                this.max_x_vel = this.MAX_X_VEL_PANIC + 0;
                this.max_y_vel = this.MAX_Y_VEL_PANIC + 0;
                this.ground_drag = this.GROUND_DRAG_PANIC + 0;

                console.log("--> acceleration:", this.acceleration);
                console.log("--> maxx:", this.max_x_vel);
                console.log("--> maxy:", this.max_y_vel);
                console.log("--> drag:", this.ground_drag);

            } else if (state == 'free') {

                this.acceleration = this.ACCELERATION_FREE;
                this.max_x_vel = this.MAX_X_VEL_FREE;
                this.max_y_vel = this.MAX_Y_VEL_FREE;
                this.ground_drag = this.GROUND_DRAG_FREE;

            }


        // set up physics sprite

            this.body.setBounce(0.85);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setMaxVelocity(this.max_x_vel, this.max_y_vel);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world
        
        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        if (this.parentScene.chillin || this.parentScene.panicAttack) {
        
            if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {           // moving left

                console.log("from guido.js: from update(): move left dammit!");
                console.log("--> acceleration:", this.acceleration);
                console.log("--> maxx:", this.max_x_vel);
                console.log("--> maxy:", this.max_y_vel);
                console.log("--> drag:", this.ground_drag);

                this.body.setAccelerationX(-this.acceleration);
            
            } else if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {   // moving right

                this.body.setAccelerationX(this.acceleration);
            
            } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

                this.body.setAccelerationY(-this.acceleration);
            
            } else if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {  

                this.body.setAccelerationY(this.acceleration);
            
            }  else {                          // idle

                this.body.setAccelerationX(0);      // cut acceleration
                this.body.setAccelerationY(0);      // delete this for cool gravity thing
                
                this.body.setDragX(this.ground_drag);      // but don't cut immediately
                this.body.setDragY(this.ground_drag);

            }

        }   else if (this.parentScene.free) {

            if (keyLEFT.isDown) {           // moving left

                this.body.setAccelerationX(-this.acceleration);
            
            } else if (keyRIGHT.isDown) {   // moving right

                this.body.setAccelerationX(this.acceleration);
            
            } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

                this.body.setAccelerationY(-this.acceleration);
            
            } else if (keyDOWN.isDown) {  

                this.body.setAccelerationY(this.acceleration);
            
            }  else {                          // idle

                this.body.setAccelerationX(0);      // cut acceleration
                this.body.setAccelerationY(0);      // delete this for cool gravity thing
                
                this.body.setDragX(this.ground_drag);      // but don't cut immediately
                this.body.setDragY(this.ground_drag);

            }

        }


    }

    statePanic() {

        this.acceleration = this.ACCELERATION_PANIC;
        this.max_x_vel = this.MAX_X_VEL_PANIC;
        this.max_y_vel = this.MAX_Y_VEL_PANIC;
        this.ground_drag = this.GROUND_DRAG_PANIC;

    }

    stateFree() {

        this.acceleration = this.ACCELERATION_PANIC;
        this.max_x_vel = this.MAX_X_VEL_PANIC;
        this.max_y_vel = this.MAX_Y_VEL_PANIC;
        this.ground_drag = this.GROUND_DRAG_PANIC;

    }

}