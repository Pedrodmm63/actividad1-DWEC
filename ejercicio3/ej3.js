const minimo = 1;
const maximo = 100;
const divisores = [2, 3, 5, 10];
let divisor = [];

var numero;
while (numero < minimo || numero > maximo || isNaN(numero)) {
    numero = prompt("Introduce un numero entero entre 1 y 100");
}

function esDivisible(numero, divisor) {

    if(numero % divisor == 0){
        return true;
    }
    else return false
}

for(var i = 0; i < 4; i++) {
    
    if(esDivisible(numero, divisores[i])){
    divisor[i] = divisores[i];
    }
}

if(divisor.length == 0) {
    alert ("No es divisible entre " + divisores);
}
else alert ("Es divisible entre " + divisor);