var num=1;
var extra=0;
var nu=1;
//cambiar de foto en foto del mismo pokemon
function adelante(){
    var foto=document.querySelector(".iconder");
    num++;    
    if(num>3){
      num=1;
    }
    foto.src="./Assets/pokemon"+nu+"-"+num+".png";
    barColnext();
}
function atras(){
    var foto=document.querySelector(".iconder");
    num--;    
    if(num<1){
      num=3;
    }
    foto.src="./Assets/pokemon"+nu+"-"+num+".png";
    barColback();
}
//cambiar barra top
function barColnext() {
    const barra=document.querySelector(".barraDer"+num);
    if(num>1){
    extra=num-1;
    }else{
     extra=3;
    }
    const barr=document.querySelector(".barraDer"+extra);
    barra.style.background="white";
    barr.style.background="rgb(85, 85, 85)";
}
function barColback() {
    const barra=document.querySelector(".barraDer"+num);
    if(num<3){
    extra=num+1;
    }else{
     extra=1;
    }
    const barr=document.querySelector(".barraDer"+extra);
    barra.style.background="white";
    barr.style.background="rgb(85, 85, 85)";
}
setInterval(function(){
adelante()},5000);
//estados de botones 
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
//Cambiar de pokemon a otro pokemon

var num=1;
var extra=0;
var nu=1;
/*Lucario */
var po1= new Object();
po1.name="Lucario";
po1.region="Region de Sinnoh";
po1.ubi="16 kilometors de distancia";
po1.desc="Tengo una especial habilidad relacionada con el aura, que me permite entender y asimilar los sentimientos y pensamientos de los demás Pokémon."+
"Poseo un gran sentido de justicia y como buen luchador, me caracteriza la velocidad, agilidad y flexibilidad.Soy de carácter duro y serio, pero me gustaría conocer al Pokémon que tenga un aura compatible con el mío.";
/* Pikachu */
var po2= new Object();
po2.name="Pikachu";
po2.region="Región de Kanto";
po2.ubi="8 kilometors de distancia";
po2.desc="Soy un Pokémon muy afectuoso, me encanta jugar, divertirme y sobre todo comer mucho."+ 
"Cuando entro en confianza me gusta recibir lindos abrazos y caricias; al punto que mi amor evoluciona y puede llegar a ser muy electrizante."+
"Estoy dispuesto a conocerte y capturar momentos muy divertidos juntos.";
/*Oshawott */
var po3= new Object();
po3.name="Oshawott";
po3.region="Región de Teselia";
po3.ubi="24 kilometors de distancia";
po3.desc="Me considero un Pokémon capaz de superar situaciones conflictivas para mí, lo cual me ayuda a ser muy fuerte y valiente."+
"Soy un gran amigo, que demuestra su espíritu de corazón leal y cuando me enamoro, puedo llegar a hacer cualquier cosa, poniendo a prueba todo mi cariño.";
let array =[];
array.push(po1);
array.push(po2);
array.push(po3);

function perfil(){
    nu++;    
    if(nu>3){
      nu=1;
    }
    num=1;
document.querySelector(".LucarioText").innerHTML=array[nu-1].name;
document.querySelector(".worldtext").innerHTML=array[nu-1].region;
document.querySelector(".lugartext").innerHTML=array[nu-1].ubi;
document.querySelector(".descr").innerHTML=array[nu-1].desc;

num=3;
adelante();
}
function perfilant(){
    nu--;    
    if(nu<1){
      nu=3;
    }
    document.querySelector(".LucarioText").innerHTML=array[nu-1].name;
    document.querySelector(".worldtext").innerHTML=array[nu-1].region;
    document.querySelector(".lugartext").innerHTML=array[nu-1].ubi;
    document.querySelector(".descr").innerHTML=array[nu-1].desc;
    num=3;
    adelante();
}

