const inputNombre = document.getElementById('txtCartaNombre');
const CartaNombreDinamico = document.getElementById('Carta-nombre');
const grupoAtributo = document.getElementById('grupoAtributos');
const selectCarta = document.getElementById('Carta_base');
const selectAtributo = document.getElementById('Carta_atributo');
const imagenCarta = document.getElementById('cartaImagen');
const imagenAtributo= document.getElementById('atributoImagen');

cambiaBase();
cambiaAtributo();

inputNombre.addEventListener('input', function () {
    CartaNombreDinamico.textContent = inputNombre.value;
});

selectCarta.addEventListener('change', function () {
    
    if (selectCarta.value == 'trampa') {
        cambiaBase();
        grupoAtributo.classList.add('hidden');
        imagenAtributo.src = `./Public/Img/atributo_trampa.png`;
    } else {
        if (selectCarta.value == 'magia'){
            cambiaBase();
            grupoAtributo.classList.add('hidden');
            imagenAtributo.src = `./Public/Img/atributo_magica.png`;
        }else{
            cambiaBase(); 
            grupoAtributo.classList.remove('hidden');
            cambiaAtributo();
        }
        
    }
});

selectAtributo.addEventListener('change', function () {
    cambiaAtributo();
});

function cambiaBase() {
    const tipoCarta = selectCarta.value;
    const rutaImagen = `./Public/Img/frame_${tipoCarta.toLowerCase()}.png`;
    imagenCarta.src = rutaImagen;
}
function cambiaAtributo() {
    const tipoAtributo = selectAtributo.value;
    const rutaImagen = `./Public/Img/atributo_${tipoAtributo.toLowerCase()}.png`;
    imagenAtributo.src = rutaImagen;
}