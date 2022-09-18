// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 16
// I was able to do this using multiple pointers, left and right, but not the recursive style, which the unit tests wanted
// The recursive function below uses .slice method to cutoff pieces of the string to get to the middle of the string in a recursive fashion
// NOTE SLICE IS USED A LOT IN SIMPLE RECURSIVE FUNCTIONS AS IT IS A SIMPLE METHOD THAT CAN BE CALLED OVER AND OVER AGAIN

// MULTIPLE POINTERS SOLUTION

function isPalindrome(str) {
  if (str.length < 1) return false
  if (str.length === 1) return true
  let left = 0
  let right = str.length - 1
  while (left <= str.length / 2) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

// RECURSIVE SOLUTION

function isPalindrome2(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[-1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

function checkSliceMethod(str) {
  console.log("first letter: " + str[0])
  console.log("sliced letter: " + str.slice(-1))
}

// console.log(isPalindrome2('awesome')) // false
// console.log(isPalindrome2('foobar')) // false
// console.log(isPalindrome2('tacocat')) // true
// console.log(isPalindrome2('amanaplanacanalpanama')) // true
// console.log(isPalindrome2('amanaplanacanalpandemonium')) // false

checkSliceMethod("tacocat");
checkSliceMethod("amanaplanacanalpanama");

/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */
