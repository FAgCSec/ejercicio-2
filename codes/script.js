// Obtener referencia al botón y al contador
var clickButton = document.getElementById('clickButton');
var clickCount = document.getElementById('clickCount');

// Inicializar contador
var contador = 0;

// Función de devolución de llamada para el evento de clic
function incrementarContador() {
    contador++;
    clickCount.innerText = contador;
}

// Asignar la función de devolución de llamada al evento de clic utilizando addEventListener
clickButton.addEventListener('click', incrementarContador);
