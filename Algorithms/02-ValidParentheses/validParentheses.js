/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Note that an empty string is also considered valid.
*/

const validParentheses = str => {
  str.length == 0 ? true : null;
  parensHash = {
      ")" : "(",
      "]" : "[",
      "}" : "{",
  };
  inventory = [];
  for (let parens of str){
    // console.log("parensHash[parens]", parensHash[parens])
    console.log("parens", parens)
    console.log("inventory", inventory)
    if ( parensHash[parens] ){
      let lastParens = inventory.pop();
      console.log("last parens", lastParens);

      if ( parensHash[parens] !== lastParens ){
        return false;
      }

    }
    else {
      inventory.push(parens)
    }
  }
  inventory.length == 0 ? true: false;
}

console.log(validParentheses( "({[]}" ))
