// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 3
// passed on first try!

function sameFrequency(num1, num2) {

  let num1ToString = num1.toString()
  let num2ToString = num2.toString()
  let num1Length = num1.toString().length
  let num2Length = num2.toString().length

  if (num1Length !== num2Length) {
    console.log(`${num1} and ${num2} are not the same length! Therefore they're not comparable for this function!`)
    return false
  }

  let comparator = {}
  for (let i = 0; i < num1Length; i++) {
    let char = num1ToString[i]
    comparator[char] ? (comparator[char] += 1) : (comparator[char] = 1);    
  }

  for (let j = 0; j < num2Length; j++) {
    let char = num2ToString[j]
    if (!comparator[char]) {
      console.log(`They're not comparable for this function!`)
      return false
    }
    comparator[char] -= 1
  }
  console.log(`The integers have the same frequency of numbers`)
  return true
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false