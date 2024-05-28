// clearTimeout na pratica

var x = 0;

var myTimer = setTimeout(function(){
   console.log("O x tem o resultado de 0");

}, 2000);

x = 5;

if(x > 0) {
  clearTimeout(myTimer);
  console.log("O x passou de 0");
}

// clearSetInterval na pratica 

var myInterval = setInterval(function(){
    console.log("Imprimiu o bglh ");

}, 500);

setTimeout(function(){
  
  console.log("Nao precisamos mais repetir");
  clearInterval(myInterval);

}, 1500);