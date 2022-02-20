var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 2;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto && tentativas > 0) {
    elementoResultado.innerHTML =
      "Errou! O chute é maior do que o numero secreto";
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto && tentativas > 0) {
    elementoResultado.innerHTML =
      "Errou! O chute é menor do que o numero secreto";
    tentativas = tentativas - 1;
  } else if (chute !== numeroSecreto && tentativas < 1) {
    elementoResultado.innerHTML =
      "Acabaram as tentativas, o número secreto é " + numeroSecreto;
  }
}

function novoJogo() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 2;
  resultado.innerHTML = "";
  valor.value = "";
}
