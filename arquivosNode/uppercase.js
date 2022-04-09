let fs = require('fs')//metodos do module filesystem

let args = process.argv.slice(2) //exclui os dois primeiros argumentos

let fileName = args[0];

fs.readFile(fileName, 'UTF-8', (error, data)=>{//ler o arquivo, data é o conteudo do arquivo

  if(error) throw error; // se tiver erro, ele manda esse erro para gente
  fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => { // vai pegar o nome do arquivo e add _upp..., vai pegar o conteudo e executar o toUpperCase.

    if(error) {throw error};
    console.log("Arquivo gerado com sucesso")
  })
})


// writeFile -> criar
// appendFile -> concatena
// unlink -> apaga
// rename -> renomear
// readFile -> ler o arquivo