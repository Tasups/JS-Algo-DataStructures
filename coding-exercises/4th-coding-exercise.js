// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 4
// got it with a little help, it seems that I like the frequency counter, storing the key and values into an object quite a bit

function areThereDuplicates() {

  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]]
      ? (collection[arguments[val]] += 1)
      : (collection[arguments[val]] = 1);
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      console.log(`There are duplicates in the arguments provided!`)
      return true
    }
  }
  console.log(`There are not duplicates in the arguments provided!`)
  return false
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 