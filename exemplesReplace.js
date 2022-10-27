/* replace()
O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). Nesse caso vamos substituir os espaços por nada, para juntas todas as palavras da nossa string.
*/
const prompt = require("prompt-sync")();


const nome = prompt(' 1-Digite seu nome completo: ');
const nomeReplace = nome.replace(' ', '');

console.log(nomeReplace);
/*
Caso você tenha escrito mais de 3 palavras, deve ter notado que ele só funcionou uma vez. Isso acontece porque o método só funciona para a primeira ocorrência encontrada, mas nós podemos resolver isso usando Expressões Regulares, ou simplesmente RegEx. Para procurarmos globalmente, usamos '/ /g'. Note que nesse caso, não usamos as aspas para indicar o caracter espaço, é só colocar-lo entre as / /.
*/
const nome2 = prompt(' 2-Digite seu nome completo: ');
const nomeReplace2 = nome2.replace(/ /g, '');

console.log(nomeReplace2);


