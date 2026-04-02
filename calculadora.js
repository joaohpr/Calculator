let valorAtual = "";
let valorAnterior = "";
let operador = null;


const visor = document.getElementById("visor");


// NÚMEROS
document.querySelectorAll(".numero").forEach(botao => {
   botao.addEventListener("click", () => {
       valorAtual += botao.textContent;
       visor.value = valorAtual;
   });
});


// OPERADORES
document.querySelectorAll(".operador").forEach(botao => {
   botao.addEventListener("click", () => {
       valorAnterior = valorAtual;
       operador = botao.textContent;
       valorAtual = "";
   });
});


// IGUAL
document.getElementById("igual").addEventListener("click", () => {
   let resultado;


   if (operador === "+") {
       resultado = Number(valorAnterior) + Number(valorAtual);
   } else if (operador === "-") {
       resultado = Number(valorAnterior) - Number(valorAtual);
   } else if (operador === "*") {
       resultado = Number(valorAnterior) * Number(valorAtual);
   } else if (operador === "/") {
       resultado = Number(valorAnterior) / Number(valorAtual);
   }


   visor.value = valorAtual +""+operador+""+valorAnterior + " = "+resultado;
   valorAtual = String(resultado);
});


// LIMPAR
document.getElementById("limpar").addEventListener("click", () => {
   valorAtual = "";
   valorAnterior = "";
   operador = null;
   visor.value = "";
});
