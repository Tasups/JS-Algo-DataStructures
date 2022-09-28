// INSERTION SORT ALGO

// THIS METHOD IS USEFUL FOR LIVE, STREAMING OF DATA AND SORTING AS IT COMES IN

let array = [2, 1, 9, 76, 4]
let funArray = [19, 51, 46, 78, 1, 3, 5, 521, 10, 1022, 25, 17, 18, 57, 345]

function insertionSort(arr){
  const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
  for(let i = 1; i < arr.length; i++){
    let j
    let currentVal = arr[i]
    for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  
  return arr
}

console.log(insertionSort(funArray))