"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("The IT Department " + this.name);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error("No report found");
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        return this.instance ? this.instance : new AccountingDepartment('a1', []);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("The Clothing Department " + this.name);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        console.log("Child class");
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
console.log(accounting);
console.log(accounting.name);
accounting.describe();
accounting.addEmployee("Darrius");
accounting.addEmployee("Keionne");
accounting.printEmployees();
var it = new ITDepartment("it1", ["Darrius"]);
console.log(it);
console.log(Department.createEmployee("Darrius"));
//# sourceMappingURL=classes.js.map