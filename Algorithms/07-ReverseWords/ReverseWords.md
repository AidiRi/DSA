## Reverse Word

### Problem:

Given a sentence, output the words in reverse order.

**Example:**
```
Input: "this is a test string"
Output: "string test a is this"
```


### Solution:
```js
const reversWords = (string) => {
  //Split string at white spaces and create an array of words.
  let splitArray = string.split(" ");
  let returnArray = [];
  //Iterate through starting from the last word in array and push into returnArray.
  for(let i = splitArray.length - 1; i >= 0 ; i --){
      returnArray.push(splitArray[i]);
  }
  //Join returnArray with white spaces to return a single string with reversed words. 
  return returnArray.join(" ");
}
```
