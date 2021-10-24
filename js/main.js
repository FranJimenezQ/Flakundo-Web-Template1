//nav
//Inica propiedades de libreria scroll
AOS.init();

//variable para la ubicacion del usuario en la pagina
let ubicacionPrin = window.pageYOffset;
//Funcion para esconder el nav al hacer scroll
window.addEventListener("scroll", function(){
    let desplazamientoUsuario = window.pageYOffset;
    if(ubicacionPrin >= desplazamientoUsuario){
        document.getElementsByTagName("nav")[0].style.top="0px"

    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }

    ubicacionPrin=desplazamientoUsuario;

})

//Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let circulo =true;

document.querySelectorAll(".hamb-menu")[0].addEventListener("click", function(){
    if(circulo){
        document.querySelectorAll(".hamb-menu")[0].style.color="#fff";
        circulo=false;
    }else{
        document.querySelectorAll(".hamb-menu")[0].style.color="#000";
        circulo=true;
    }
    enlacesHeader.classList.toggle("menu2")
})