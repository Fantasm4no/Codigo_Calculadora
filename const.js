const displayValorAnterior = document.getElementById('valor_anterior');
const displayValorActual = document.getElementById('valor_actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

document.addEventListener('keydown', teclaPresionada => {
    const tecla = teclaPresionada.key;

    if (!isNaN(tecla)) {
        // Agregar el número al display
        display.agregarNumero(tecla);
    }

    if (tecla === '+' || tecla === '/' || tecla === '*' || tecla === '-') {
        // Computar la operación
        display.computar(tecla);
    }

    if (tecla === 'Enter') {
        // Realizar el cálculo final
        display.calcularResultado();
    }

    if (tecla === 'Escape') {
        // Limpiar el display
        display.limpiar();
    }
});