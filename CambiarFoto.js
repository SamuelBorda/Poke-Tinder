var num=1;
var carg=1;
var con=0;
function adelante(){
    var foto=document.querySelector(".iconder");
    const barra=document.querySelector(".baIn1");
    num++;    
    carg++;
    if(num>3){
      num=1;
      carg=1;
    }
   setInterval(function(){
        barra.style.width=width+10+"%";
    },100);
    con=0;*/
    foto.src="./Assets/lucario-"+num+".png";
}
setInterval(function(){
adelante()},5000);

function next() {
    const next =document.querySelector(".next");
    next.src="./Assets/next2.png";
}
function next2() {
    const next =document.querySelector(".next");
    next.src="./Assets/next.png";
}
function back() {
    const next =document.querySelector(".back");
    next.src="./Assets/back2.png";
}
function back2() {
    const next =document.querySelector(".back");
    next.src="./Assets/back.png";
}
