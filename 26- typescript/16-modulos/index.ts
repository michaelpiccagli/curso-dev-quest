import {paginationPerPage, Customer } from './Customer';

interface EspecialCustomer extends Customer {
    couponQuantity: number;
}

const specialCustomer: EspecialCustomer = {
    couponQuantity: 10,
    name: 'Michael',
    age: 35
}