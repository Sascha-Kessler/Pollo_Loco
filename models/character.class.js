class Character extends MovableObject {
    world;
    width = 200;
    height = 350;
    y = 90;
    speed = 10;
    isJumpingAnimation = false;
    imagesWalking = ['img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
                         ];

    imagesJumping = [
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
                        'img_pollo_locco/img/2_character_pepe/3_jump/J-39.png' 
    ]
    

    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);  
        this.applyGravity();
        this.animate();                  
    }


    animate() {
        setInterval(() => {
            let moved = false;

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                moved = true;
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                moved = true;
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                
            } 

            // Nur Idle, wenn:
        // - nicht gelaufen
        // - keine Sprunganimation läuft
        // - auf dem Boden
        if (!moved && !this.isJumpingAnimation && !this.isAboveGround()) {
            this.loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        }
            
            
            this.world.camera_x = -this.x + 100;
    }, 60);   
    }

    moveAnimation(images) {
            let i = this.currentImage % images.length
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    startJumpAnimation() {
    this.isJumpingAnimation = true;
    let index = 0;

    const interval = setInterval(() => {
        let path = this.imagesJumping[index];
        this.img = this.imageCache[path];
        index++;

        // Wenn alle Bilder einmal gezeigt wurden:
        if (index >= this.imagesJumping.length) {
            clearInterval(interval);
            this.isJumpingAnimation = false;
        }
    }, 260); // hier gerne etwas spielen: 150–180 ausprobieren
}

}