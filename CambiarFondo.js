var estadoMenu=0;
var estadoInfo=0;
function barra(){
    const menu = document.querySelector(".subMenu");
    if(estadoMenu==0){
    menu.style.opacity=1;
    menu.style.visibility="visible";
    estadoMenu=1;
    }else{
     menu.style.opacity=0;
     estadoMenu=0;
     menu.style.visibility="hidden";
    }

}
function Normal(){

  const flechapos1 = document.querySelector(".flecha");
  const flechapos2 = document.querySelector(".flecha2");
    flechapos1.style.opacity=1;
    flechapos2.style.opacity=0;
    const  fondo1=document.querySelector("body");
    const fondo2=document.querySelector(".izq");
    const letras=document.querySelector(".mens");
    const letras2=document.querySelector(".match");
    fondo1.style.background="white";
    fondo2.style.background="rgb(252, 252, 252)";
    fondo2.style.color="black";
    letras.style.color="black";
    letras2.style.color="black";

}
function Dark(){

    const flechapos1 = document.querySelector(".flecha");
    const flechapos2 = document.querySelector(".flecha2");
     flechapos1.style.opacity=0;
     flechapos2.style.opacity=1;  
    const  fondo1=document.querySelector("body");
    const fondo2=document.querySelector(".izq");
    const letras=document.querySelector(".mens");
    const letras2=document.querySelector(".match");
     fondo1.style.background="black";
     fondo2.style.background="rgb(19, 19, 19)";
     fondo2.style.color="white";
     letras.style.color="white";
     letras2.style.color="white";

}
/*
function Match(){
    const match=document.querySelector(".match::after");
    const mens=document.querySelector(".mens::after");
   match.style.opacity=1;
   mens.style.opacity=0;
   match.style.color="pink";
}
function Mens(){
    const match=document.querySelector(".match::after");
    const mens=document.querySelector(".mens::after");
    match.style.opacity=0;
    mens.style.opacity=1;
    match.style.color="grey";
}*/

function info(){
    const datos = document.querySelector(".fondorec");
    const letras=document.querySelector(".LucarioText");
    const info=document.querySelector(".info");
    const world=document.querySelector(".world");
    const region=document.querySelector(".region");
    const des=document.querySelector(".descr");
    const b1=document.querySelector(".iconbutton");
    const b2=document.querySelector(".iconbutton2");
    const b3=document.querySelector(".iconbutton3");
    const b4=document.querySelector(".iconbutton4");
    const b5=document.querySelector(".iconbutton5");
    if(estadoInfo==0){
      datos.style.top="125px";
      datos.style.background="url(./Assets/pokedex3.png)";
      datos.style.borderRadius="35px";
      letras.style.color="black";
      estadoInfo=1;
      info.src = "./Assets/icon-info2.png";
      world.src = "./Assets/icon-world2.png";
      region.src = "./Assets/icon-region2.png";
      des.style.opacity=1;
      b1.style.opacity=0;
      b2.style.background="white";
      b3.style.background="white";
      b4.style.background="white";
      b2.style.border="none";
      b3.style.border="none";
      b4.style.border="none";
      b5.style.opacity=0;
    }else{
        datos.style.top="325px";
        datos.style.background="transparent";
        letras.style.color="white";
        datos.style.borderRadius="none";
        estadoInfo=0;
        info.src = "./Assets/icon-info.png";
        world.src = "./Assets/icon-world.png";
        region.src = "./Assets/icon-region.png";
        des.style.opacity=0;
        b1.style.opacity=1;
        b2.style.background=" transparent";
        b3.style.background=" transparent";
        b4.style.background=" transparent";
        b2.style.border="2px solid rgb(255, 66, 91)";
        b3.style.border="2px solid rgb(0, 183, 255)";
        b4.style.border="2px solid rgb(0, 255, 149)";
        b5.style.opacity=1;
    }

}
