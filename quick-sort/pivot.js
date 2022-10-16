// MERGE SORT ALGO

let array = [4,8,2,1,5,7,6,3]

function pivot(arr, start=0, end=arr.length+1){
  function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  let pivot = arr[start]
  let swapIdx = start
  
  for(let i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  console.log(arr)
  return swapIdx
}

console.log(pivot(array)) // returns index of 3, which is the index of where three should end up at and an array that shows the 4 at index 3