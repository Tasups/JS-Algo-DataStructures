// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 18

function flatten(arrOfArrays) {
  let newArr = []
  for (let i = 0; i < arrOfArrays.length; i++){
    if (Array.isArray(arrOfArrays[i])) {
      newArr = newArr.concat(flatten(arrOfArrays[i]))
    } else {
      newArr.push(arrOfArrays[i]);
    }
  }
  return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */