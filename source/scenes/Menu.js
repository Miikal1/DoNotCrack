
class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {
        // load audio
        this.load.image('title', 'assets/title.png');
        this.load.image('LevelOne', 'assets/LevelOne.png');
        this.load.image('LevelTwo', 'assets/LevelTwo.png');
        this.load.image('LevelThree', 'assets/LevelThree.png');
      }

    create(){
        
      this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'title').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 0
        }
        
        this.choice = 0;

        var levelOne = this.add.sprite(100, 400, 'LevelOne').setInteractive();

        levelOne.on('pointerdown', function (pointer) {

          game.settings = {
            gameTimer: 60000    
          }
          this.scene.start('levelOne');

        }, this);

        var levelTwo = this.add.sprite(300, 400, 'LevelTwo').setInteractive();

        levelTwo.on('pointerdown', function (pointer) {

          game.settings = {
            gameTimer: 60000    
          }
          this.scene.start('levelTwo');

        }, this);

        var levelThree = this.add.sprite(500, 400, 'LevelThree').setInteractive();

        levelThree.on('pointerdown', function (pointer) {

          game.settings = {
            gameTimer: 60000    
          }
          this.scene.start('levelThree');

        }, this);
    }  

    update() {
     
 
    }  

}