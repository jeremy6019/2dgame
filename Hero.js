class Hero extends GameObject{
    tick = function(){
        this.x += this.velX;
        this.y += this.velY;
    }
    render=function(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}