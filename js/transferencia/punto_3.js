const saldoInicial = 1000;
let saldo = saldoInicial;
let continuar = true;

while (continuar) {

    let retiro = parseInt(prompt("Tu saldo es: " + saldo + "\n¿Cuánto deseas retirar?"));

    if (retiro <= saldo) {
        saldo = saldo - retiro;
        console.log("Retiro hecho, Nuevo saldo: " + saldo);
    } else {
        console.log("Error: fondos insuficientes");
    }

    let respuesta = prompt("¿Deseas hacer otro retiro?");

    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}