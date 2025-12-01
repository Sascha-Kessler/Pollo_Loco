class Bottle extends MovableObject {
    world;
    width = 70;
    height = 70;
    y = 350;

    constructor() {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png' );
        this.x = 300 + Math.random()* 2000;
    }
}