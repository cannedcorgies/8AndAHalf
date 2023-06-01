// Box prefab

//// NOTES ///////////

//////////////////////

class Dummy_Woman extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, guido, state = 'default_still', frame) {

        console.log("from 00_Dummy_Woman.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        // activate physics

            this.parentScene.add.existing(this);            // first add to scene
            this.parentScene.physics.add.existing(this);    // then add to PHYSICS scene


        // physics variables

            this.guido = guido;
            this.activated = false;

            this.acceleration = 0;
            this.max_x_vel = 0;
            this.max_y_vel = 0;
            this.ground_drag = 0;

            // panic attack

            this.states = {default_still: false};
            this.myPhysics = {

                cutscene: {acceleration: 0, max_x_vel: 0, max_y_vel: 0, ground_drag: 0},

                default_still: {acceleration: 100, max_x_vel: 100, max_y_vel: 100, ground_drag: 100},

            }

            this.activated = false;              // ignore - for own testing

            this.setPhysicsState(state);


        // set up physics sprite

            this.body.setBounce(0.85);                                       // mutable - just a bit of character - slight reaction to landing
            this.body.setMaxVelocity(this.max_x_vel, this.max_y_vel);       // sets limits to speed
            this.body.setCollideWorldBounds(true);                          // can't exit world
            this.body.setImmovable(true);

        // final check
            // console.log("from Player.js: constructed!");

    }

    update() {      // update method

        // checks

        // if (this.states.default_still) {

        //    this.body.moveTo(this.guido, this.x, this.y, this.acceleration);

        // }//   else if (this.states.free) {

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

    activate() {

        this.activated = true;

    }

}