// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)
// this one was fairly easy. the fact that we know that the 0s come after the 1s, means that we can start from the end and move forward which will shorten the time complexity in the function

// function countZeroes(array){
//   let count = 0
//   for(let i = array.length - 1; i >= 0; i--){
//     if(array[i] === 0){
//       count++
//     }
//   }
//   return count
// }

// console.log(countZeroes([1,1,1,1,0,0])) // 2
// console.log(countZeroes([1,0,0,0,0])) // 4
// console.log(countZeroes([0,0,0])) // 3
// console.log(countZeroes([1,1,1,1])) // 0

//######################################################
// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Time Complexity - O(log n)

function sortedFrequency(array, num){
  let count = 0
  let halfPoint = Math.floor(array.length / 2)
  if(num > halfPoint){
    for(let i = array.length; i >= halfPoint; i--){
      if(array[i] === num) {
        count++
      }
    }
  } else if (num < halfPoint){
    for(let i = 0; i < halfPoint; i++){
      if(array[i] === num){
        count++
      }
    }
  } else {
    return -1
  }
  return count
}



console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1