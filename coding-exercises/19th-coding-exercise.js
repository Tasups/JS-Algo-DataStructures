// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 19
// I tried making this work, to no avail. I feel like I got close, however, when I look at Colt's
//solution, I find that he capitalizes the entire word, not just the first letter!!! Bummer!

//Come to find out that the solutions were not in the right order on Udemy! A whoopsie! will now attempt to correctly do the exercise later as I've got a sour taste in my mouth after working on this one for about 30 minutes!

// MY ATTEMPT
function capitalizeFirst(arr){
  let newArr = []
  console.log(arr.length)
  if(arr.length === 0) return
  function helper(){
    if(arr.length > 0){
      newArr.push(arr[0].charAt(0).toLocaleUpperCase() + arr[0].slice(1))
      console.log(newArr)
      helper(arr.slice(1))
    }
  }
}

//COLT'S SOLUTION

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


console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/