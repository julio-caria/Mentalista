var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  var acertou = "Parabéns você acertou o número.";
  var errou = `Ihh... Tente Novamente, o número que você digitou está errado :D !`;

  if (chute == numeroSecreto) {
    resultado.innerHTML = acertou;
  } else if (chute > 10 || chute < 0) {
    console.log(
      "Você deve inserir um número entre 0 e 10, não maior e nem menor que isso. Tente Novamente!"
    );
  } else {
    resultado.innerHTML = errou;
  }
}
