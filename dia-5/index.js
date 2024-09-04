let idade = Number(prompt("você tem 17 ou 18 ?"));

switch (idade) {
  case 17:
    document.write("você tem 17");
    break;
  case 18:
    document.write("você tem 18");
    break;
  default:
    document.write("você não tem nenhuma dessas idades");
    break;
}
