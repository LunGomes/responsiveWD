import { produtos } from "./objetos.js";

// Desestruturação
// Forma reduzida de coletar dados de uma array (indice), 
// ou de objetos, pegando propriedades

const numeros = [10, 20, 30];
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];
console.log(a,b,c);

// Usando desestruturação em arrays
const [x, y, z] = numeros;
console.log(x);
console.log(y);
console.log(z);

// Pulando um valor
const [primeiroValor, ,terceiroValor] = numeros;
console.log(primeiroValor);
console.log(terceiroValor);

// Desestruturação de objetos
// Retornar as propriedades desejadas
const pessoa = { user: 'Tati', idade: 37};

// Sem desestruturação
const user1 = pessoa.user;
const idade1 = pessoa.idade;
console.log(user1, idade1);

// Com desestruturação
const {user, idade} = pessoa;
console.log(user, idade);

console.log(produtos);
// const {nome, preco} = produtos[2];
console.log(produtos);
const {nome:nomeProduto, preco:precoProduto} = produtos[2];
console.log(nomeProduto, precoProduto);
