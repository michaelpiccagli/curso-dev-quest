/* 
    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelecida
*/

//  New Promise((resolve, reject) => {

//  })

let chaleiraEstaNoFogo = true
let fogaoTaLigado = true

let ferverAgua = (chaleiraEstaNoFogo, fogaoTaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogo && fogaoTaLigado) {
            console.log('Começando o processo de ferver a água');
            resolve()
        }else{
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água');
            reject()
        }
    })    
}

ferverAgua(chaleiraEstaNoFogo, fogaoTaLigado)
console.log('Fazendo o café');
