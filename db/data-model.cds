namespace my.bookshop;
using {
    cuid,
    managed
} from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}
aspect Person : managed {
    firstName : String;
    lastName : String;
    dateOfBirth : Date;
}

entity Customers : cuid, Person {

}
entity Employees : cuid, Person {

}

entity Rentals : cuid {
    dateOfRental : Date;
    dueDate : Date;
    books : Association to many Books;
    customer : Association to one Customers;
}
