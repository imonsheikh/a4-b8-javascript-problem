/**
 * 1. define a function named as "findAddress" which will take object as input.
 * 2. Access the element of the object
 *  3. Formation of  the string as give sample ---> "10, 15A, Earth Perfect"
 * 4. Replace the missing property with __ double undrscode
 */

function findAddress(obj){
    const street = obj.street || "__"
    const house = obj.house || "__"
    const society = obj.society || "__"

    const str = street + "," + house + "," + society
    return str
}

console.log(findAddress({street:10, house: "15A", society: "Earth"}));
console.log(findAddress({house: "15A", society: "Earth"}));
console.log(findAddress({street:10, society: "Earth"}));
console.log(findAddress({street:10, house: "15A"}));
console.log(findAddress({street:10}));
