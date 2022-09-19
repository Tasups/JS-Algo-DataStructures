
const arr = ['car','taco','banana']

// console.log(arr.slice(0,-1))

// let newArr = []

// newArr.push(arr[0].charAt(0).toLocaleUpperCase() + arr[0].slice(1))

function capitalizeWords (array) {
  if (array.length === 1) {
    console.log([array[0].toUpperCase()])
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  console.log(res)
  return res;
 
}

capitalizeWords(arr)