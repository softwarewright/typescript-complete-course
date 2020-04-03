// type  AddFn = (a: number, b: number) => number
interface AddFn {
    (a: number, b: number):number;
}

let add: AddFn = (a, b) => {
    return a + b;
};

interface Named {
    readonly name: string;
    outputName?:string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${name}`);
    }
    
}

let user: Greetable;

user = new Person("James");
// user = {
//     name: "Darrius",
//     age: 25,
//     greet(phrase:string) {
//         console.log(phrase);
//     }
// };

//fails because it's readonly
// user.name = "sdfsdfsf"

user.greet('Hello there');

