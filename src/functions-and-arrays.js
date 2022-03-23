// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2
  } else if (num1 === num2) {
    return num1;
  }

}
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// function findLongestWord(arr) {
//   let countArr = [];
//   for (let i=0; i<arr.length; i++){
//     countArr.push(arr[i].length)
//   }
// }



// console.log(maxOfTwoNumbers(11, 16)); 

// // Iteration #2: Find longest word
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// const numbers2 = [8, 10, 6, 12, 1]

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

console.log(sumNumbers(numbers))




// Iteration #3.1 Bonus:
