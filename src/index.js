const fib = (n) => {
  let arr = [];
  for (let e = 0; e < n; e++) {
    if (e <= 1) arr.push(e);
    else {
      arr.push(arr[e - 2] + arr[e - 1]);
    }
  }
  return arr;
};

const recFib = (n) => {
  if (n <= 1) return n;
  return recFib(n - 1) + recFib(n - 2);
};

console.log(`Iterative fib(8): ${fib(8)}`);
console.log(`Recursive fib(8): ${recFib(8)}`);
