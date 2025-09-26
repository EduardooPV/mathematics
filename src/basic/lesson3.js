const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const result = multiply(4, 6);

console.log(result);

const multiplyMany = (...params) => {
  let result = 1;

  for (i = 0; i < params.length; i++) {
    result = result * params[i];
  }

  return result;
};

const result1 = multiplyMany(2, 3, 4);

console.log(result1);

const double = (number) => {
  return multiply(number, 2);
};

const result2 = double(7);

console.log(result2);
