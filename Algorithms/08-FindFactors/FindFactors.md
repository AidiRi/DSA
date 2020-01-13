## Find factors

### Problem

Given a positive integer, return all the smallest factors that would result in the given integer.

Assume an array of all possible primes would be provided.

**Example:**

```
Given num = 64,
Because 2 is the smallest prime factor of 64, and 2 * 2 * 2 * 2 * 2 * 2 = 64,
return six 2s.
```
### My Solution

```js
//Passing pp as a 'possible primes' array
const findFactors = (int, pp) => {
  //Create variables for the original number that will be manipulated and the factors found
  let num = int;
  let factors = [];

  //Iterating through the possible primes array
  for(prime of pp){
    //While num is not 1 AND divisible by the prime number...
    while(num != 1 && num % prime == 0 ){
      //add the prime to the factors array...
      factors.push(prime);
      //and will divide num by the current prime
      num /= prime;
      //Num will continue to be divided by primes only if it's divisible and doesn't result in a fraction.
      //If num results in 1, we've found all possible prime numbers and can return factors array. 
    }
  }
  return factors;
}
```
