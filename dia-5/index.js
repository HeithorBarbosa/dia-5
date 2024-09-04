let num1 = Number(prompt("digite um número"));
let num2 = Number(prompt("digite outro número"));
let operation = prompt(
  "qual operação voçê gostaria de fazer ?" + "\n1 = + \n2 = - \n3 = / \n4 = *"
);

switch (operation) {
  case "1":
    console.log(num1 + num2);
    break;
  case "2":
    console.log(num1 - num2);
    break;
  case "3":
    console.log(num1 / num2);
    break;
  case "4":
    console.log(num1 * num2);
    break;
  default:
    console.log("talvez você escreveu errado a operação");
    break;
}
