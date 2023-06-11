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
            // debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    // TODO: MENU IS DONE; JUST NEED TO ADD INTO THIS LIST
    scene: [MainMenu, Credits, Scene2_test_movement, Scene3, Scene2, Scene1], //add menu later
}

let game = new Phaser.Game(config);

// reserve keyboard vars

let keyLEFT, keyRIGHT, keyDOWN, keyUP, clickLeft;

let keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keySEMICOLON;   // naturals
let keyE, keyR, keyY, keyU, keyI, keyP;                             // sharps

// set UI

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let leftRail = game.config.width/2 - borderPadding * 15;
let rightRail = game.config.width/2 + borderPadding * 15;