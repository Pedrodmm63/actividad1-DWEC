const usuarios = ["pepe", "paco", "juan", "benito", "manuel"];
const contraseñas = ["12345", "23456", "09876", "67890", "666666"];

var contador = 0;
var inicioSesiion;
var contraseña;

inicioSesion(inicioSesiion, contraseña);

function inicioSesion(login, password) {

    login = prompt("Nombre de usuario");

    while (!existeLogin(login) && contador < 5) {
        contador++;
        alert("El nombre de ususario no existe");
        login = prompt("Escriba de nuevo su nombre de usuario");
    }

    password = prompt("Contraseña");
    while (!passwordCorrecto(password, login) && contador < 5) {
        contador++;
        alert("El nombre de usuario no coincide con la contraseña.");
        password = prompt("Contraseña");
    }

    if(contador >= 5) alert("Limite de intentos alcanzado.");
    else alert("Usuario y contraseña correctos.");
}

function existeLogin(login) {
    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (usuarios[i] == login) {
            resultado = true;
    }
}
    return resultado;
}

function passwordCorrecto(password, login) {
    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (contraseñas[i] == password && usuarios[i] == login) {
            resultado = true;
        }
    }
    return resultado;
}