type Customer ={
    name: string;
    age: number;
    email: string;
}

function showCustomerInfo(customer: Customer) {
    console.log(`O nome do cliente é: ${customer.name}`);
    console.log(`A idade do cliente é: ${customer.age}`);
    console.log(`O email do cliente é: ${customer.email}`);
}