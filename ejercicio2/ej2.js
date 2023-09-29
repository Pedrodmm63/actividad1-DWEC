let numeros = []
let numero;
for(var i = 0; i<4; i++) {
     numero = prompt("Escriba aqui su numero");

    while(numero < 0 || parseInt(numero) != numero){
        console.error("El numero no es entero positivo");
        numero = prompt("Escriba de nuevo su numero")
    }
    numeros[i] = parseInt(numero);  
}

function ordenCreciente() {

    let resultado = false;
    while(numero > 0) {
        if(numeros[0] < numeros[1] && numeros[1] < numeros[2] && numeros[2] < numeros[3] ) {
            return resultado = true;
        }
        else return resultado;

    }

}

console.log(ordenCreciente());