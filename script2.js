let calc = require("./calc")

let args = process.argv.slice(2); // recebe os argumentos de dentro do node e cortar os dois primeiros.

let a = Number(args[1]);//Number é utilizado pois quando pegamos os elementos do argumento, eles são strings
let b = Number(args[2]);
let c = "";

if(args[0] == 's'){
  c = calc.soma(a, b);
}else if(args[0] == 'm'){
  c = calc.mult(a, b);
} else {
  c = "Opção Invalida"
}

console.log(c);