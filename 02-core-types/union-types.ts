type ConversionTypes = 'as-number' | 'as-string';
type Combinable = number | string;

function addUnion(n1: Combinable, n2: Combinable, resultType: ConversionTypes) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultType === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    if(resultType === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
    return result;
}


const combineArgs = addUnion('30', '26', 'as-number');
console.log(combineArgs);

