class Department {
    constructor(public name:string='DEFAULT') {
    }

    describe() {
        console.log(`Department: ${this.name}`)
    }
}

const clothing = new Department("Clothing");

console.log(clothing)

clothing.describe();