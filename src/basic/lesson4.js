const divide = (dividend, divider) => {
  return dividend / divider;
};

const integerDivide = (dividend, divider) => {
  return Math.floor(dividend / divider);
};

const isDivisible = (dividend, divider) => {
  const logic = dividend % divider;

  return logic === 0 ? true : false;
};

const remainder = (dividend, divider) => {
  return dividend % divider;
};

const result = divide(10, 2);
console.log(result);

const result1 = integerDivide(10, 3);
console.log(result1);

const result2 = isDivisible(10, 2);
const result3 = isDivisible(10, 3);
console.log(result2);
console.log(result3);

const result4 = remainder(10, 3);
console.log(result4);
