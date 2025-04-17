function colocarAguaParaFerver(){
    console.log('Colocar água para ferver');
    setTimeout(() => {
        console.log('Água ferveu');
        passarOCafé()
    }, 5000);
}



function prepararParaPassarOCafé(){
    console.log('Pegar o pó de café');
    console.log('Pegar o filtro de café');
    console.log('Colocar o café no filtro');
    console.log('Colocar o filtro em cima da zícara');
    
}

function passarOCafé() {
    console.log('Passando o café');
}

colocarAguaParaFerver()
prepararParaPassarOCafé()
