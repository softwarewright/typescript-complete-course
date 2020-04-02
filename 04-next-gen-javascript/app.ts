const add = (a: number, b:number=20) => a + b;

console.log(add(1, 10));

const printOutput: (a: number | string) => void = output => console.log(output)

printOutput("There is some output");

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5))


const hobbies = ['Sports', 'Cooking', 'Fishing'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    name: 'Max',
    age: 30
};

const copiedPerson = {
    ...person
}

console.log(copiedPerson)

const addRest = (...numbers: number[]) => numbers.reduce((acc, currentValue) => acc + currentValue, 0) 

console.log(addRest(1,2,3,4,5,6,7,8,9));

const add3 = (...numbers: [number, number, number]) => numbers.reduce((acc, currentValue) => acc + currentValue, 0) 

const [hobby1, hobby2, ...remaining] = hobbies;
console.log(hobby1, hobby2, remaining);

const { age, name:personName } = person;
console.log(age, personName);