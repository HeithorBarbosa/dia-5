let situaçao = prompt(
  "do que o senhor gostaria ?" +
    "\n1 = abastecer com gasolina \n2 = abastecer com álcool \n3 = calibrar os pneus"
);

switch (situaçao) {
  case "1":
    let gasosa = prompt("qual valor de gasolina você gostaria?");
    console.log(
      "seu carro foi abastecido com ",
      gasosa / 5,
      " litros de gasolina"
    );
    break;
  case "2":
    let alcool = prompt("qual valor de álcool você gostaria");
    console.log(
      "seu carro foi abastecido com ",
      alcool / 3,
      "litros de álcool"
    );
    break;
  case "3":
    console.log("pneus calibrados senhor");
    break;
  default:
    console.log("desculpe, não temos essa opçâo aqui");
    break;
}
