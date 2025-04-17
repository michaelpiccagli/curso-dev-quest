// setTimeout(() => {
//     console.log("Executando depois de 2 segundos");
    
// }, 2000);

// setInterval(() => {
//     console.log("Executando a cada 4 segundos");
    
// }, 4000);

// console.log("Console log depois do setTimeout");


const idDoIntervalo = setInterval(() => {
    console.log("Executando a cada 2 segundos");
    
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo)
clearTimeout()
