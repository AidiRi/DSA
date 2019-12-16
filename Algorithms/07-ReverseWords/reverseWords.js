const reversWords = (string) => {
  let splitArray = string.split(" ");
  let returnArray = [];
  for(let i = splitArray.length - 1; i >= 0 ; i --){
      returnArray.push(splitArray[i]);
  }
  return returnArray.join(" ");
}

console.log(reversWords("this is a test string"))
