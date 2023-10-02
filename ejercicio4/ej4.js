var num1 = parseInt(prompt("Escriba el primer numero"));
var num2 = parseInt(prompt("Escriba el segundo número"));
var operador = prompt("Escriba que operación quiere realizar");
var resultado;

while (operador != "FIN") {
    validaOperador();
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            num1 = resultado;
            break;
        case "-":
            resultado = num1 - num2;
            num1 = resultado;
            break;
        case "*":
            resultado = num1 * num2;
            num1 = resultado;
            break;
        case "/":
            resultado = num1 / num2
            num1 = resultado;
    }

}

function validaOperador() {
    let valido = false;
    if (operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "FIN") {
        if (operador == "/") {
            while(!divisionValida(num2)) {
                num2 = parseInt(prompt("Escriba el segundo número correctamente"));
            }
        }
            valido = true;
    }
    else {
        while (operador != "+" || operador != "-" || operador != "*" || operador != "/" || operador != "FIN") {
            operador = prompt("Escriba de nuevo que operación quiere realizar");
        }
    }
}
function divisionValida() {
    let valido = false;
    if (num2 == null) {
        valido = true;
    }
    return valido;
}

console.log(resultado);