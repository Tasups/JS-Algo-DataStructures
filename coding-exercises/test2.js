function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length - 1
  // could just use end and not add start. Because start is 0!!
  let middle = Math.floor((end + start) / 2)
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((end + start) / 2)
  }
  return arr[middle] === elem ? middle : -1
}

// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }

let arr = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(arr, 9))