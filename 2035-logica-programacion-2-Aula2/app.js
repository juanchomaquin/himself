
let numeroSecreto = 0; //se define la variable del numero secreto con valor 0

let intentos = 0; //se define un contador de intentos

let listaSorteado = []; //lista para guardar los numeros sorteados

let numeroMaximo = 10; //define el rango de valores


function asignarTexto(elemento, texto){ //funcion que modifica el contenido del html con atributos de elemento y texto

    let elementoHTML = document.querySelector(elemento); //define la variable donde se seleccione el elemento

    elementoHTML.innerHTML = texto; //se modifica el contenido del elemento

    return;
}


function verificarIntento(){ //se crea una función para verificar el intento del usuario

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //guarda en una variable el número ingresado por el usuario como entero, por medio del id 
    
    
    if (numeroDeUsuario === numeroSecreto){ //si el valor y el tipo son iguales entonces realiza la impresion

        asignarTexto('p','Acertaste el número secreto en: '+intentos+' '+`${(intentos === 1 ? 'vez' : 'veces')}`);//imprime el resultado, y realiza una operacion ternaria donde valida si utiliza la palabra en prural o singular
        
        document.getElementById('reiniciar').removeAttribute('disabled');//activamos el boton de reiniciar solo cuando el usuario acierta

    }else{ //realiza las guias necesarias para que el usuario pueda acertar el número

        if(numeroDeUsuario > numeroSecreto){

            asignarTexto('p','El número secreto es menor');
        }
        else{

            asignarTexto('p','El número secreto es mayor');
        }
        intentos++; //aumenta el contador de uno en uno

        limpiarCaja(); //llama la funcion para limpiar la caja
    }
    return;
    
}


function limpiarCaja(){ //creamos una funcion donde cambiamos el valor del usuario por un elemento vacio por medio del id del elemento

   document.querySelector('#valorUsuario').value= '';
   
}


function generarNumero(){ //funcion para generar un número aleatorio 

    let numeroAleatorio = Math.floor(Math.random()*nume)+1; //devuelve un numero entero aleatorio

    console.log(numeroAleatorio);

    console.log(listaSorteado);

    if (listaSorteado.length == numeroMaximo){ //si la longitud de la lista es igual al numero maximo

        asignarTexto('p','Ya se sortearon todos los números posibles');

    } else{ //sino

        if (listaSorteado.includes(numeroAleatorio)){ //si en la lista esta incluido el numero aleatorio

        return generarNumero();                    //entonces vuelva a generar otro numero con la función

        }else{ //sino

        listaSorteado.push(numeroAleatorio); //añada el numero a la lista

        return numeroAleatorio; //y entregue el numero aleatorio
        }
    }
}


function condicionesIniciales(){//funcion que contiene las condiciones iniciales para jugar

asignarTexto('h1','Juego del número secreto'); 

asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}:`);

numeroSecreto = generarNumero(); //define el numero secreto con la función

intentos = 1; //inicializa el contador de intentos

console.log(numeroSecreto); //Mirar en consola el número secreto escogido al azar

}


function reiniciarJuego(){ //realizamos una funcion donde se reinicie todo el juego

    limpiarCaja(); //llamada de funcion para limpiar la caja

    condicionesIniciales(); //llamada de la funcion para asignar las condiciones al iniciar el juego
    
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales(); //llama la funcion
