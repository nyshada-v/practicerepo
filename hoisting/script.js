//hoisting (all declarations are moved up)
console.log(a); // undefined
var a = 10; // variable declaration is hoisted, but assignment is not
console.log(a); // 10


//until a variable is initialized, it is in a temporal dead zone


//but when we use let keyword, it will not hoist
//console.log(b); // ReferenceError: Cannot access 'b' before initialization
//let b = 20; // variable declaration and assignment
console.log(b); // 20

console.log(b); // ReferenceError: Cannot access 'b' before initialization
//let b = 20; // variable declaration and assignment
console.log(b); // 20