// RADIX SORT ALGO

// HELPER FUNCTIONS

let numsArray = [10, 5879, 1, 19, 12, 7, 45, 365]

function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

function digitCount(num){
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
  let max = 0
  for(let i = 0; i < nums.length; i++){
    let digitTotal = digitCount(nums[i])
    if (digitTotal > max) {
      max = digitTotal
    }
  }
  return max
}

function radixSort(numArr){
  let maxDigitCount = mostDigits(numArr)
  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < numArr.length; i++){
      let digit = getDigit(numArr[i], k)
      digitBuckets[digit].push(numArr[i])
    }
    numArr = [].concat(...digitBuckets)
  }
  return numArr
}

console.log(radixSort([23,345,5467,12,2345,9852]))