const subtract = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

const absoluteDifference = (firstNumber, secondNumber) => {
  return Math.abs(firstNumber - secondNumber);
};

const subtractMany = (...params) => {
  let result = params[0];

  for (number of params.slice(1)) {
    result = result - number;
  }

  return result;
};

const result = subtract(5, 3);
console.log(result);

const result1 = absoluteDifference(3, 5);
console.log(result1);

const result2 = subtractMany(20, 5, 3);
console.log(result2);
