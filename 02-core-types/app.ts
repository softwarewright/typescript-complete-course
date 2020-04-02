// we don't know what type needs to be there
let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Max';

// Doesn't work since we don't know the time
// username = userInput;

if(typeof userInput === 'string') {
    username = userInput;
}

// This function never returns a value...
// :never will return a value the function generates and throws an error
function generateError(message:string, code :number):never {
    throw {message, errorCode: code};
}

generateError("An error", 500);