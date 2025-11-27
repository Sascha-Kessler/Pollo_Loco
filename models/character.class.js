class Character extends MovableObject {
    world;
    width = 200;
    height = 350;
    y = 90;
    speed = 10;
    imagesWalking = ['img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
                        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
                         ];
    

    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.imagesWalking); 
        this.animate();                  
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.moveAnimation();
                this.otherDirection = false;
            }
            else {this.loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png')}
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.moveAnimation();
                this.otherDirection = true;
            }
            if (this.world.keyboard.SPACE) {
                this.y -= 50;
                setTimeout(() => {
                    this.y += 50;
                }, 500)
            }  
            
            this.world.camera_x = -this.x + 100;
    }, 60);   
    }

    moveAnimation() {
            let i = this.currentImage % this.imagesWalking.length
            let path = this.imagesWalking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    jump() {

    }
}