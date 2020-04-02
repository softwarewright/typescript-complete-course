const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked! ' + message)
};

button.addEventListener('click', clickHandler.bind(null, "There is a message"));
const age = 21;
if(age > 20) {
    let isOld =true;
}

console.log(isOld)