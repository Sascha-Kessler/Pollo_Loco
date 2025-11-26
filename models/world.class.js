class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png'),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png'),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png')
    ]
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.updateobjects(this.clouds);
        this.updateobjects(this.enemies);
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        

       

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(MovableObject) {
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
    }

    updateobjects(objects) {
        objects.forEach(obj => {
            if (obj.autoMove) {
                obj.moveLeftAutomatic();
            }
        });
    } 

}