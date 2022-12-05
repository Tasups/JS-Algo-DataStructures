// FREECODECAMP 10 COMMON CODING INTERVIEW PROBLEMS https://www.youtube.com/watch?v=Peq4GCPNC5c

// This is a function that is supposed to see if the two arguments passed in, both being strings, 
// are valid anagrams of each other. 

// METHODOLOGY: The best way I can think of approaching it, is also my favorite thing in coding (almost),
// looping through one of the arguments and storing the characters and how often they appear. This can
// be done by creating an object of key, value pairs of each character in the string and either set the 
// key to the character value and then a value to the number of times it appears, a = 1 on first time 
// seen in the loop and then a = 2 on the second time. After the loop is done, then you can go through
// and loop over the second string, str2, and do the exact same but this time subtract for each time
// the char shows up. This should be an O(n) time complexity as we're going through two loops, which is 
// 2n, or n. There can be some shortening of the time by short-circuiting in the second loop if there is
// no char found in the storage object. Else, I believe it is an O(n) and a space complexity of O(n).

function validAnagram (str1, str2) {
 
  let charCollection = {}
  
  for(let char of str1){
    if(charCollection[char]){
      charCollection[char]++
    } else {
      charCollection[char] = 1
    }
  }
  for(let char of str2){
    if(!charCollection[char]){
      console.log("not valid anagram")
      return false
    } else if (charCollection[char]){
      charCollection[char]--
    }
  }
  console.log(charCollection)
  return "the arguments are valid anagrams of one another"
}

console.log(validAnagram('tacocat', 'hot dog'))
console.log(validAnagram('tacocat', 'aaccott'))
console.log()

