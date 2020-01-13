/*
Given a positive integer, return all the smallest factors that would result in the given integer.

Assume an array of all possible primes would be provided.
*/
const possiblePrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const findFactors = (int, pp) => {
  let num = int;
  let factors = [];

  for(prime of pp){
    while(num != 1 && num % prime == 0 ){
      factors.push(prime);
      num /= prime;
    }
  }
  return factors;
}

console.log(findFactors(87, possiblePrimes))
