

function fib(n){
  if (n <= 2) return 1
  return fib(n-1) + fib(n-2)
}



function optFib(n, memo=[]){
  // if we have already solved for n, return that solution from the memo
  if(memo[n] !== undefined) return memo[n]
  // base case to start the storing of state of 1 and 2
  if(n <= 2) return 1
  // store the result of further calls in a res variable
  var res = fib(n-1, memo) + fib(n-2, memo)
  // set that new result in memo
  memo[n] = res
  // return the result
  return res
}

console.time("fibonnacci sequence run")
console.log(optFib(42))
console.timeEnd("fibonnacci sequence run")
