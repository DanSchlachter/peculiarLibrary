using my.bookshop as my from '../db/data-model';

service CustomerService {
    @readonly entity Books as projection on my.Books;
    // customer should be able to see own Rentals
}

service EmployeeService {
    entity Books as projection on my.Books;
    entity Customers as projection on my.Customers;
    entity Rentals as projection on my.Rentals;
}

service AdminService {
    entity Employees as projection on my.Employees;
}