// Generics in TypeScript utiliza o <T> para definir um tipo genérico 

function makeArray<T>(item: T): T[] {
    return [item]
} 

const numbers = makeArray(10);
console.log(numbers);

const names = makeArray("Michael");
console.log(names);
