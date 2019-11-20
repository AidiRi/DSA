/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
*/

const singleNumber = (arr) => {

  if ( arr.length === 1 ){
    return arr[0]
  }

  let sortedArr = arr.sort((a,b) => a - b);
  for (let i = 0; i < sortedArr.length ; i+=2) {
    if ( sortedArr[i] !== sortedArr[i + 1] ){
      return sortedArr[i];
    }
  }
}

/*
A hash can be used if you're not worried about space, and still has O(n) time:

const singleNumber = (arr) => {
  let numHash = {};
  for( let i = 0; i < arr.length; i ++ ){
    if( numHash.hasOwnProperty(arr[i]) ){
      delete numHash[arr[i]];
    } else {
      numHash[arr[i]] = 1;
    }
  }
  return Object.keys(numHash)[0];
}
*/

console.log (singleNumber([4,4,1,2,2]));
