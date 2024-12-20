let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("express");
        habilidades[11].classList.add("react");
        habilidades[12].classList.add("vue");
        habilidades[13].classList.add("jest");
        habilidades[14].classList.add("sequelize");
        habilidades[15].classList.add("node");
        habilidades[16].classList.add("mongo");
        habilidades[17].classList.add("cypress");
        habilidades[18].classList.add("pwa");
        habilidades[19].classList.add("tailwind");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

function redirect() {
    // window.location.href="file:///C:/Users/Andres%20Hernandez/Downloads/Profile.pdf";
    window.open("img/Profile2.pdf",'Download');
    
}

function redirectD(valor) {

    window.open("https://"+valor) ;

}