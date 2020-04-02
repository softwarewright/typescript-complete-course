var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var clothing = new Department("Clothing");
console.log(clothing);
clothing.describe();
clothing.addEmployee("Darrius");
clothing.addEmployee("Keionne");
clothing.printEmployees();
