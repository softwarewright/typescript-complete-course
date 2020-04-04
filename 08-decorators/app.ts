function Logger(logString: string='Logging') {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}} >(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super(...args);
                const hookEl = document.getElementById(hookId);
                console.log(hookEl)
                // const p = new originalConstructor();
                if(hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}
// closures execute top down
@Logger('Logging - Person')
@WithTemplate('<h1>Hello From JavaScript</h1>', 'app')
// ^ decorators executes bottom up ^
class Person {
    name = 'Darrius';

    constructor() {
        console.log('Creating person object');
    }
}

const person = new Person();

console.log(person);

/**
 * Decorators run when the class is defined
 */
function Log(target: any, propName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propName);
}

// Can change the property descriptor and return it 
function Log2(target: any, name:string, descriptor: PropertyDescriptor) {
    console.log('Accessor');
    console.log(target,name, descriptor)

    // return {}
}

function Log3(target: any, name:string, descriptor: PropertyDescriptor) {
    console.log('Method');
    console.log(target, name, descriptor)
}

// params is not used
function Log4(target: any, name:string, position: number) {
    console.log('Param');
    console.log(target, name, position)
}

class Product {
    title: string;
    @Log
    private _price: number;

    @Log2
    set price(value: number) {
        if(value > 0) {
            this._price = value;
        } else {
            throw new Error();
        }
    }

    constructor(t: string, p:number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number) {
        return this._price * (1 + tax); 
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; //.bind(target);

    const newDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }

    return newDescriptor;
}

class Printer {
    message = 'This works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property:string]: {
        [validatableProp:string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target:any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target:any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any):boolean {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true
    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('Invalid');
        return;
    }

    console.log(createdCourse);
})
