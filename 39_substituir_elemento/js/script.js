// criando elementos

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Esta e o elemento do h3");

el.appendChild(texto);

console.log(el);

// selecionando o elemento

var title = document.querySelector("#title");

console.log(title);

// pegando o pai do title

var pai = title.parentNode;

// trocar os elementos 
pai.replaceChild(el, title);
