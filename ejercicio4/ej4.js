var num1 = parseInt(prompt("Escriba el primer numero"));
var num2 = parseInt(prompt("Escriba el segundo número"));
var operador = prompt("Escriba que operación quiere realizar");
var resultado;

while(operador != "FIN") {
switch(operador) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1*num2;
        break;
    case "/":
        resultado = num1/num2
        while(isNaN(num2)) {
            num2 = prompt("Escriba el segundo número de nuevo");
        };   
    }

}

function validaOperador() {
    let valido = false;
    if(operador = "+" || "-" || "*" || "/") {
        valido = true;
    }
    return valido;
}
function divisionValida() {
    let valido = false;
    if(resultado == 0) {
        valido = true;
    }
    return valido;
}

alert(resultado);
console.log(validaOperador());
console.log(divisionValida());
