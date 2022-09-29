// BUBBLE SORT ALGO

// PLEASE NOTE THAT BUBBLE SORT IS ONLY GOOD IF THE DATA IS ALREADY MOSTLY SORTED, E.G. IF SOMETHING WAS JUST ADDED TO THE DATA SET

const array = [37, 45, 29, 8, 12, 88, -3]

// THE UNOPTIMIZED METHOD

function bubbleSort1(arr) {
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort1(array))

// OPTIMIZED BUBBLE SORT

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(array))

// FULLY OPTIMIZED BUBBLE SORT DUE TO THE FACT THAT WE SHORT CIRCUIT OR BREAK WHEN NO MORE SWAPS ARE MADE!

function fOBubbleSort(arr) {
  let noSwap
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwap = false
      }
    }
    if (noSwap === true) break
  }
  return arr
}

console.log(fOBubbleSort(array))