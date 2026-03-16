let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intento = 0;
let numeroUsuario;

while (numeroUsuario !== numeroSecreto) {
  numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 20:"));
  intento++;

  if (numeroUsuario < numeroSecreto) {
    console.log("El número es mayor 🔼");
  } else if (numeroUsuario > numeroSecreto) {
    console.log("El número es menor 🔽");
  } else {
    console.log("🎉 ¡Correcto! Adivinaste el número en " + intento + " intentos.");
  }
}