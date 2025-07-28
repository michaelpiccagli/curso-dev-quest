function greet(name: string) {
    console.log(`'Olá', ${name}!`);
}

//greet(20)// Isso causa um erro de tipo

greet('michael')

function doubleNumber(number: number): number{
    return number * 2;
}

const resultado = doubleNumber(3);
console.log(resultado);
