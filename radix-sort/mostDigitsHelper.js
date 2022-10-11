// HELPER FUNCTION FOR RADIX SORT 

let numsArray = [10, 5879, 1, 19, 12, 7, 45, 365]

// function from digitCountHelper
function digitCount(num){
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// finds the highest count of digits in a number in an array
// my solution
function mostDigitsJW(nums){
  let max = 0
  for(let i = 0; i < nums.length; i++){
    let digitTotal = digitCount(nums[i])
    if (digitTotal > max) {
      max = digitTotal
    }
  }
  return max
}

// colt steele's solution for mostDigits function

// function mostDigitsCS(nums){
//   let maxDigits = 0
//   for(let i = 0; i < nums.length; i++){
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//   }
//   return maxDigits
// }

//console.log(mostDigitsCS(numsArray))
console.log(mostDigitsJW(numsArray))

