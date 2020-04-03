abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public readonly name:string) {
    }

    static createEmployee(name:string) {
        return { name }
    }

    abstract describe(): void;
    //  {
    //     console.log(`Department: ${this.name} ${Department.fiscalYear}`)
    // }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    describe(): void {
        console.log("The IT Department " + this.name);
    }
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport(): string {
        if(this.lastReport) return this.lastReport;
        throw new Error("No report found")
    }

    private static instance: AccountingDepartment;

    static getInstance(): AccountingDepartment {
        return this.instance ? this.instance : new AccountingDepartment('a1', [])
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }

    describe(): void {
        console.log("The Clothing Department " + this.name);
    }

    addEmployee(employee: string) {
        console.log("Child class")
        this.employees.push(employee)
    }

    addReport(report: string) {
        this.reports.push(report);
    }
}

const accounting = AccountingDepartment.getInstance();

console.log(accounting)

console.log(accounting.name);

accounting.describe();
accounting.addEmployee("Darrius")
accounting.addEmployee("Keionne")
accounting.printEmployees();

const it = new ITDepartment("it1", ["Darrius"]);

console.log(it)


console.log(Department.createEmployee("Darrius"));