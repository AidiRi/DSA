/*
Given a single string of words, determine whether it is a palindrome. 
*/
const palindrome = (string) => {
  let compareArray = [];
  let counter = 0;
  while (counter < Math.ceil(string.length / 2)) {
    compareArray.push(string[counter])
    counter += 1;
  }
  if(string.length % 2 !== 0){
    compareArray.pop()
  }
  for(let i = Math.ceil(string.length/2); i < string.length; i ++){
    let letter = compareArray.pop()
    if(string[i] !== letter){
      return false;
    }
  }
  return true;
}


console.log(palindrome("hannah"))
