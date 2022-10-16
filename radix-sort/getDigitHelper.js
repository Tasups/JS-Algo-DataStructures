// HELPER FUNCTION FOR RADIX SORT FOR BASE 10 NUMBERS ONLY

function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

console.log(getDigit(12498, 4))
console.log(getDigit(12498, 3))
console.log(getDigit(12498, 2))
console.log(getDigit(12498, 1))
console.log(getDigit(12498, 0))