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

let chaleiraEstaNoFogo = true
let fogaoTaLigado = true

let passarCafe = () => console.log('Passando o Café')

ferverAgua(chaleiraEstaNoFogo, fogaoTaLigado).then(passarCafe)
console.log('Fazendo o café');