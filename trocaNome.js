const prompt = require("prompt-sync")();//o prompt precisa dessa linha de código


let nome = prompt("Digite Renato! ").toUpperCase();//Osuário vai digitar

  let newNome = nome.replace("RENATO","Luke Skywalker")

console.log(` O nome do nosso guerreiro é ${newNome} `)

/* nosso programa troca o nome digito renato para Luke Skylwalker, mas 
se for digitado outro nome não acontece a troca. */