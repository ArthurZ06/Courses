// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número Não é divisivel por 3 e 5 = Retorna o proprio número
// Checar se o número é realmente um numero = Retornar o próprio número
// Use a função com números de 0 a 100

function main(n) {
  if (typeof n !== "number") {
    console.log(`${n} não é um número`);
    return;
  }

  if (n % 3 === 0 && n % 5 === 0) {
    console.log(` numero ${n} e divisivel por 5 é 3 FizzBuzz`);
  } else if (n % 3 === 0) {
    console.log(` numero ${n} e divisivel por 3 Fizz`);
  } else if (n % 5 === 0) {
    console.log(` numero ${n} e divisivel por 5 Buzz`);
  } else {
    console.log(`Número informado não e divisivel nem por 5 é nem por 3 `);
  }
}

console.log(main('a'))
for (let i = 0; i <= 100; i++) {
  console.log(i, main(i));
}
