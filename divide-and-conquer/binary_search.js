
// function linearSearch(arr, num) {
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == num) {
//       console.log(`The number ${arr[i]} was found at index ${i}`)
//       return arr[i]
//     }
//   }
//   console.log("The number was not found in the array");
//   return null;
// }

// linearSearch(arrayOne, 12)

// my attempt
// function binarySearch(arr, num) {
//   let arrToSearch = arr
//   let steps = 0
//   let indexResult = 0
//   for (let i = Math.floor(arrToSearch.length / 2); i < arrToSearch.length; i++)
//     if (arrToSearch[i] > num) {
//       arrToSearch = arrToSearch.splice(i, arrToSearch.length);
//       steps++;
//       indexResult = [i];
//     } else if (arrToSearch[i] < num) {
//       arrToSearch = arrToSearch.splice(0, i);
//       steps++;
//       indexResult = [i];
//     } else if (arrToSearch[i] == num) {
//       console.log(`${num} was found in ${steps} steps!`);
//       return indexResult;
//     } else {
//       console.log(`${num} was not found in the array!`)
//       return null
//     }
// }

const arrayOne = [1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29, 30];

function binarySearch(array, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    if (array[middle] < val) {
      min = middle + 1
    }
    else if (array[middle] > val) {
      max = middle - 1
    }
    else {
      console.log(`${val} was found at the array index of ${middle}!`);
      return middle;
    } 
  }
  console.log(`${val} was not found in the array!`);
  return -1
}

binarySearch(arrayOne, 29)
binarySearch(arrayOne, 1);
binarySearch(arrayOne, 500);
binarySearch(arrayOne, 6);
binarySearch(arrayOne, 15);