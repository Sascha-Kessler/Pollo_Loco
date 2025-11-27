class BackgroundObject extends MovableObject {
    y = 0;
    

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.width = 720;
        this.height = 480;
        this.x = x;
    }
}