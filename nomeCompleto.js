console.clear()//código para limpar o terminal

const prompt = require("prompt-sync")();//necessário para o programa funcionar

//variáveis para coleta dos nomes
let primeiroNome = prompt("Digite o primeiro nome? ").trim();//O TRIM tira os espaços dados sem quere

let segundoNome = prompt("Digite o nome do meio? ").trim();//epaços dados antes e depois da palavra

let terceiroNome = prompt("Digite o ultimo nome?  ").trim();


//trabalha o primeiro nome
let primeiroCaracter = primeiroNome.slice(0,1).toUpperCase();

let primeiroNomeResto = primeiroNome.slice(1).toLowerCase();

//trabalha o segundo nome
let primeiroCaracterNomeDomEio = segundoNome.slice(0,1).toUpperCase();

let segundoNomeResto = segundoNome.slice(1).toLowerCase();

//trabalha o terceiro nome
let primeiroCaracterUltimoNome = terceiroNome.slice(0,1).toUpperCase();

let terceiroNomeResto = terceiroNome.slice(1).toLowerCase();


//organizando as variáveis
let primeiroNomeTratado = primeiroCaracter+primeiroNomeResto;
let segundoNomeTratado = primeiroCaracterNomeDomEio+segundoNomeResto;
let terceiroNomeTratado = primeiroCaracterUltimoNome+terceiroNomeResto;


//imprimindo na tela
console.log(`${primeiroNomeTratado}  ${segundoNomeTratado}  ${terceiroNomeTratado}`)

/* este programa coleta o nome completo do usuário e deixa convertido corretamente
exemplo: nome prórpio começar com letra maiúscula e também remove espaços amais entre as palavras */

