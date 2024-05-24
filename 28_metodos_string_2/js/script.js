// toLowerCase e toUpperCase

var frase = 'Esta e a frase que vamos manipular';

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

//trim 

var nome = '         vitinho    ';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split 

console.log(frase.split(' '));

var tags = 'PHP, JavaScript, HTML, CSS';

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = 'Eu quero a ultima palavra desta frase teste teste';

console.log(fraseDois.indexOf('teste'));

console.log(fraseDois.lastIndexOf('teste'));