
let NumAzar = Math.floor(Math.random() * 100);

let NumeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");

let intento = document.getElementById('intento');

let intentos = 0;

function chequearResultado(){
    intentos ++;
    intento.textContent = intentos;
    let NumeroIngresado = parseInt(numeroEntrada.value);
if (NumeroIngresado < 1 || NumeroIngresado > 100 || isNaN(NumeroIngresado) ) {
    mensaje.textContent = 'Ingresa un numero del 1 al 100'
    return
}

if (NumeroIngresado === NumAzar) {

    mensaje.textContent = 'Felicitaciones, has ganado el juego';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
} else if (NumeroIngresado < NumAzar) {
    mensaje.textContent = "Vamos crack, es un poco mas arriba";
    mensaje.style.color = 'red';


} else {

mensaje.textContent = "Vamos bro, es un poco mas abajo"
mensaje.style.color = 'red';
}

}
