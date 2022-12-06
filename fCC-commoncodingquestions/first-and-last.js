// FREECODECAMP 10 COMMON CODING INTERVIEW PROBLEMS https://www.youtube.com/watch?v=Peq4GCPNC5c

// this function takes a sorted array and an integer and finds the index of the first and last occurence
// of that integer. Input looks like this arr = [1,2,3,4,4,4,5,6] Output looks like this [3, 5]

// since the array is sorted, the best way to go about this is to start from the beginning and then
// iterate upwards. We need to store the occurences and then update them as we go. Start by finding the
// first occurence and storing that index or [i] in first and then stop updating first. Second needs to
// go on and get stored up until arr[i] changes. So, use a firstInstanceOfTarget variable to store if
// the first occurence has happened and then stop counting for the start. Then keep counting for the 
// last. Use if and if else controls to check for these. Then iterate through! This should have a time
// and space complexity of O(n) as we're only going through the array once and we're only storing three
// variables. So that may actually mean an O(1)!!! Did this on my own and am very proud!! Problem is that
// it does take me longer than I would like!

function firstAndLast (arr, target) {
  let first = 0
  let last = 0
  let firstInstance = 0
  for(let i = 0; i < arr.length; i++) {
    if(firstInstance === 0 && arr[i] === target){
      first = i
      last = i
      firstInstance = 1
    } else if(arr[i] === target) {
      last = i
    } 
  }
  if(firstInstance === 0) return [-1,-1]
  return [first, last]
}

function binaryFirstAndLast (arr, target) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while(arr[middle] !== target && start <= end){
    if(target < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  const result = arr[middle] === target ? target : -1
  return result
}

function fromTheEndFirstAndLast (arr, target) {
 
  let first
  let last
  let frontCurrent = 0
  let backCurrent = arr.length - 1
  while(arr[frontCurrent] !== target  && frontCurrent <= arr.length){
    if(frontCurrent === arr.length - 1) return [-1,-1]
    frontCurrent++
  }
  first = frontCurrent
  while(arr[backCurrent] !== target){
    backCurrent--
  }
  last = backCurrent
  const result = [first, last]
 
  return result
}

console.log("firstAndLast times")
console.time("firstAndLastTimer")
console.log(firstAndLast([2,4,5,5,5,5,5,7,9,9], 5)) // -> [2,6]
console.timeEnd("firstAndLastTimer")
console.time("firstAndLastTimer")
console.log(firstAndLast([2,4,5,5,5,5,5,7,9,9], 9)) // -> [8,9]
console.timeEnd("firstAndLastTimer")
console.time("firstAndLastTimer")
console.log(firstAndLast([2,4,5,5,5,5,5,7,9,9], 3)) // -> [-1,-1]
console.timeEnd("firstAndLastTimer")

console.log("*****************************************")

console.log("fromTheEndFirstAndLast times")
console.time("fromTheEndFirstAndLastTimer")
console.log(fromTheEndFirstAndLast([2,4,5,5,5,5,5,7,9,9], 5)) // -> [2,6]
console.timeEnd("fromTheEndFirstAndLastTimer")
console.time("fromTheEndFirstAndLastTimer")
console.log(fromTheEndFirstAndLast([2,4,5,5,5,5,5,7,9,9], 9)) // -> [8,9]
console.timeEnd("fromTheEndFirstAndLastTimer")
console.time("fromTheEndFirstAndLastTimer")
console.log(fromTheEndFirstAndLast([2,4,5,5,5,5,5,7,9,9], 3)) // -> [-1,-1]
console.timeEnd("fromTheEndFirstAndLastTimer")

// console.log(binaryFirstAndLast([1,2,3,4,5,6], 1))
// console.log(binaryFirstAndLast([1,2,3,4,5,6], 3))
// console.log(binaryFirstAndLast([1,2,3,4,5,6], 6))
// console.log(binaryFirstAndLast([1,2,3,4,5,6], 7))