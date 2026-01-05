class Character extends MovableObject {
    world;
    width = 200;
    height = 350;
    y = 90;
    speed = 10;
    idleTimer = null;
    idleDelay = 5000; 
    isIdlePlaying = false;
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
    ];

    imagesIdle = ['img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png',
                    'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    

    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping); 
        this.loadImages(this.imagesIdle); 
        this.applyGravity();
        this.animate(); 
        this.resetIdleTimer();                 
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

            if (moved || this.isJumpingAnimation) {
                this.resetIdleTimer();
            }

            if (!moved && !this.isIdlePlaying && !this.isAboveGround()) {
                    this.loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
                }
            
            this.world.camera_x = -this.x + 100;
        }, 60);   
    };

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
    }, 130); // hier gerne etwas spielen: 150–180 ausprobieren
}

    startIdleAnimation() {
    this.isIdlePlaying = true;
    let index = 0;

    this.idleInterval = setInterval(() => {
        const path = this.imagesIdle[index];
        this.img = this.imageCache[path];
        index++;

        if (index >= this.imagesIdle.length) {
            clearInterval(this.idleInterval);
            this.idleInterval = null;     // wichtig!
        }
    }, 500);
}

stopIdleAnimation() {
    if (this.idleInterval) {
        clearInterval(this.idleInterval);
        this.idleInterval = null;
    }
    this.isIdlePlaying = false;
}

    resetIdleTimer() {
        this.stopIdleAnimation();

        if (this.idleTimer) clearTimeout(this.idleTimer);

        this.idleTimer = setTimeout(() => {
            this.startIdleAnimation();
        }, this.idleDelay);
        this.isIdlePlaying = false;
    }

}