/**
 * 1. Make a function named sortMaker() which will take an array as input
 * 2. Access the elements of the input array
 * 3. If any elements is negative return "Invalid Input"
 * 4. If elements are equal, then return "equal"
 * 5. If elements are not equal, then return in descending order
 */

function sortMaker(arr){
    const [a, b] = arr

    if(a<0 || b<0){
        return "Invalid Input"
    }else if(a === b){
        return "equal"
    }
    
    if(a>b){
        return [a, b]
    }else{
        return [b, a]
    }

}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 3]));
console.log(sortMaker([2, 2]));
console.log(sortMaker([2, -3]));
console.log(sortMaker([-2, -3]));
console.log(sortMaker([-2, 3, 4]));