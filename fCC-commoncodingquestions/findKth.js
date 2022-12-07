// FREECODECAMP 10 COMMON CODING INTERVIEW PROBLEMS https://www.youtube.com/watch?v=Peq4GCPNC5c

// in this exercise, we need to find the kth largest integer in an array. So the function will take two
// arguments, the array(arr) and which largest integer(k). 

// I'm thinking that it would be easy to run a sort through the whole array and then find the kth as 
// arr[k-1]. It seems that merge sort would work well here. I had to look up and relearn merge sort, 
// which wasn't that hard. This means I need to keep going over some of the sorting algorithms until
// I can put them down pretty easily.

function merge(arr1, arr2){
  let result = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    result.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    result.push(arr2[j])
    j++
  }
  return result
}

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function findKthLargest(arr, k){
  const sortedArr = mergeSort(arr)
  const resultArr = sortedArr.reverse()
  const result = resultArr[k - 1]
  return result
}

const arr1 = [1,5,4,3,2, 0, -5]

console.log(findKthLargest(arr1, 1))
console.log(findKthLargest(arr1, 2))
console.log(findKthLargest(arr1, 3))
console.log(findKthLargest(arr1, 4))
console.log(findKthLargest(arr1, 5))
console.log(findKthLargest(arr1, 6))
console.log(findKthLargest(arr1, 7))