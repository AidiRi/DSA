/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Note that an empty string is also considered valid.
*/

const validParentheses = str => {

  if (str.length === 0) {
    return true
  }

  let parensHash = {
      ")" : "(",
      "]" : "[",
      "}" : "{",
  };

  let inventory = [];

  for (let parens of str){
    if ( parensHash[parens] ){
      let lastParens = inventory.pop();
      if ( parensHash[parens] !== lastParens ){
        return false;
      }
    }
    else {
      inventory.push(parens)
    }
  }

  return (inventory.length === 0 ? true : false);

}



console.log(validParentheses( "({[()]}" ))
