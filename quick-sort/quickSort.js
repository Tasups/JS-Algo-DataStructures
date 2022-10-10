// THE QUICKSORT ALGO. I GET THE IDEA AND WHAT'S GOING ON BUT AM INTERESTED IN ACTUALLY LEARNING TO APPLY IT ON MY OWN. WHERE WOULD YOU USE THIS?

// THE PIVOT HELPER FUNCTION

function pivot(arr, start=0, end=arr.length+1){
 const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start]
  let swapIdx = start
  
  for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right) // returns 3 with the example given below
    // left side
    quickSort(arr, left, pivotIndex - 1)
    // right side
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}


//console.log(quickSort([4,8,2,1,5,7,6,3]))
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))