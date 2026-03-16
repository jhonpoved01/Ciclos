for (let i = 1; i <= 5; i++) {
  console.log("Estudiante " + i);

  let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
  let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
  let nota3 = parseFloat(prompt("Ingrese la nota 3:"));

  let promedio = (nota1 + nota2 + nota3) / 3;

  console.log("Promedio: " + promedio.toFixed(2));

  if (promedio >= 3.0) {
    console.log("Resultado: Aprueba");
  } else {
    console.log("Resultado: Reprueba");
  }

  console.log("----------------------");
}