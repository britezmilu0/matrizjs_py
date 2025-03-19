const cantidad = parseInt(prompt("¿Cuántas personas queres registrar?"));
const personas = [];

for (let i = 0; i < cantidad; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
  const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
  const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

  personas.push([nombre, edad, nota]);
}

console.log("Lista de personas tal como fueron ingresadas:");
personas.forEach((persona) => {
  console.log(
    `Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`
  );
});

personas.sort((a, b) => b[2] - a[2]);

console.log("Lista de personas ordenada por nota :");
personas.forEach((persona) => {
  console.log(
    `Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`
  );
});
