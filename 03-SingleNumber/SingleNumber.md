## Single Number

### Problem:

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**
```
Input: [2,2,1]
Output: 1
```

**Example 2:**
```
Input: [4,1,2,1,2]
Output: 4
```

Resource: [LeetCode](https://leetcode.com/problems/single-number/description/)


### My Solution:

```js
const singleNumber = (arr) => {
  //Conditional for edge cases that input an array with only one integer
  if ( arr.length === 1 ){
    return arr[0]
  }
  //First sorting the array from smallest to largest, which will group number pairs together
  let sortedArr = arr.sort((a,b) => a - b);
  //Iterating through the array, 2 at a time...
  for (let i = 0; i < sortedArr.length ; i+=2) {
    //compares each second num with num next to it, if they don't match, the first num will always be the single num and will be returned.
    if ( sortedArr[i] !== sortedArr[i + 1] ){
      return sortedArr[i];
    }
  }
}
```
