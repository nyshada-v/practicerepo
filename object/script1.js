let person={
    id:1, name:'ravi'
}

//access props
console.log(`id: ${person.id}, name: ${person.name}`);
//iterate over the object
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

//inserting new prop
person.age=25;
console.log(`After insertion, age: ${person}`);

//deleting prop
delete person.name;
console.log(`After deletion, person: ${JSON.stringify(person)}`);
//updating prop
person.age=35;
console.log(`After update, age: ${person.age}`);