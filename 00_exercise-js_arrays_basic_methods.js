/**
 * Solution of basic methods exercise
 */

// checkPrime returns true/false

let numbersPrimes = [25, 7, 9, 15, 10];

numbersPrimes.forEach(function (value) {
  console.log(checkPrime(value));
});

// for (number of numbersPrimes) console.log(checkPrime(number));

function checkPrime(number) {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function checkPalindrome(string) {
  const result = string.split("").reverse().join("") === string;
  return result;
}

console.log(checkPalindrome("anna"));

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

function sumArray(arrayOfNumbers) {
  let sum = 0;
  for (num of arrayOfNumbers) {
    sum += num;
  }
  return sum;
}

console.log(sumArray(arrayOfNumbers));
