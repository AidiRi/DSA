/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

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
        // Can't use truthy conditional (numHash[possSum]) because a 0 value is falsey
        return [numHash[possSum], i];
      } else {
        numHash[arr[i]] = i;
        console.log(numHash)
      }
    }
  }
}

console.log ( twoSum( [ 7, 2, 34, 5, 8, 15], 10) );
