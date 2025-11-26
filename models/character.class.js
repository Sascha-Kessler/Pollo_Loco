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
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking); 
        this.animate();                  
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.moveAnimation();
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.moveAnimation();
            }
            if (this.world.keyboard.SPACE) {
                this.y -= 50;
                setTimeout(() => {
                    this.y += 50;
                }, 500)
                
            }
        
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