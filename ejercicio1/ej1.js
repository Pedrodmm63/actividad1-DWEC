let c = []
let resultado = false;

/*function esEntero(c) {
    let numero = prompt("Dame un numero")

    if(parseInt(numero) == numero) resultado = true;
    else console.error("El numero es negativo")
}

esEntero();
alert(resultado);
*/
function esPositivo() {
    let numero = prompt("Dame un numero")
    while(numero > 0 ){ 
        resultado = true;
    }
}

esPositivo();
alert(resultado);