function add(n1: number, n2: number): number {
    return n1 + n2;
}

let combineValues: (a: number, b:number) => number;

combineValues = add;

function printObject(o: object) {
    console.log(o);
}

let secondLog: (o: object) => void;

secondLog = printObject;

function addAndHandle(n1:number, n2:number, cb: (result:number)=>void) {
    cb(n1 + n2);
}


addAndHandle(2,2, result=>console.log(result));