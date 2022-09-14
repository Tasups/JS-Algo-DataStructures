// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 7
// passed on first try, did need to look at and follow the sliding door solution in depth to further understand and implement my solution.
// I did need to re-visualize the second for loop to understand how it is sliding through the array and getting more information to formulate the max subarray. Keep it up!

function maxSubarraySum(arr, num) {
  // check to see if the num is longer than the array
  if (num > arr.length) {
    console.log(`The numeric value of ${num} is longer than the array.`)
    return null
  }
  
  let maxSum = 0
  let tempSum = 0
  
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  
  tempSum = maxSum
  
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j]
    maxSum = Math.max(maxSum, tempSum)
  }
  console.log(`The max sum is: ${maxSum}`)
  return maxSum
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/