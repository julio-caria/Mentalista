var secretNumber = parseInt(Math.random() * 11);
var attempts = 3;

function SortNumber() {
  // CAPTURANDO O VALOR DO INPUT
  var number = document.getElementById("valor").value;
  // CAPTURANDO O CAMPO E RESULTADO
  var result = document.getElementById("resultado");
  var tip = document.getElementById("tip");

  // DICAS PARA RESPOSTA
  var tipLess = `O número informado é menor do que o número secreto.`;
  var tipMore = `O número informado é maior do que o número secreto.`;
  // TIPOS DE RESPOSTA
  var correct = `Parabéns você acertou o número!`;
  var wrong = `Você esgotou as tentativas. Tente Novamente. O Número Correto era ${secretNumber}.`;
  // COMPARARNDO AS VARIÁVEIS
  // SE O NUMERO INSERIDO FOR IGUAL AO NUMERO SECRETO E O NÚMERO DE TENTATIVAS MAIOR OU IGUAL A 1
  if (number == secretNumber) {
    result.innerHTML = correct;
    result.classList.add("resposta-certa");
    attempts = 0;
  } // CASO O NUMERO INSERIDO SEJA MENOR  QUE O NUMERO SECRETO E O NUMERO DE TENTATIVAS FOR MAIOR OU IGUAL A 1
  else if (number < secretNumber && attempts >= 1) {
    tip.innerHTML = tipLess;
    tip.classList.add("tip");
    attempts = attempts - 1;
  } // CASO O NUMERO INSERIDO SEJA MAIOR QUE O NÚMERO SECRETO E O NÚMERO DE TENTATIVAS MAIOR OU IGUAL A 1
  else if (number > secretNumber && attempts >= 1) {
    tip.innerHTML = tipMore;
    tip.classList.add("tip");
    attempts = attempts - 1;
  } // SE O NUMERO FOR DIFERENTE DO NUMERO SECRETO E NUMERO DE TENTATIVAS MENOR OU IGUAL A 0
  else if (number != secretNumber && attempts <= 0) {
    result.innerHTML = wrong;
    result.classList.add("resposta-errada");
    attempts = 0;
  }
}
