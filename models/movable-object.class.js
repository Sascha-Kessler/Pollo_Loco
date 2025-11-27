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
        console.log('Moving right');
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
}


