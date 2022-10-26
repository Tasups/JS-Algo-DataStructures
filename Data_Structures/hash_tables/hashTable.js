// HASH TABLE DATA STRUCTURE

class HashTable {
  constructor(size=4){
    this.keyMap = new Array(size)
  }

  _hash(key){
    let total = 0
    let WEIRD_PRIME = 31
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    // hash the index to create an index to store the key, value pair
    let index = this._hash(key)
    // if there's nothing at that index, create an empty array to store the key, value pair
    if(!this.keyMap[index]){
      this.keyMap[index] = []
    }
    // store the key, value pair at the index, you'd do this either way
    this.keyMap[index].push([key, value])
  }
}

let ht = new HashTable()
ht.set("hello world", "goodbye!!")
ht.set("dogs", "are cool")
ht.set("cats", "are fine")
ht.set("i love", "pizza")
ht.set("hi", "bye")
console.log(ht)
ht.set("french", "fries")
console.log(ht)
