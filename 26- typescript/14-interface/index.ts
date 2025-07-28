interface InterfaceCustomer {
    name: string;
    age: number;
}

interface Adress {
    street: string,
}

interface CustomerProfile extends InterfaceCustomer, Adress {
    id: number | string;
}
const newProfile: CustomerProfile = {
    id: 1,
    name: 'Michael',
    age: 35,
    street: 'Madre clélia'
}

type TypeCustomer ={
    name: string;
    age: number;
}

type TypeAdress = {
    street: string,
}

type TypeCustomerProfile = TypeCustomer & TypeAdress;

const newProfile2: TypeCustomerProfile = {
    name: 'Michael',
    age: 35,
    street: 'Madre clélia'
}