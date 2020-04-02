class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log(`Department: ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees);
    }
}

const clothing = new Department("Clothing");

console.log(clothing)

clothing.describe();
clothing.addEmployee("Darrius")
clothing.addEmployee("Keionne")
clothing.printEmployees();