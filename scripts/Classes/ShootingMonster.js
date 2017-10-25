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
        if(this.canFire && arrayBullets[arrayBullets.length - 1].x < this.x - 300 && arrayBullets[arrayBullets.length - 1].x + 295 >= this.x)
            arrayBullets.push(new FireBall(this.x, this.y + 10));
    }

    offScreen(person, canvas){
        super.offScreen(person, canvas);
        if(!(person.x + canvas.width > this.x)){
            this.canFire = false;
        } else{
            this.canFire = true;
        }
    }
}
