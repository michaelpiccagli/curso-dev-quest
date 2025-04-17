//function(a, b, ...args){
//         // ...
//}

function incentivarQuester(mensagem, ...nomeQuesters) {
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por ter chego ao módulo de JavaScript avançado,', 'Michael', 'Paula', 'Rute')