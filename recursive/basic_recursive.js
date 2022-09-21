// a basic recursive function that takes in a new input every time that it runs
// it calls itself and then has a base case of if the num is equal to or lesser than the num

// THIS RECURSIVE FUNCTION ESSENTIALLY ACTS LIKE A FOR LOOP

function countDown(num){
  if(num <= 0) {
    console.log("All done")
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(5)