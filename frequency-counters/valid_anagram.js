function validAnagram(str1, str2){
    if(str1.length != str2.length){
        console.log("false")
        return false
    }
    
    let lookup = {}
    for(let i = 0; i < str1.length; i++) {
        let char = str1[i]
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1
    }
    for(let j = 0; j < str2.length; j++) {
        let char = str2[j]
        if(!lookup[char]) {
            console.log("false")
            return false
        }
        lookup[char] -= 1
    }
    console.log(true)
    return true
}
validAnagram('', '') // true
validAnagram('aaz', 'aza') // true
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)

*/