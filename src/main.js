//// 8 1/2 ///////////
//
// 
//
///////////////////////////

console.log("what is happening")

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    // TODO: MENU IS DONE; JUST NEED TO ADD INTO THIS LIST
    scene: [Scene2_test_movement, Scene1, Scene2, Scene3], //add menu later
}

let game = new Phaser.Game(config);

// reserve keyboard vars

let keyF, keyR, keyLEFT, keyRIGHT, keyDOWN, keyUP, clickLeft;

// set UI

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let leftRail = game.config.width/2 - borderPadding * 15;
let rightRail = game.config.width/2 + borderPadding * 15;