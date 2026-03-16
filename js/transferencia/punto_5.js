let total = 0;
let continuar = true;

while (continuar) {

  let producto = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad:"));

  let subtotal = precio * cantidad;
  total += subtotal;

  console.log("Producto:", producto);
  console.log("Subtotal:", subtotal);

  let respuesta = prompt("¿Desea comprar otro producto? (si/no)");

  if (respuesta.toLowerCase() === "no") {
    continuar = false;
  }
}

if (total > 100000) {
  let descuento = total * 0.10;
  total = total - descuento;
  console.log("Se aplicó un descuento del 10%");
}

console.log("Total a pagar: $" + total);