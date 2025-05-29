//array with non-primitive values
let users=[
    {id: 1, name: 'ravi'},
    {id: 2, name: "priya"}
]

//iterate over the array
for(let userObj of users){
    console.log(`id: ${userObj.id}, name: ${userObj.name}`);
}

//inserting elements dynamically
//at start
l2=users.unshift({id:3, name: 'sita'})
console.log(`After insertion, length: ${l2}`);

//at end
users.push({id:4, name: 'ram'});
console.log(`After insertion, length: ${users.length}`);
//in between
users.splice(2,0, {id:5, name: 'krishna'});
console.log(`After insertion, length: ${users.length}`);
for(let userObj of users){
    console.log(`id: ${userObj.id}, name: ${userObj.name}`);
}
//deleting
//at start
let r1=users.shift();
console.log(`deleted: ${r1.name}`);
//at end
let r2=users.pop();
console.log(`deleted: ${r2.name}`);
//in between
//position and value, splice(index, how many to delete, value), returns deleted elements
let r4=users.splice(1,1);
console.log(`deleted: ${r4[0].name}`);

//update
let prev1=users.splice(0,1,{id: 1, name: 'krishna'})
console.log(`previously deleted: ${prev1[0].name}`);