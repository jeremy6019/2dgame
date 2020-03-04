class Bullet extends GameObject{
    tick=function(){
       this.x += this.velX;
    }
    render=function(){
       this.img.style.left = this.x+"px";
    }
}