function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("É necessario dois numeros para fuincionar");
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
  // console.log(error);
  console.log("Alguma coisa mais dboa pro usuário");
}
