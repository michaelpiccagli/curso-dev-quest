type Customer = {
    firstName: string;
    lastName?: string; //lastName é opcional adicionado o sinal de ?
    age: number;
}

const newCustomer: Customer = {
    firstName: 'Michael',
    age: 35
}

console.log(newCustomer);

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName}`);
    console.log(`O último nome é: ${lastName}`);
}

printName("Michael")

printName("Michael", "Piccagli")