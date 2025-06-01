//objects of different types
//use object literal method
// let emp={}
// let car={}
// let product={}

// //objects of same type
// let student1={}
// let student2={}
//create class(blueprint) for objects
class Employee{
    eno;
    name;
    salary;
    constructor(eno, name, salary) {
        this.eno = eno;
        this.name = name;
        this.salary = salary;
    }
}

//create object using class
let emp1=new Employee(1, 'ravi', 30000);
let emp2=new Employee(2, 'priya', 40000);
console.log(emp1);
console.log(emp2);