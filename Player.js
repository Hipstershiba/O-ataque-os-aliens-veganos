class Player {

    constructor(tempx) {
        this.position = createVector(tempx, 0)
        this.health = 3 
        this.x = tempx
    }
    
    positionDefiner(tempy) {
        this.position.x = tempy
    }
}