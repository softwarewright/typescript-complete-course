function add(n1:number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;

    if(showResult) {
        console.log(phrase,result);
    }

    return result;
}

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2, true, "The result is:");