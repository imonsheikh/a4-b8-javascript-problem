/**
 * 1. We will write a function named as "matchFinder()" which will take two input
 * 2. we will try to find match between the two strings.
 * 3. return error message if the parameters are not string
 */

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "please specify string as a string parameter"
    }
    
     const result = string1.includes(string2)

     return result
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("John javascriptt", "code"));
console.log(matchFinder("John Doe", "john"));
console.log(matchFinder([]));
