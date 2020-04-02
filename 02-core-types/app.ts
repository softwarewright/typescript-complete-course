function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printObject(o: object) {
    console.log(o);
}

let secondLog: (o: object) => void;

secondLog = printObject;