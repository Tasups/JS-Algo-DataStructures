// THIS IS A SWAP FUNCTION THAT IS USED TO HELP SWAP THINGS

function swap(array, i, j){
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

// ES7

const swapES7 = (arr, idx1, idx2) => {
  [arr[idx1] = arr[idx2]] = [arr[idx2] = arr[idx1]]
}