console.clear()// limpa o terminal

const prompt = require("prompt-sync")();//Necessária para o prompt funcionar


let nomeDigitado = prompt("Digite seu primeiro nome? ");// permite que o usuário digite ne console.

// armazena o número de caracteres da STRING
let newNome = nomeDigitado.length;

let spiceDaPrimeiraLetra = nomeDigitado.slice(0,1).toUpperCase()

//stanforma o resto da string em minúscula
let spliceDoResto = nomeDigitado.slice(1).toLowerCase()

let nomeSeparado = nomeDigitado.slice(1)// separa o resto da sting do primeiro caractere
console.log(nomeSeparado)//imprime como ficou a sting


//nome digitato
console.log(` O nome digitado foi esté: ${nomeDigitado}`);
console.log();//pular linha

//se o o nome estiver escrito misto entre maiúscula e minúscula. ele converte esse parte em minúscula
console.log(`O resto da string transfomada em minúscula ${spliceDoResto}`)
console.log();//pular linha


console.log(`Caractere que será modificado: ${nomeDigitado[0]}`);// caracter que será modificado
console.log();//pular linha

console.log(`Caractere já convertido: ${spiceDaPrimeiraLetra}`);//letra convertida
console.log();//pular linha


console.log(`O resultado final do nome digitado: ${spiceDaPrimeiraLetra+spliceDoResto}`);//resultado
console.log();//pular linha
console.log(`O total de caracteres que possui o nome digitado: ${newNome}`);
console.log();//pular linha

/* esse códico pega o nome digitado todo em minúsculo e o trasnforma em nome próprio com a primeira
letra em maiúscula */


