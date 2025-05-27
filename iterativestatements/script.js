//for loop
//number of iterations is known
for (let i = 0; i < 5; i++) {
    //body
    console.log("i is: " + i);
}

//while loop
//number of iterations is not known
let j = 0;
while (j < 5) {
    //body
    console.log("j is: " + j);
    j++;
}
//do-while loop
//number of iterations is not known, but the body should execute at least once
let k = 0;
do {
    //body
    console.log("k is: " + k);
    k++;
} while (k > 5);

//function
//follow lower camel case naming convention
let a=10, b=20;
function test(a,b){
    return a+b;
}
let sum=test(a,b);
console.log("Sum is: " + sum);

//function expression
let test1 = function(a, b) {
    return a + b;
};
console.log("Sum is: " + test1(10, 25));

//arrow function
//body has only one statement
let test2=(a,b)=>a + b;
console.log("Sum is: " + test2(10, 30));
