function login(){

let correo =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(
correo === "maybeth.sanmartin@cpdm.molokai.cl"
&&
password === "1234"
){

document.getElementById("login-container").style.display="none";

document.getElementById("contenido").style.display="block";

}else{

document.getElementById("mensaje").innerHTML =
"Correo o contraseña incorrectos";

document.getElementById("mensaje").style.color =
"red";

}

}

document.addEventListener("DOMContentLoaded",()=>{

const formulario =
document.querySelector("form");

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Mensaje enviado correctamente 💕");

});

});