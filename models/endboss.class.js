class Endboss extends MovableObject {
    world;
    width = 300;
    height = 400;
    imagesAlert = [ 'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
                    'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'                
        ];

        constructor() {
        super().loadImage('img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.imagesAlert);
        this.animate(this.imagesAlert);
        this.y = 55;
        this.autoMove = false;
    }
    
    setPositionUsingWorld() {
    this.x = this.world.level.level_end_x;
}
}
