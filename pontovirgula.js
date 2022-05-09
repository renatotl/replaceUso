const prompt = require("prompt-sync")()
let window
let nomeDigitado = Number.parseFloat(prompt("Digite aqui "))

let nomeDigitado2 = Number.parseFloat(prompt("Digite aqui "))


console.log(typeof nomeDigitado)
console.log(typeof nomeDigitado2)
let novo = nomeDigitado+nomeDigitado2
//aforma correta de trocar o ponto pela vírgula.
console.log(novo.toFixed(2).replace('.',','))



// Number.parseInt(nomeDigitado)

//console.log(typeof nomeDigitado)
