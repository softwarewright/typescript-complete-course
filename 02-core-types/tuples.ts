// const person: {
//     name: string; 
//     age: number;
// }
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // tuples cannot stop a push error
} = {
    name: 'Darrius',
    age: 25,
    hobbies: ['Programming', 'Fishing'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Ping Pong'];

for(const hobby of person.hobbies) {
    console.log(hobby, hobby.toUpperCase());
}

console.log(person.name)