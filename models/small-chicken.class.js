class SmallChicken extends MovableObject {
    width = 80;
    height = 60;
    y = 380;
        imagesWalking = ['img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
                         'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
                         'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
        ];

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.animate(this.imagesWalking);
        this.x = 450 + Math.random()* 2000;
        this.speed = 1+ Math.random()* 3;
        this.autoMove = true;  
    }
}