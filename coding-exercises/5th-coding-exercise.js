// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 5
// passed on first try, needed to look at and follow the multiple_pointers solution, but it's growing on me
// once I got the idea going, I just had to debug for a few small issues

function averagePair(arr, value) {
  if (arr.length < 1) {
    console.log(`The array was empty. Please pass in a valid array.`)
    return false
  } 
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2
    if (average == value) {
      console.log(`The average of ${value} has been found in the array`)
      return true
    } else if (average < value) {
      left++
    } else if (average > value) {
      right--
    } else {
      console.log(`The average value ${value} was not found in the array.`);
      return false;
    }
  }
  console.log(
    `The average value ${value} was not found in the array.`
  );
  return false; 
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false

