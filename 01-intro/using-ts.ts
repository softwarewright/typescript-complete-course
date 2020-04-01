const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement; // ! this will always retrieve an element cast to type
const addButton = document.getElementById('addBtn');

function add(num1: number, num2: number) {
    return num1 + num2;
}

addButton.addEventListener('click', () => {
    alert(add(+input1.value, +input2.value))
})