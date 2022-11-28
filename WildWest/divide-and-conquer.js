// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(array){
  let count = 0
  for(let i = array.length - 1; i >= 0; i--){
    if(array[i] === 0){
      count++
    }
  }
  return count
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0