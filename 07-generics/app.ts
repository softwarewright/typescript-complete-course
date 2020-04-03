const names: Array<string> = ['a', 'b', 'c'];

names.map(n => n.toUpperCase());

const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('This is done')
    }, 2000);
});

// function generics
function merge<T extends object,U extends object>(a:T, b:U) {
    return Object.assign(a, b);
}

const mergeResult = merge({name: 'Max'}, {age: 30});
console.log(mergeResult.name, mergeResult.age);

// breaks due to constraints...
// const merge2 = merge(2,3);

interface Lengthy {
    length: number
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if(element.length === 1) descriptionText = 'Got one elemenet';
    if(element.length > 1) descriptionText = `Got ${element.length} elements`;

    return [element, descriptionText]
}

countAndDescribe(['Sports', 'Money'])

// ensure there is the correct structure with keyof
function extractAndConvert<T extends object, U extends keyof T>(obj:T, key: U) {
    return `Value: ${obj[key]}`;
}


extractAndConvert({name: 'Darrius'}, 'name');


class DataStorage<T extends number | string | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    reomveItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Darrius');
textStorage.addItem('Darrius2');
textStorage.addItem('Darrius3');

console.log(textStorage.getItems());

// const objStorage  = new DataStorage<object>();

// objStorage.addItem({name: 'Darrius'});
// objStorage.addItem({name: 'James'});

// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}


const newNames: Readonly<string[]> = ['Max', 'Anna'];
// This is readonly cannot be changed
// newNames.push('sdfsf')