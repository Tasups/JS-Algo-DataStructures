// MERGE SORT ALGO

// I ATTEMPTED TO USE IF STATEMENTS TO GO THROUGH THE REST OF THE ARRAYS AND CONCAT WHEN THERE WASN'T ANYTHING MORE FOR THE ITERATOR TO GO THROUGH, I THINK THE PROBLEM WITH THAT WAS THAT THERE WASN'T A CLEAR CUT WAY FOR THE ITERATOR TO MOVE ONE UP BECAUSE I WAS IMPLEMENTING IT AND NOT HAVING A BASE CASE OR LIMITOR ON THE ITERATION.

let longArray = [10,24,76,73,-1,10,127,108975,1,15,7,3,587996,12,45,8,11]

let shortArray = [1,4,15,22,3,9]

function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result;
}

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  console.log(arr.slice(mid))
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  console.log(right)
  console.log("*****")
  return merge(left, right)
}

mergeSort(shortArray)
