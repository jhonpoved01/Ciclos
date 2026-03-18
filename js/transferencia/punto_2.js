let continuar= true;
while (continuar) {
    let num= parseInt(prompt("Ingrese un número:"));
    for (let i=1; i<=2; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

    let respuesta= prompt("¿Desea ingresar otro número?");
    if (respuesta.toLowerCase() !== "sí") {
        continuar= false;
    }
}    