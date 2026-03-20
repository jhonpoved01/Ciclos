/*Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
acierta, mostrar “Bienvenido”. */

let usuario_correcto = "admin";
let contraseña_correcta = "1234";

let intentos = 0;
let acceso = false;

while (intentos < 3) {
    let usuario = prompt("Usuario:");
    let contraseña = prompt("Contraseña:");

    if (usuario === usuario_correcto && contraseña === contraseña_correcta) {
        acceso = true;
        break;
    } else {
        intentos++;
        console.log("Intento fallido #" + intentos);
    }
}

if (acceso) {
    console.log("Bienvenido");
} else {
    console.log("Acceso denegado");
}

