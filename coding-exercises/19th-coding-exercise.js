// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 18

function capitalizeFirst(arr) {
  if (arr.length < 1) return
  if (arr.length === 1) return [arr[0].toUpperCase]
  let newArr = []
  newArr.push(arr[0][0].toUpperCase + arr[0][1].substring(arr[0][1],arr[0][-1]))
  capitalizeFirst(arr.slice(1))  
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']


/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */
