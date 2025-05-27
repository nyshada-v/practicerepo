//Global scope
let a=10;
function test1(){
    //x declared in function scope or local scope
    let x=100;
    console.log("Value of a in test1: ", a);
    console.log(`value of x: ${typeof x}`)
    a=23;

    //block scope
    if(x==100){
        let y=200;
    }
    console.log(`value of y: ${typeof y}`); // This will throw an error because y is not defined outside the block
}
test1();
console.log(`value of x: ${typeof x}`)
console.log("Value of a outside test1: ", a);


