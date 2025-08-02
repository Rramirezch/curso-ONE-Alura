let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; // Definir el número máximo permitido
let contadorReinicios = 0;

function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario == numeroSecreto) { 
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroSecreto > numeroUsuario) {
            asignarTextoElemento('p', 'El número secreto es mayor que ' + numeroUsuario + '.');
        }else {
            asignarTextoElemento('p', 'El número secreto es menor que ' + numeroUsuario + '.');
        }
        intentos++;
        asignarTextoElemento('h2', `Intento número:  ${intentos}`);
        limpiarCaja();
    }  
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        //si ya sorteamos todos los números, reiniciar la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números ya han sido sorteados. Reiniciando el juego.');// Salir del bucle para reiniciar el juego
    } else {
        // Verificar si el número ya fue sorteado
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Llamada recursiva para generar un nuevo número
        } else {
            (listaNumerosSorteados.push(numeroGenerado)) // Agregar el número a la lista de sorteados
            return numeroGenerado; // Retornar el número generado
        }
    }
    
    
}
function recargarPagina() {
    location.reload();
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    //generar numero aleatorio
    //reiniciar contador de intentos
    //desactivar botón de reinicio
    //activar botón de intentar
    contadorReinicios++;
    if (contadorReinicios == 5) {
        recargarPagina();
        contadorReinicios = 0; // Reiniciar el contador después de recargar la página
    }
}    

condicionesIniciales();