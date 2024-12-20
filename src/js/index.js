//Number of sequence at index n
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log(fibonacci(10));
//Enter a Fibonacci index(n)
const fibs = (n) => {
  let fibsArray = [];
  for (let i = 0; i <= n; i++) {
    fibsArray.push(fibonacci(i));
  }
  return fibsArray;
};

console.log(fibs(10));
