## Two sum

### Problem:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### Solution

```js
const twoSum = (arr, target) => {
  if( arr.length === 2 ){
    return [0,1];
  }

  let numHash = {};

  for( let i = 0; i < arr.length; i ++ ){
    if( arr[i] < target ){
      let possSum = (target - arr[i]);
      console.log("possSum", possSum)
      if ( numHash.hasOwnProperty(possSum) ){
        return [numHash[possSum], i];
      } else {
        numHash[arr[i]] = i;
        console.log(numHash)
      }
    }
  }
}
```


Resource: [LeetCode](https://leetcode.com/problems/two-sum/)
