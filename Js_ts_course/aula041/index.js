function exec(x, y, resultado = 0) {
  if (x > y) {
    resultado = x
  } else {
    resultado = y
  }
  console.log(`O Maior numero é esse ai ${resultado}`)
}

exec(8, 3);
