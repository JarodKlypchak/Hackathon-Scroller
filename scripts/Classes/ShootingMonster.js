class ShootingMonster extends Monster{
    constructor(x, y){
        super(x, y);
        this.changeX = 0;
        this.canFire = false;
    }

    display(){
        let picture = c.getContext("2d");
        let img = document.createElement("IMG");
        img.src = "images/ShootingMonster.png";
        picture.drawImage(img, this.x, this.y, this.length, this.length);
    }

    update(arrayHoles, arrayPlatforms, canvas){
        super.update(arrayHoles, arrayPlatforms, canvas);
        if(this.canFire && arrayBullets.length == 0)
            arrayBullets.push(new FireBall(this.x, this.y + 10));
        if(this.canFire && arrayBullets[arrayBullets.length - 1].x < this.x - 300 && arrayBullets[arrayBullets.length - 1].x + 300 <= this.x + this.length && arrayBullets[arrayBullets.length - 2] != arrayBullets[arrayBullets.length - 1].y) {
            arrayBullets.push(new FireBall(this.x, this.y + 10));
        }
    }

    offScreen(screen){
        if(screen == 0 && this.x >= 0 && this.x <= 900) {
            this.canFire = true;
        } else if(screen > 0 && this.x >= (screen - 1) * 900 + 1 && this.x <= screen * 900) {
            this.canFire = true;
        } else {
            this.canFire = false;
        }
    }
}
