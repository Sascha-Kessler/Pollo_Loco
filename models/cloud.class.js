class Cloud extends MovableObject {
    y = 20;
    height = 400;
    width = 500;
    static lastX = 0;

    constructor() {
    super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
        // Mindestabstand zwischen Wolken
        const minDistance = 400;         // kannst du anpassen
        const randomOffset = Math.random() * 200; // bisschen Zufall
        this.x = Cloud.lastX + minDistance + randomOffset;
        Cloud.lastX = this.x;
        this.speed = 0.05;
        this.autoMove = true;
    }
}