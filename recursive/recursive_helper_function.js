// HELPER METHOD RECURSION
// this is just a diagram about how to create a recursive function 

function outer(input){

  var outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)  
  }

  helper(input)

  return outerScopedVariable

}