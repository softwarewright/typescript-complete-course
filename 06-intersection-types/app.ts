function addFn(a: string, b: string): string;
function addFn(a: number, b:number): number;
function addFn(a: number|string, b: number|string) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}


const result = addFn('Darrius', 'Keionne');

const fetchedUserData = {
    id: 'u1',
    name: 'Darrius',
    job: { title: 'CEO', description: 'My own company' }
};

// optional chaining
console.log(fetchedUserData?.job?.title);


const userInput = null;

const storedData =  userInput ?? 'DEFAULT';

console.log(storedData);