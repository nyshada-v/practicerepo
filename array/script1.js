//array
let arr=[10,20,30,40];
console.log(`length: ${arr.length}`);

//iterate over the array
function printArray(arr){
for(let ele of arr){
    console.log(ele);
}
}

//inserting elements dynamically
    //at start
    l2=arr.unshift(13,15)
    console.log(`After insertion, length: ${l2}`);
    printArray(arr);
    //at end
    arr.push(70);
    console.log(`After insertion, length: ${arr.length}`);
    //in between
    //position and value, splice(index, how many to delete, value), returns deleted elements
    arr.splice(2, 0, 25);
    console.log(`After insertion, length: ${arr.length}`);
    printArray(arr);
//deleting elements dynamically
    //at start
    let del1=arr.shift();
    console.log(`deleted: ${del1}`);
    //at end
    let del2=arr.pop()
    console.log(`deleted: ${del2}`);
    //in between, splice(index, how many to delete)
    let del3=arr.splice(2, 1);

//update
let prev=arr.splice(1, 1, 22); //index, how many to delete, value
console.log(`previously deleted: ${prev}`);