{
  let recebeNumero = Number(prompt("Digite um número:"));
  let contador = 0;
  let quantidadeDeImpares = 0;

  while (contador <= recebeNumero) {
    if (contador % 2 != 0) {
      console.log("Sequencia ímpar", contador);
      quantidadeDeImpares++; // INCREMENTO +1
    }
    contador++;
  }
  console.log("Quantidade de ímpares", quantidadeDeImpares);
}
