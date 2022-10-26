// FOR FUN, I MADE A CONVERTER FROM A STRING INTO A NUMBER THAT COULD BE USED IN IMPLEMENTING A HASH TABLE

function practiceHash(string, storageLength){
  let total = 0
  for(let i = 0; i < string.length; i++){
    total += string[i].charCodeAt() - 96
  }
  let result = total % storageLength
  return result
}

// console.log(practiceHash("hello", 9))

// THIS IS ANOTHER EXAMPLE BUT USING THE MODULO AS YOU BUILD UP THE STRING

function coltHash(string, storageLength){
  let total = 0
  for(let i = 0; i < string.length; i++){
    let value = string[i].charCodeAt() - 96
    total = (total + value) % storageLength
  }
  return total
}

// console.log(coltHash("pink", 10))
// console.log(coltHash("orangered", 10))
// console.log(coltHash("cyan", 10))

function hash(key, arrayLen){
  let total = 0
  let WEIRD_PRIME = 31
  for(let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96 
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

console.log(hash("hello", 13))
console.log(hash("goodbye", 13))
console.log(hash("hi", 13))
console.log(hash("cyan", 13))