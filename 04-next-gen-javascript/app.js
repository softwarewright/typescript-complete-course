var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var add = function (a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
};
console.log(add(1, 10));
var printOutput = function (output) { return console.log(output); };
printOutput("There is some output");
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5));
var hobbies = ['Sports', 'Cooking', 'Fishing'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var addRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
};
console.log(addRest(1, 2, 3, 4, 5, 6, 7, 8, 9));
var add3 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
};
var hobby1 = hobbies[0], hobby2 = hobbies[1], remaining = hobbies.slice(2);
console.log(hobby1, hobby2, remaining);
var age = person.age, personName = person.name;
console.log(age, personName);
