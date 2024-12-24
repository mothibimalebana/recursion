//theodinproject.com activities:
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

const fibsReccursion = (n) => {
  //index of iteration
  const i = 0;
  //fibonacci array
  let fibsArray = [];
  if (n == 0) {
    return fibsArray;
  } else {
    fibsArray.push(fibonacci(n - 1));
    return fibsArray;
  }
};
console.log(fibsReccursion(10));

//javascript.info activities:
//task 1: sum all the numbers till the given one
const sumTo = (number) => {
  if (number == 1) {
    console.log('one is returned');
  }
};
