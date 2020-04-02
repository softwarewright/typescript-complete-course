var Department = /** @class */ (function () {
    function Department(name) {
        if (name === void 0) { name = 'DEFAULT'; }
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var clothing = new Department("Clothing");
console.log(clothing);
clothing.describe();
