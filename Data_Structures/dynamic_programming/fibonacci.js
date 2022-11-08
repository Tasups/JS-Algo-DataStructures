

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

function tabFib(n){
  if(n <= 2) return 1
  let fibNums = [0, 1, 1]
  for(let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}

console.time("recursive speed")
console.log(fib(10))
console.timeEnd("recursive speed")

console.time("memoized speed")
console.log(optFib(42))
console.timeEnd("memoized speed")

console.time("tabulated speed")
console.log(tabFib(1000))
console.timeEnd("tabulated speed")
