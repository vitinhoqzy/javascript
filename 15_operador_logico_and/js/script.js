var idade = 16;
var nome = "pedro";

if ( nome == "joao" && idade == 16) {
  console.log("O joao pode entrar na aula de isgrima");
} else {
  console.log("Este nao e o joao");
}

if ((1 == 1 && 3 > 3) && true) {
  console.group("Passou");
} else if (nome === "pedro" && idade >= 16) {
  console.log("Aqui passou");
}