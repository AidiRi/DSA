## Palindrome Word

### Problem:

Given a single string of words, determine whether it is a palindrome.

**Example 1:**
```
Input: "racecar"
Output: true
```

**Example 2:**
```
Input: "car"
Output: false
```


### Solution:
```js
const palindrome = (string) => {
  let compareArray = [];
  let counter = 0;
  //Will push first half of string into compareArray
  while (counter < Math.ceil(string.length / 2)) {
    //Math.ceil will account for strings of odd length and include 'middle' letter
    compareArray.push(string[counter])
    counter += 1;
  }
  //If compareArray has odd length, will pop last letter which will not need to be compared
  if(string.length % 2 !== 0){
    compareArray.pop()
  }
  //Iterates through, starting at the second half of string)
  for(let i = Math.ceil(string.length/2); i < string.length; i ++){
    //Pops last letter of compareArray, and checks to see if equal to string[i]
    let letter = compareArray.pop()
    if(string[i] !== letter){
      return false;
    }
  }
  return true;
}
```
