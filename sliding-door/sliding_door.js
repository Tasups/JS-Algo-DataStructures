function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) {
    console.log("Array is not long enough")
    return null;
  } 
  // this goes over the second argument, num, through the array starting from 0 up until i equals num's total
  // it then adds up the numbers in the array from 0 to the end of the num's total and stores it in maxSum so that we can then start comparing it to other sums
  for (let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  // tempSum starts off as maxSum and then changes based upo
  tempSum = maxSum
  // first iteration of console.log(tempSum), tempSum = 17 
  // iterate through the array, but start at the end of num so that we can "slide" the window forward from that point on, as it has already been stored in maxSum
  for (let i = num; i < arr.length; i++){
    console.log(arr[i - num])
    console.log(arr[i])
    console.log(tempSum)
    // this literally means tempSum is maxSum but now, in the first iteration of the array, we take off the 0th index and add the num + 1 index which is the arr[i]
    // on the first iteration, this literally means "- arr[i - num]" equals "- arr[num - num]" or 0, look at the for loop. Then we add arr[i] which is the num, thus shifting the
    // window up one as the index goes up one and we get the next iteration step of the array
    tempSum = tempSum - arr[i - num] + arr[i]
    console.log(tempSum)
    // this just returns the max value between maxSum and tempSum, thus storing the larger of the two as the next largest sum
    maxSum = Math.max(maxSum, tempSum)
  }
  console.log(`The max sum is: ${maxSum}`)
  return maxSum
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 13)