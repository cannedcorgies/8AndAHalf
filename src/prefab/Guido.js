// Rocket prefab

//// NOTES ///////////

// ground-pounding is giving an INSANE amound of points
    // collision doesn't disable ship sprite - there is some
    // latency before it resets to right of screen

//////////////////////

class Guido extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, state, box = null) {

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

            // panic attack

            this.states = {panicAttack: false, free: false, controlOff: false, suspended: false};
            this.myPhysics = {

                // cutscene
                cutscene: {acceleration: 0, max_x_vel: 0, max_y_vel: 0, ground_drag: 0},

                // scene 1 states
                panicAttack: {acceleration: 8000, max_x_vel: 20000, max_y_vel: 20000, ground_drag: 500},
                free: {acceleration: 500, max_x_vel: 20000, max_y_vel: 20000, ground_drag: 500},
                controlOff: {acceleration: 0.5, max_x_vel: 20000, max_y_vel: 20000, ground_drag: 500},
               
                // scene 2 states
                suspended: {acceleration: 500, max_x_vel: 500, max_y_vel: 500, ground_drag: 2500}

                // scene 2 states

            }

            this.activated = false;              // ignore - for own testing

            this.setPhysicsState(state);


        // set up physics sprite

            this.body.setBounce(0.85);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setMaxVelocity(this.max_x_vel, this.max_y_vel);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world


        // state variables
            this.bouncing = false;
            this.box = box;

            this.bumped = false;

        
        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        if (this.states.panicAttack) {
        
            if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {           // moving left

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

        }   else if (this.states.free) {

            this.body.setBounce(0); 

            if (keyLEFT.isDown) {           // moving left

                this.body.setAccelerationX(-this.acceleration);
            
            } else if (keyRIGHT.isDown) {   // moving right

                this.body.setAccelerationX(this.acceleration);
            
            } else if (Phaser.Input.Keyboard.JustDown(keyUP)) {  

                this.body.setAccelerationY(-this.acceleration);
                this.setPhysicsState("controlOff");
            
            } else if (keyDOWN.isDown) {  

                this.body.setAccelerationY(this.acceleration);
            
            }  else {                          // idle

                this.body.setAccelerationX(0);      // cut acceleration
                this.body.setAccelerationY(0);      // delete this for cool gravity thing
                
                this.body.setDragX(this.ground_drag);      // but don't cut immediately
                this.body.setDragY(this.ground_drag);

            }

        } else if (this.states.suspended) {

            this.body.setBounce(0.2); 

            if (keyLEFT.isDown && ((!this.box.body.touching.left && !this.box.body.blocked.left) || this.bumped)) {           // moving left

                this.body.setAccelerationX(-this.acceleration);
            
            } else if (keyRIGHT.isDown && ((!this.box.body.touching.right && !this.box.body.blocked.right) || this.bumped)) {   // moving right

                this.body.setAccelerationX(this.acceleration);
            
            } else if (keyUP.isDown && ((!this.box.body.touching.up && !this.box.body.blocked.up) || this.bumped)) {   // moving up

                this.body.setAccelerationY(-this.acceleration);
            
            } else if (keyDOWN.isDown && ((!this.box.body.touching.down && !this.box.body.blocked.down) || this.bumped)) {  

                this.body.setAccelerationY(this.acceleration);
            
            }  else {                          // idle

                this.body.setAccelerationX(0);      // cut acceleration
                this.body.setAccelerationY(0);      // delete this for cool gravity thing
                
                this.body.setDragX(this.ground_drag);      // but don't cut immediately
                this.body.setDragY(this.ground_drag);

            }

        }


    }

    
    resetStates() {

        let keys = Object.keys(this.states);        // array of keys

        for (let i = 0; i < keys.length; i++) {     // loop through properties by name
            this.states[keys[i]] = false;
        }

    }


    setPhysicsState(state) {

        if (state in this.states === false) {

            console.log("==============from Guido.js: from setPhysicsState: invalid state!==============");
            return

        }

        this.resetStates();
        this.states[state] = true;

        let physicsState = this.myPhysics[state];

        console.log("from Guido.js: from setPhysicsState: current physics:", state);
        console.log("   -->", physicsState);

        this.acceleration = physicsState.acceleration;
        this.max_x_vel = physicsState.max_x_vel;
        this.max_y_vel = physicsState.max_y_vel;
        this.ground_drag = physicsState.ground_drag;

    }

}