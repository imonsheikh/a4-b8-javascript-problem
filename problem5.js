/**
 * 1. Make a function named as canPay(), this will take input parameters 
 * 2. Make sum of all the elements of the array.
 * 3. If the sum is greater than or equal second input parameter, return true else return false
 * 4. If first input is an empty array, return error message
 */

function canPay(changeArray, totalDue){

    if(changeArray.length === 0){
        return "Your Array Is Empty"
    }
  
    let sum = 0;
     for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum += element
     }
    //  console.log({sum});//{ sum: 6 }
    //  console.log(sum);//6
    if(sum >= totalDue){
        return true
    }else{
        return false
    }
     
}

console.log(canPay([1, 2, 3], 5));
console.log(canPay([1, 2, 5], 10));
console.log(canPay([], 5));
