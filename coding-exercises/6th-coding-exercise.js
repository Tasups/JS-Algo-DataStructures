// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 6
// passed on first try, did not need to look at and follow the multiple_pointers solution, which is great!
// I did have a problem of putting the solution code at the bottom instead of withing the while loop, minor issue but worth looking at!!!

function isSubsequence(str1, str2) {
  if (!str1) {
    console.log(`There is no string for string one, therefore, there is a subsequence within string two of nothing.`)
    return true
  }
  let str1Pointer = 0
  let str2Pointer = 0
  while (str2Pointer < str2.length) {
    if (str1[str1Pointer] !== str2[str2Pointer]) {
      str2Pointer++
    }
    if (str1[str1Pointer] == str2[str2Pointer]) {
      str1Pointer++
      str2Pointer++
    }
    if (str1Pointer === str1.length) {
      console.log(`There is a subsequence of string one within string two.`);
      return true;
    }
  }
  console.log(`There isn't a subsequence of string one within string two.`)
  return false
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)