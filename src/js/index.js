/**
 * Generates the value of fibonacci at index n
 * @param {number} n - index
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
 * @param {number} n
 * @returns {Array} - Returns an array containing n elements from fibonacci sequence
 */
const fibs = (n) => {
  let fibsArray = []; //array containing fibonacci sequence
  for (let i = 0; i < n; i++) {
    fibsArray.push(fibonacci(i));
  }
  return fibsArray;
};

/**
 * Responds with an array with n elements of fibonacci sequence
 * @param {number} n - index of fibonacci sequence
 * @returns {Array} - Returns an array containing n elemenets from fibonacci sequence
 */
let fibsRecArray = []; //array containing fibonacci sequence
let i = 0;

const fibsRec = (n) => {
  //fibonacci array
  if (n == 0) {
    return;
  } else {
    fibsRecArray.push(fibonacci(i));
    i++;
    fibsRec(n - 1);
  }
  return fibsRecArray;
};

//execute functions here
console.log(fibs(3));
console.log(fibsRec(3));
