function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Arthur");
const funcao2 = retornaFuncao("Nicolas");

console.dir(funcao);
console.dir(funcao2);
