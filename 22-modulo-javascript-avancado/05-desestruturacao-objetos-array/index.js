let pessoa = {nome: 'michael', sobrenome: 'Piccagli', idade: 35}
// let nome = pessoas.nome
// let idade = pessoas.idade

// console.log(nome);
// console.log(idade);

// let {nome: nome, sobrenome: sobrenome, idade: idade} = pessoa
let {nome, sobrenome, idade} = pessoa

console.log(nome);
console.log(sobrenome);
console.log(idade);

const numeros = [1, 2, 3]

const [um, dois, tres] = numeros
console.log(um)
console.log(dois)
console.log(tres)

