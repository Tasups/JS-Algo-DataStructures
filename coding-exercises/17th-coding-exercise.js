// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 16

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  // the base case is if the array is empty after all that slicing!!!
  if (arr.length === 0) return false;
  // check to see if the arr at 0 index is odd, if it is return true, does this short circuit the function?
  if (cb(arr[0])) return true
  // recur
  return someRecursive(arr.slice(1), cb)
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false

/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */