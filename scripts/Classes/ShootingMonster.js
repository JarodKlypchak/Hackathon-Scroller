class ShootingMonster extends Monster {
    constructor(x, y) {
        super(x, y);
        this.changeX = 0;
        this.canFire = false;
        this.bullets = [];
    }

    display() {
        let picture = c.getContext("2d");
        let img = document.createElement("IMG");
        img.src = "images/ShootingMonster.png";
        picture.drawImage(img, this.x, this.y, this.length, this.length);
    }

    update(arrayHoles, arrayPlatforms, canvas) {
        super.update(arrayHoles, arrayPlatforms, canvas);
        if (this.canFire && this.bullets.length == 0) {
            this.bullets.push(new FireBall(this.x, this.y + 10));
        } else if (this.canFire && this.bullets[this.bullets.length - 1].x < this.x - 300) {
            this.bullets.push(new FireBall(this.x, this.y + 10));
        } else if(!this.canFire) {
            this.bullets.splice(0, this.bullets.length);
        }
        for(let i = 0; i < this.bullets.length; i++){
            if(this.bullets[i].leavesScreen()){
                this.bullets.splice(i, 1);
            }
        }
    }

    offScreen(person, screen) {
        super.offScreen(person, screen);
        if (this.x >= person.x - screen.width && this.x <= person.x + screen.width) {
            this.canFire = true;
        } else {
            this.canFire = false;
            this.bullets.splice(0, this.bullets.length);
        }
    }
}