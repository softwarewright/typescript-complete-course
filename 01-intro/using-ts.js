var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2'); // ! this will always retrieve an element cast to type
var addButton = document.getElementById('addBtn');
function add(num1, num2) {
    return num1 + num2;
}
addButton.addEventListener('click', function () {
    alert(add(+input1.value, +input2.value));
});
