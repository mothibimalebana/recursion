/**
 * Generates the value of fibonacci at index n
 * @param {*} n
 * @returns:
 */
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

/**
 *
 * @param {*} n
 * @returns
 */
const fibs = (n) => {
  let fibsArray = [];
  for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
  }
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

//execute functions here
fibs(3);
