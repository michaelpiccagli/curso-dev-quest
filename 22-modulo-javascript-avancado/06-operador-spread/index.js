const pessoas = ['Michael', 'Paula', 'Rute']
console.log(...pessoas);

// // CONCATENAR DOIS ARRAYS

let pessoas1 = ['Michael', 'Paula', 'Rute']
let pessoas2 = ['Carlos', 'Jhonatan', 'William']

// pessoas1 = pessoas1.concat(pessoas2)
// É possível usar o método concat, mas utilizando 3 pontos significa menos código e mais legível concatenar 2 ou mais arrays
// console.log(pessoas1);

pessoas1 = [...pessoas1, ...pessoas2]

console.log(pessoas1);

// Utilizando o spread é possível clonar um objeto
const pessoa3 = {nome: 'Michael', idade: 35}

const objetoClonado = {...pessoa3}
console.log(objetoClonado);
