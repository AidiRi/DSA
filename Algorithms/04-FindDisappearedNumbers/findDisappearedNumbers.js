/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/*
const findDisappearedNums = (arr) => {
  let container = [];
  for( let i = 1; i < arr.length ; i ++ ){
    // Incrementing from 1 to number that is one less than length of arr. (The number equal to the length of arr is always included in arr.)
    if( arr.indexOf(i) === -1 ){
      //indexOf will loop through arr, which makes this O(n^2) in time.
      container.push(i);
    }
    // Will look for the index of i in arr, if it doesn't exist it will return -1 and push i into the container.
  }
  return container;
}
*/

const findDisappearedNumbers = (nums) => {
  // For constant space, make use of the indices of nums
  let result = []
  for( let num of nums ) {
    // We take the number we're on as the index
    let index = Math.abs(num) - 1
    nums[index] = Math.abs(nums[index]) * -1
    // Mark that it has been "seen" by making it a negative
    // Math.abs will make sure we don't change it to a positive if it's 'seen' twice
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
    // Will push all the indices of nums that are positive, those indices are one less of the numbers disappeared.
  }

  return result
}


console.log(findDisappearedNumbers([4,3,2,7,8,3,2,1]))
