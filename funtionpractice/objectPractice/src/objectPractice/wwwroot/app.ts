let employee = {
    firstName:'bill',
    lastName: 'Gates'
}
console.log(employee.firstName + '' + employee.lastName);
}

let movie = {
    title: 'stive Job',
    director: 'Uknown'

}
console.log(movie.title + '' + movie.director);

let car = {
    year: 'Mazda',
    Model: 2018
}
console.log(car.year + '' + car.Model);

let product = {
    name: 'milk',
    price: 2.99,
    calculateTax() {
        return this.name;
    },
    sayName() {
        return this.name;
    },
    getDetails() {
        let details: string = 'Name: ' + this.name + 'price: ' + this.price;
        console.log(details);
    }
}
