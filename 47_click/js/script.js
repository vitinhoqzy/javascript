// inserir click 

var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

  console.log("clicou malandro ");

  console.log(this);

  this.style.color = "red";

});

// click afetando outros bglh 
var title = document.querySelector("#title");

title.addEventListener("click", function(){

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";

});

// double click 
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){

  console.log("click duplooo!");

});