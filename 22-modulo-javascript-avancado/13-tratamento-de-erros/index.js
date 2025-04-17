let ferverAgua = (chaleiraEstaNoFogo, fogaoTaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogo != 'boolean') throw 'Somente o tipo booleano é aceito'

        if (chaleiraEstaNoFogo && fogaoTaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida');
            resolve(true)
        } else {
            const mensagemDeErro = 'É necessário ligar a chaleira com a água e ligar o fogão senão teu cafezinho não vai ficar pronto nunca'
            reject(mensagemDeErro)
        }
    })
}

let passarCafe = (aguafervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado');
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café');
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara');
        resolve(true)
    })
}

let chaleiraEstaNoFogo = 'teste'
let fogaoTaLigado = true

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogo, fogaoTaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    } catch(error){
        console.log(error);
    }finally{
        console.log('Finalizado o ritual de tomar o café, bora trabalhar')
    }
}

iniciarProcessoDeFazerCafe()