const add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const addMany = (...params) => {
  const total = params.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total;
};

const increment = (number) => {
  return number + 1;
};

const result = add(2, 3);
console.log(result);

const result2 = addMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result2);

const result3 = increment(9);
console.log(result3);
