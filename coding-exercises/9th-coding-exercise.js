// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 9
// I NEED TO REVISIT THIS ONE!!! I LOOKED AT THE SOLUTION AND DON'T FULLY UNDERSTAND IT.

function findLongestSubstring(str) {
  
  if(str.length == 0) {
    console.log(`The string is empty. Please enter a valid string.`)
    return 0
  }
  
  let lookup = {}
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1
  }
  
  for(let key in lookup) {
   if(lookup[key] > 1){
     console
   } 
  }
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/