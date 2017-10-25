class JumpMonster extends Monster{

    constructor(x, y){
        super(x, y);
        this.changeY = .1;
        this.velocityY = -4;
    }

    update(arrayHoles, arrayPlatforms, canvas){
        Monster.prototype.update(arrayHoles, arrayPlatforms, canvas);
        this.y += this.velocityY;
        this.velocityY += this.changeY;
    }
}
