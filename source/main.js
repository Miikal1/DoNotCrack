console.log("Hello from main.js");

// Michael Jasper, Modded Rocket Patrol: Multi-Player Color Matching, 4-19-2022, completed in 5 days

let config = {
    type: Phaser.Canvas,
    debug: true,
    width: 640,
    height: 480,
    scene: [Menu, LevelOne, LevelTwo, LevelThree]
};

let keyA, keyD, keyW, keyLEFT, keyRIGHT, keyUP, keyR;

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let game = new Phaser.Game(config);