// inserir elemento no body 

var novoParagrafo = document.createElement("p");



var texto = document.createTextNode("Este e o conteudo do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir na div

var container = document.getElementById("container");

var el = document.createElement("span");

el.appendChild(document.createTextNode("Texto do span"));

console.log(el);

container.appendChild(el);