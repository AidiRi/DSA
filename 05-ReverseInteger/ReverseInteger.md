## Reverse integer

### Problem:

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**
```
Input: 123
Output: 321
```

**Example 2:**
```
Input: -123
Output: -321
```

**Example 3:**
```
Input: 120
Output: 21
```
Resource: [LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

### Solution:
```js
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
```
