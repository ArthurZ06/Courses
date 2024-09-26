function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;
let count = 0;
let numbers = [];

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
  numbers.push(rand);
  count++;
}
console.log("###");

console.log(`Total de números gerados até 10: ${count}`);
console.log("Números gerados:", numbers);

count = 0;
rand = 10;
numbers = [];

do {
  rand = random(min, max);
  console.log(rand);
  numbers.push(rand);
  count++;
} while (rand !== 10);
console.log("###");

console.log(`Total de números gerados até 10: ${count}`);
console.log("Números gerados:", numbers);
