/*
 * class Monster
 * takes x, y in constructor
 * displays monster and keeps monster on platform or ground and prevents from
 * them killing themselves
 */
class Monster {

    /*
     * constructor takes x, and y value
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.changeX = 1.2;
    }

    /*
     * displays monster given canvas
     */
    display() {
        let monster = c.getContext("2d");
        var img=document.createElement("IMG");
        img.src="images/gumba.png";
        monster.drawImage(img,this.x, this.y, 25, 25);
    }

    /*
     * update funtion for monster calls arrayHoles, arrayPlatforms, and canvas
     */
    update(arrayHoles, arrayPlatforms, arrayMonsters, canvas) {
        this.x -= this.changeX;
        /*
         * checks holes and sees if it's on it so it doesn't fall off
         */
        for (let i = 0; i < arrayHoles.length; i++) {
            if (this.x <= (arrayHoles[i].getX() + arrayHoles[i].getWidth() + 10) && this.x >= (arrayHoles[i].getX() - 10)) {
                this.changeX *= -1;
            }
        }

        /*
         * checks platforms and sees if it's on it so it doesn't fall off
         */
        for (let i = 0; i < arrayPlatforms.length; i++) {
            if (this.x <= (arrayPlatforms[i].getX() + arrayPlatforms[i].getWidth()) && this.x >= (arrayPlatforms[i].getX())) {
                this.changeX *= -1;
            }
        }
        if (this.x >= canvas.width - 10 || this.x <= 10) {
            this.changeX *= -1;
        }
    }

    /*
     * if person stomps monster return true
     */
    stomped(person){
        if(person.x >= this.x - 25 && person.x <= this.x + 25 && person.y + 32 >= this.y && person.y <= this.y - 25){
            return true;
        }
    }

    /*
     * returns X
     */
    getX(){
        return this.x;
    }

    /*
     * returns Y
     */
    getY(){
        return this.y;
    }
}