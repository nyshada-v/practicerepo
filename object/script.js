//object
let product={
    pid: 100,
    pname: "Laptop",
    brand: "Dell",
    manufacturer: {
        name: "John",
        city: "Bangalore"
    },
    getPDetails: function(){
        console.log("Printing Product Details:");
        console.log(`Product ID: ${this.pid}`);
        console.log(`Product Name: ${this.pname}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Manufacturer Name: ${this.manufacturer.name}`);
        console.log(`Manufacturer City: ${this.manufacturer.city}`);

    }
};
product.getPDetails();