let pessoa = {
 nome: 'vitinho',
 idade: 29,
 falar: function() {
    console.log("Ola tudo bem");
 },
soma: function(a,b) {
    return a + b;
  },
  aniversario: function() {
    this.idade += 1;
  },
  dizerNome: function() {
    console.log('Ola meu nome e ' + this.nome);
  },
  saudacao: function() {
    return "Sr. " + this.nome;
  }
};


console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.dizerNome();

var sdc = pessoa.saudacao();

console.log("Ola " + sdc);

