let numero = prompt("Dame un numero")
let resultado = false;

function esEntero() {
   
    if(parseInt(numero) == numero) resultado = true;
    else console.error("El numero no es entero")
    
}

esEntero();
alert(resultado);

function esPositivo(num) {
    let numero = prompt("Dame un numero")
    if(numero > 0 ){ 
        resultado = true;
    }
    else console.error("El numero es negativo")
}

esPositivo();
alert(resultado);

function sumatorio() {

    let resultado = 0;
    for(var i = 0; i < numero; i++ ) {
         resultado += i;
    }
    return resultado;
}
sumatorio();
console.log(sumatorio());