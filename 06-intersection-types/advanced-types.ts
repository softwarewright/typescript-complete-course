type Admin = {
    name: string;
    privileges: string [];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
// interfaces can work with this example as well.


const e1: ElevatedEmployee = {
    name: 'Darrius',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`Name: ${emp.name}`);

    if('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`)
    }

    if('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}


printEmployeeInformation({ name: 'Darrius', startDate: new Date() });


class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo', amount);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(new Car());
useVehicle(new Truck());

interface Bird {
    type: 'bird';
    flyingSpeed:number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

// discriminated unions
function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }

    console.log(`Moving with speed: ${speed}`);
}

//casting
// const input = <HTMLInputElement>document.getElementById('message-output')!;
const input = document.getElementById('input-text')! as HTMLInputElement;

input.value = 'Hi there!';


//index types

interface ErrorContainer {
    // id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital letter'
}

// function overloads



