const nome: string = 'Michael';
let idade: number = 35;
let mandouEmail: boolean = true;

let nomes: string[] = ['Michael', 'Paula', 'Rute', 'Carlos', 'Jhonatan', 'William']

let idades: number[] = [35, 37, 53, 54, 30, 27]

//Array<number> é o conceito de array genérico
let dataNasc: Array<number> = [1989, 1988, 1971, 1970, 1994, 1997]

//any é um tipo que aceita qualquer valor(mas é usado em casos específicos)
let obj: any = {x: 0};

function imprimirCoordenadas(pt: {x: number, y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

imprimirCoordenadas({x: 10, y: 20})

let objeto: {x: number, y: number} = {x: 10, y: 20};