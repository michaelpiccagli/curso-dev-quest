let pessoas = [
    {nome: 'Michael', idade: 34},
    {nome: 'Paula', idade: 35},
    {nome: 'Rute', idade: 52}
]

// let pessoasComIdade34Anos = []
// for (let i = 0; i< pessoas.length; i++) {
//   if(pessoas[i].idade === 34){
//     pessoasComIdade34Anos.push(pessoas[i])
//   }
//     }

//     console.log(pessoasComIdade34anos);

// let pessoasComIdade34Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 34
// })



let pessoasComIdade34Anos = pessoas.filter((pessoa) => pessoa.idade === 34)

console.log(pessoasComIdade34Anos);