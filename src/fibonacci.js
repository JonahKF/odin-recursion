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
  if (n <= 2) return [0, 1].slice(0, n);
  const e = recFib(n - 1);
  e.push(e[e.length - 1] + e[e.length - 2]);
  return e;
};

console.log(`Iterative fib(8): ${fib(8)}`);
console.log(`Recursive fib(8): ${recFib(8)}`);
