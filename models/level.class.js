class Level {
    enemies;
    clouds;
    backgroundObjects = [];
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.createBackground()
    }

    createBackground(){
        const backgroundSet = [
        'img_pollo_locco/img/5_background/layers/air.png',
        'img_pollo_locco/img/5_background/layers/1_first_layer/1.png',
        'img_pollo_locco/img/5_background/layers/2_second_layer/1.png',
        'img_pollo_locco/img/5_background/layers/1_first_layer/1.png'
    ];

    const backgroundSet2 = [
        'img_pollo_locco/img/5_background/layers/air.png',
        'img_pollo_locco/img/5_background/layers/1_first_layer/2.png',
        'img_pollo_locco/img/5_background/layers/2_second_layer/2.png',
        'img_pollo_locco/img/5_background/layers/1_first_layer/2.png'
    ];
    this.backgroundObjects = [];
    const segments = 4;
    for (let index = -1; index < segments; index++) {
        const x = index * 720;
        const currentSet = (index % 2 === 0)
                            ? backgroundSet
                            : backgroundSet2;
        currentSet.forEach(path => {
        this.backgroundObjects.push(new BackgroundObject(path, x));
    });
    }
    }
}