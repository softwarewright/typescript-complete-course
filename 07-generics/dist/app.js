"use strict";
const names = ['a', 'b', 'c'];
names.map(n => n.toUpperCase());
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
function merge(a, b) {
    return Object.assign(a, b);
}
const mergeResult = merge({ name: 'Max' }, { age: 30 });
console.log(mergeResult.name, mergeResult.age);
;
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1)
        descriptionText = 'Got one elemenet';
    if (element.length > 1)
        descriptionText = `Got ${element.length} elements`;
    return [element, descriptionText];
}
countAndDescribe(['Sports', 'Money']);
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
extractAndConvert({ name: 'Darrius' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    reomveItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Darrius');
textStorage.addItem('Darrius2');
textStorage.addItem('Darrius3');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const newNames = ['Max', 'Anna'];
//# sourceMappingURL=app.js.map