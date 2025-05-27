//arithmetic operators
//+ - * / %
let a=10;
let b=20;
console.log("sum: ", a+b)
console.log("difference: ", a-b);
console.log("product: ", a*b);
console.log("division: ", a/b);
console.log("remainder: ",a%b)

//assignment operator
let m=20, n=30;
//==
console.log("m==n: ",m==n);
n='20';
//===
console.log("n modified to string 20");
console.log("m==n: ",m==n);
console.log("m===n: ",m===n);

//comparision operators
//== === != > >= < <=

//logical operators
// && || !
let e=123;
console.log(e>100 && e<200);

//conditional operator
// ? :
let age=18;
let canVote = (age > 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);