class MovableObject {
    x = 30;
    y = 350;
    img;
    width = 100;
    height = 150;
    speed = 0.5;
    autoMove = false;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    accelerationY = 1;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
    this.x += this.speed;

    // Nur laufen, wenn auf dem Boden und nicht mitten in einer Sprung-Anim
    if (!this.isAboveGround() && !this.isJumpingAnimation) {
        this.moveAnimation(this.imagesWalking);
    }

    this.otherDirection = false;
}

moveLeft() {
    this.x -= this.speed;

    if (!this.isAboveGround() && !this.isJumpingAnimation) {
        this.moveAnimation(this.imagesWalking);
    }

    this.otherDirection = true;
}


    moveLeftAutomatic() {
        this.x -= this.speed
    }

    animate(animationArray) {
        setInterval(() => {
        let i = this.currentImage % animationArray.length
        let path = animationArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 100);   
    }

    applyGravity() {
    setInterval(() => {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.accelerationY;
        } else {
            this.speedY = 0;
            this.y = 90; // Bodenhöhe, falls du das so willst
        }
    }, 1000 / 25);
}

    isAboveGround() {
        return this.y < 90;
    }

    jump() {
    // nur springen, wenn auf dem Boden und keine Sprung-Animation läuft
    if (this.isAboveGround() || this.isJumpingAnimation) return;
    if (this.world.keyboard.LEFT) {
                    this.otherDirection = true;
                } else if (this.world.keyboard.RIGHT) {
                    this.otherDirection = false;
                }
    this.speedY = 20;
    this.startJumpAnimation();
}
}


