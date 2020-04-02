"use strict";
var button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
;
button.addEventListener('click', clickHandler.bind(null, "There is a message"));
var age = 21;
if (age > 20) {
    var isOld = true;
}
console.log(isOld);
//# sourceMappingURL=app.js.map