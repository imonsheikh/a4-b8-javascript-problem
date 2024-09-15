/**
 * 1. function will receive a parameter   which will be number
 * 2. Convert the number to cube
 * 3. return the result
 * 4. return error message if we get other data type instead of number.
 * 5. 
 */

function cubeNumber(number){
    if(typeof number !== 'number' || isNaN(number)){
        return "please Provide a number"
    }

    const result = Math.pow(number, 3)
    return result
}


console.log(cubeNumber(2));
console.log(cubeNumber(3));
console.log(cubeNumber(4));

console.log(cubeNumber([]));
console.log(cubeNumber("HLL"));
console.log(cubeNumber({}));
console.log(cubeNumber(null));
console.log(cubeNumber(undefined));
console.log(cubeNumber(NaN));
console.log(cubeNumber(isNaN));
console.log(cubeNumber(true));


