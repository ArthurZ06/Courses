const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulado o número 2");
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 saiu pq ele foi achado");
    i++;
    break;
  }
  
  i++;
}
