// Box prefab

//// NOTES ///////////

//////////////////////

class Box extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, guido, state = 'default', frame) {

        console.log("from Box.js: constructing...");

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

            this.states = {default: false};
            this.myPhysics = {

                cutscene: {acceleration: 0, max_x_vel: 0, max_y_vel: 0, ground_drag: 0},

                default: {acceleration: 500, max_x_vel: 500, max_y_vel: 300, ground_drag: 2500},

            }

            this.activated = false;              // ignore - for own testing

            this.setPhysicsState(state);


        // set up physics sprite

            this.body.setBounce(0);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setMaxVelocity(this.max_x_vel, this.max_y_vel);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world


        // state variables
            this.guido = guido;
        
        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        if (this.states.default) {

            this.body.setBounce(0);

            if (keyLEFT.isDown && (!this.body.touching.left && !this.body.blocked.left)) {           // moving left

                this.body.setAccelerationX(-this.acceleration);
            
            } else if (keyRIGHT.isDown && (!this.body.touching.right && !this.body.blocked.right)) {   // moving right

                this.body.setAccelerationX(this.acceleration);
            
            } else if (keyUP.isDown && (!this.body.touching.up && !this.body.blocked.up)) {   // moving up

                this.body.setAccelerationY(-this.acceleration);
            
            } else if (keyDOWN.isDown && (!this.body.touching.down && !this.body.blocked.down)) {  

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

        console.log("from Box.js: from setPhysicsState: current physics:", state);
        console.log("   -->", physicsState);

        this.acceleration = physicsState.acceleration;
        this.max_x_vel = physicsState.max_x_vel;
        this.max_y_vel = physicsState.max_y_vel;
        this.ground_drag = physicsState.ground_drag;

    }

}