/*
Given a 32-bit signed integer, reverse digits of an integer.
*/

const reverseInteger = (num) => {
  let reversed = "";
    let absNum = Math.abs(num);
    //Removes negative if it exists
    absNum = absNum.toString();
    for(let num of absNum){
        reversed = num + reversed
    }
    //Iterates thru the new string, then concatenates so that each number is added to the beginning of the string
    reversed = parseInt(reversed);
    if(num<0){
        reversed = reversed * -1;
    }
    //Only addes negative at the end once integer is reversed. 
    return reversed;
}
 console.log(reverseInteger(123))

//Doesn't account for 32-bit int
