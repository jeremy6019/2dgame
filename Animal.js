class Animal{
    //멤버변수에 대해 var를 사용하지 않으며
    //선언위치 또한 메서드안에 선언해야 한다
    //자바처럼 생성자명이 클래스명을 따라가지 않음 
    init=function(name,age){
        this.name = namne;
        this.age= age;
    }
    run = function(){
         console.log("동물이 뛰어요");
    }
}