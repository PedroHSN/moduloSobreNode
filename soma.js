module.exports = function soma (x, y) { // module. exports funciona como um "return"
  return x + y;
}


//desse modo posso exportar essa função para outro arquivo, deve dar o require para poder utilizar
//ex: let soma = require("./soma")