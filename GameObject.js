//게임의 등장하는 모든 사물의 최상위클래스
class GameObject{
    //초기화 메서드 정의 
    init=function(container, x, y, velX, velY, width, height, url){
        this.container=container;//어떤 컨데티너에 부착할지 body div에 부착 
        this.x=x;
        this.y=y;
        this.velX=velX; //x축 이동속도 
        this.velY=velY;//y축 이동속도
        this.width=width;
        this.height=height;
        this.url=url; //사용될 이미지 경로 
        
        // 프로그래밍적으로 이미지 객체를 생성해야하므로 DOM api중 
        //이미지 객체에 댈한 레퍼런스 알아야함 
        this.img=document.createElement("img");
        this.img.src= this.url;//이미지 소스
        this.img.style.position="absolute"//절대위치로 지정 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px"; 
        //부모요소에 부착 
        this.container.appendChild(this.img);

    }
    //물리량을 변화시키는 메서드
    //최상위객체는 개별적 하위객ㅊ페들의 행동을 예측할 수 없으브로 
    //아래의 메서드는 하위객체들로 하여금 구현을 강제하면 된다 
    //자바스크립트는 아쉽게도 추상메서드가 없으므로 강제는 불가능 
    tick=function(){

    };
    //변경된 물리량을 화면에 반영하는 렌더링 메서드 
    render = function(){

    }
}