//FUNCION QUE AGREGA COLOR AL HEADER AL HACER SCROLL HACIA ABAJO
window.onscroll = function () {
    let header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.remove('bg-transparent')
        header.classList.add('bg-GrisD');
    } else {
        header.classList.remove('bg-GrisD');
        header.classList.add('bg-transparent')
    }
};

//FUNCION QUE RESALTA EL LI AL MOMENTO DE ENTRAR A SU SECCION

//INICIO
let inicio = document.getElementById('inici');
let ini = document.getElementById('ini');

let opciones = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            ini.classList.remove('text-white');
            ini.classList.add('text-ReD');
        } else {
            ini.classList.remove('text-ReD');
            ini.classList.add('text-white');
        }
    });
};

let observer = new IntersectionObserver(callback, opciones);
observer.observe(inicio);

//SobreMi
let Sobremi = document.getElementById('Sobremi');
let sobreM = document.getElementById('sobreM');

let opciones2 = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback2 = function (entries, observer2) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sobreM.classList.remove('text-white');
            sobreM.classList.add('text-ReD');
        } else {
            sobreM.classList.remove('text-ReD');
            sobreM.classList.add('text-white');
        }
    });
};

let observer2 = new IntersectionObserver(callback2, opciones2);
observer2.observe(Sobremi);

//Habilidades
let habilidades = document.getElementById('habilidades');
let habili = document.getElementById('habili');

let opciones3 = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback3 = function (entries, observer3) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            habili.classList.remove('text-white');
            habili.classList.add('text-ReD');
        } else {
            habili.classList.remove('text-ReD');
            habili.classList.add('text-white');
        }
    });
};

let observer3 = new IntersectionObserver(callback3, opciones3);
observer3.observe(habilidades);

//Curriculum
let Curriculum = document.getElementById('curriculum');
let curr = document.getElementById('curr');

let opciones4 = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback4 = function (entries, observer4) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            curr.classList.remove('text-white');
            curr.classList.add('text-ReD');
        } else {
            curr.classList.remove('text-ReD');
            curr.classList.add('text-white');
        }
    });
};
let observer4 = new IntersectionObserver(callback4, opciones4);
observer4.observe(Curriculum);

//portafolio
let portafolio = document.getElementById('portafolio');
let portaf = document.getElementById('portaf');

let opciones5 = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback5 = function (entries, observer5) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            portaf.classList.remove('text-white');
            portaf.classList.add('text-ReD');
        } else {
            portaf.classList.remove('text-ReD');
            portaf.classList.add('text-white');
        }
    });
};
let observer5 = new IntersectionObserver(callback5, opciones5);
observer5.observe(portafolio);

//contacto
let contacto = document.getElementById('contacto');
let contac = document.getElementById('contac');

let opciones6 = {
    threshold: 0.5 // Se activa cuando al menos el 50% del elemento está visible
};

let callback6 = function (entries, observer6) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contac.classList.remove('text-white');
            contac.classList.add('text-ReD');
        } else {
            contac.classList.remove('text-ReD');
            contac.classList.add('text-white');
        }
    });
};
let observer6 = new IntersectionObserver(callback6, opciones6);
observer6.observe(contacto);



//Funciones Responsive
let menuVisible = false;
// Fincion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculta el menu una ves que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}