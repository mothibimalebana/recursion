/**
 * Generates the value of fibonacci at index n
 * @param {*} n - index
 * @returns {number} - Number at index n
 */
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

/**
 * Generates an array with n elements, each from the fibonacci sequence.
 * @param {*} n
 * @returns {Array} - Returns an array containing n elements from fibonacci sequence
 */
const fibs = (n) => {
  let fibsArray = [];
  for (let i = 0; i <= n; i++) {
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
