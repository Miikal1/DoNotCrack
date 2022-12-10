class LevelThree extends Phaser.Scene {
    constructor() {
        super("levelThree");
    }

    // please work 1

    preload(){
        this.load.image('whiteBackground', 'assets/whiteBackground.png');
        this.load.image('hookOutline', 'assets/hookOutline.png');
        this.load.image('hookStamp', 'assets/hookStamp.png');
        this.load.image('hookOutlineReverse', 'assets/hookOutlineReverse.png');
        this.load.image('hookStampReverse', 'assets/hookStampReverse.png');
        this.load.image('gameOverScreen', 'assets/gameOverScreen.png');
        this.load.image('RetryButton', 'assets/RetryButton.png');
        this.load.image('LevelSelectButton', 'assets/LevelSelectButton.png');
        this.load.image('winScreen', 'assets/winScreen.png');
        this.load.image('LevelSelectButton', 'assets/LevelSelectButton.png');
    }

    create() {

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'whiteBackground').setOrigin(0,0);

        //let typeP1 = Math.floor((Math.random() * 3));

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 100
        }

        //this.num = Math.round(7.27564576743546433475);
        //console.log(this.num);

        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.scoreRight = this.add.text(460, borderUISize + borderPadding*2, this.p2Score, scoreConfig);

        this.speedUp = false;
        // GAME OVER flag
        this.gameOver = false;
        this.levelComplete = false;
        this.counter = 0;

        this.spot1 = this.add.image(65, 310, 'hookOutline');
        this.spot2 = this.add.image(215, 100, 'hookOutline');
        this.spot3 = this.add.image(345, 400, 'hookOutline');
        this.spot4 = this.add.image(505, 180, 'hookOutline');
        this.spot5 = this.add.image(100, 270, 'hookOutlineReverse');
        this.spot6 = this.add.image(250, 60, 'hookOutlineReverse');
        this.spot7 = this.add.image(380, 360, 'hookOutlineReverse');
        this.spot8 = this.add.image(540, 140, 'hookOutlineReverse');

        this.spot5.alpha = 0;
        this.spot6.alpha = 0;
        this.spot7.alpha = 0;
        this.spot8.alpha = 0;

        this.input.on('pointerdown', function (pointer) {

            console.log('down');
    
            if(this.counter <= 3){
                this.stamp = this.add.image(pointer.x, pointer.y, 'hookStamp');
            }
            else if (this.counter >= 4)
            {
                this.stamp = this.add.image(pointer.x, pointer.y, 'hookStampReverse');
            }
    
            if(this.spot1.x == Math.round(this.stamp.x) && this.spot1.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot2.x == Math.round(this.stamp.x) && this.spot2.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot3.x == Math.round(this.stamp.x) && this.spot3.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot4.x == Math.round(this.stamp.x) && this.spot4.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot5.x == Math.round(this.stamp.x) && this.spot5.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot6.x == Math.round(this.stamp.x) && this.spot6.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot7.x == Math.round(this.stamp.x) && this.spot7.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else if(this.spot8.x == Math.round(this.stamp.x) && this.spot8.y == Math.round(this.stamp.y)){
                this.counter = this.counter + 1;
            }
            else{
                this.gameOver = true;
            }

        }, this);  

        // 60-second play clock
        textConfig.fixedWidth = 0;
        console.log(this.time);
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.gameOver = true

        }, null, this);

        this.countdown = this.add.text(5, 5, Math.round(this.clock.getRemainingSeconds()), textConfig);
    }

    update() {

        this.countdown.text = Math.round(this.clock.getRemainingSeconds());

        if (this.counter >= 4){
            this.spot5.alpha = 1;
            this.spot6.alpha = 1;
            this.spot7.alpha = 1;
            this.spot8.alpha = 1;
        }

        if (this.gameOver) {   
            this.countdown.text = " ";              
            this.crack = this.add.image(0,0,'gameOverScreen').setOrigin(0,0);

            var retry = this.add.sprite(200, 350, 'RetryButton').setInteractive();

            retry.on('pointerdown', function (pointer) {

            game.settings = {
                gameTimer: 60000    
            }
            this.scene.start('levelThree');

            }, this);

            var levelSelect = this.add.sprite(400, 350, 'LevelSelectButton').setInteractive();

            levelSelect.on('pointerdown', function (pointer) {

               this.scene.start('menu');

            }, this);
        } 

        if (this.counter == 8){
            this.countdown.text = " ";  
            this.win = this.add.image(0,0, 'winScreen').setOrigin(0,0);

            var levelSelect = this.add.sprite(400, 350, 'LevelSelectButton').setInteractive();

            levelSelect.on('pointerdown', function (pointer) {

                this.scene.start('menu');

            }, this);
        }

        if(this.keyA.isDown) {
            console.log(this.gameOver);
        }

    }

}