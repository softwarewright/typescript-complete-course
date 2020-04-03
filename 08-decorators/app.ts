function Logger(logString: string='Logging') {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        console.log(hookEl)
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name;
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