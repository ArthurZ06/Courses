function criaVezes(m) {
  return function(n) {
    return n * m
  }
}

const duplicar = criaVezes(2)

console.log(duplicar(10))