//SE ENCARGA DE HACER UTILES LOS BOTONES DE LOS CARRUCELES
const imagenes = document.querySelectorAll('.imagen');

if(imagenes.length > 1){
const circulos = document.querySelectorAll('.circulo');
let currentIndex = 0;
let intervalId;
let click = false;

function changeImage(index) {
    const imagenActiva = document.querySelectorAll('.imagen.activo');
    const nuevaImagen = imagenes[index];
    circulos.forEach(circulo => circulo.classList.remove('activo'));
    circulos[index].classList.add('activo');

    if (imagenActiva === nuevaImagen) return;

    imagenActiva.classList.add('saliente');
    imagenActiva.addEventListener('transitionend', () => {
        imagenActiva.classList.remove('saliente');
        imagenActiva.classList.remove('activo');
        if(click == true){
            setTimeout(function cargandof(){
                click = false;
            },100)
        }
    }, { once: true });
    nuevaImagen.classList.add('activo');
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % imagenes.length; 
        changeImage(currentIndex);
    }, 5000);
}

circulos.forEach((circulo, index) => {
    circulo.addEventListener('click', () => {
        if(click == false){
            click = true;
            currentIndex = index; 
            changeImage(index);
            resetInterval();
        }
    });
});

resetInterval();
}