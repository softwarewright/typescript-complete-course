"use strict";
var add = function (a, b) {
    return a + b;
};
var Person = (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + name);
    };
    return Person;
}());
var user;
user = new Person("James");
user.greet('Hello there');
//# sourceMappingURL=app.js.map