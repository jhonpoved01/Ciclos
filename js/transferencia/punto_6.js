let numeroSecreto = Math.floor(Math.random() * 20) + 1;

let intento = 0;

while (intento !== numeroSecreto) {

  intento = parseInt(prompt("Adivina el número entre 1 y 20:"));

  if (intento > numeroSecreto) {
    console.log("El número es menor.");
  } else if (intento < numeroSecreto) {
    console.log("El número es mayor.");
  } else {
    console.log("¡Correcto! Adivinaste el número.");
  }
}