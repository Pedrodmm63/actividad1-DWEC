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
            console.log(resultado);
            break;
        case "-":
            resultado = num1 - num2;
            num1 = resultado;
            console.log(resultado);
            break;
        case "*":
            resultado = num1 * num2;
            num1 = resultado;
            console.log(resultado);
            break;
        case "/":
            if(divisionValida()) {
            resultado = num1 / num2
            num1 = resultado;
            console.log(resultado);
            }
    }

    operador = prompt("Escriba otra operacion o FIN para finalizar");
}

function validaOperador() {
    while (operador != "+" && operador != "-" && operador != "*" && operador != "/" && operador != "FIN") {
        operador = prompt("Escriba de nuevo qué operación quiere realizar");
    }
}
function divisionValida() {
    let valido = true ;
    if (num2 === null) {
        num2 = parseInt(prompt("No se puede dividr. Ingrese un numero diferente"))
        return valido == false
    }
   else return valido;
}
