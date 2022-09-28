// Colt Steele Udemy JavaScript DSA Course, Coding Exercise 19
// I tried making this work, to no avail. I feel like I got close, however, when I look at Colt's
//solution, I find that he capitalizes the entire word, not just the first letter!!! Bummer!

//Come to find out that the solutions were not in the right order on Udemy! A whoopsie! will now attempt to correctly do the exercise later as I've got a sour taste in my mouth after working on this one for about 30 minutes!

// MY ATTEMPT
function capitalizeFirst(arr){
  let arrRep = arr
  let newArr = []
  if(arrRep.length === 0) return
  function helper(){
    if(arrRep.length > 0){
      // take the first element in the array and uppercase the first letter then add the rest of the 
      // first element to the capitalized first letter and push it onto newArr
      console.log(arrRep.length)
      newArr.push(arrRep[0].charAt(0).toUpperCase() + arrRep[0].slice(1))
      console.log(arrRep)
      console.log(newArr)
      helper(arr.slice(1))
    }
  }
  console.log(newArr)
   return newArr
}

//COLT'S SOLUTION


capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/