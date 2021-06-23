var textarea=document.getElementById("textarea");
var remove=document.getElementById("remove");
var play=document.getElementById("play");
var result=document.getElementById("result");
 play.addEventListener("click",()=>{
     result.innerHTML=textarea.value;
     localStorage.setItem("result",textarea.value);
 })
 remove.addEventListener("click",()=>{
     result.innerHTML=" ";
 })
 //localStorage.setItem("result",textarea.value);
 onload=()=>{
     textarea.value=localStorage.getItem("result");
 }