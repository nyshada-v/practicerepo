//advanced

marks=[10, 20, 30, 40, 50];
//filter
    //get marks less than 30
let result=marks.filter((element)=>element<30)
console.log(`Filtered marks: ${result}`);

let users=[
    {name: 'ravi', age: 25, salary: 30000},
    {name: 'priya', age: 28, salary: 40000},
    {name: 'sita', age: 22, salary: 25000},
    {name: 'ram', age: 30, salary: 50000},
    {name: 'krishna', age: 27, salary: 45000}
];

    //get users whose age>27
result=users.filter((user)=>user.age>27)
console.log(result);

//map
    //add 10 to each element in marks
    result=marks.map(ele=>ele+10)
    console.log(`Mapped marks: ${result}`);

    //add 50 if marks are more than 30, else add 100
    result=marks.map(ele=>ele>30?ele+50:ele+100)
    console.log(`Mapped marks with condition: ${result}`);

    //add 5000 to each user's salary
    result=users.map(userObj=>{
        userObj.salary+=5000;
        return userObj;
    })
    console.log(result);

//reduce
    //sum of all marks
    result=marks.reduce((accumulator, ele)=>accumulator+ele);
    console.log(`Sum of marks: ${result}`);

    let a=[10];
    result=a.reduce((accumulator, ele)=>accumulator+ele);
    console.log(`Sum of single element array: ${result}`); //10

    //get minimum marks
    result=marks.reduce((acc,ele)=> acc<ele?acc:ele);
    console.log(`Minimum marks: ${result}`);

    //user with minimum salary
    result=users.reduce((acc, userObj)=>acc.salary<userObj.salary?acc:userObj);
    console.log(`User with minimum salary: ${result.name}, Salary: ${result.salary}`);

//find
//find user with name 'ravi'
result=users.find(userObj=>userObj.name==='ravi');
console.log(`User found: ${result.name}, Age: ${result.age}`);

//find index of user with name 'sita'
result=users.findIndex(userObj=>userObj.name==='sita');
console.log(`Index of user found: ${result}`);