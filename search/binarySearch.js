function binarySearch(arr, elem) {
  // assign a start of the array
  let start = 0;
  // assign an end of the array
  let end = arr.length - 1;
  // find the middle of the array, round down or up
  let middle = Math.floor((end + start) / 2);
  // while we haven't found the elem and start is still less than or equal to end(because if it is more than the end, we haven't found the elem and won't go infi)
  while (arr[middle] !== elem && start <= end) {
    // if the elem is less than the middle, the end becomes the middle minus one
    if (elem < arr[middle]) end = middle - 1;
    // else, we make the start bigger, to the middle plus one
    else start = middle + 1;
    // then we reassign the middle between the new end or start and keep going with the while loop
    middle = Math.floor((end + start) / 2);
  }
  // if the arr[middle] equals the elem, then we break out of the while loop and return the middle
  // if we find out that the start is larger than the end, we haven't found the elem and break out of the while loop and return -1
  return arr[middle] === elem ? middle : -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 9));
