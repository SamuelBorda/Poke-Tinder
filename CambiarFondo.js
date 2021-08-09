/*
function ModoOscuro(){
 var fond2= document.getElementsByClassName("body");
 fond2.style.backgroundColor(black);
}*/

const menu = document.querySelector(".subMenu");
const buttonConfig=document.querySelector(".buttonConfig");
buttonConfig.addEventListener("click",()=>{menu.classList.toggle("active")});
