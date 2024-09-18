// keyword variableName = value
// const number = 5

// keyword functionName () {}

//function declaration
function addTwoNumbers(number1, number2 = 0) {
  const sum = number1 + number2;
  return sum;
}

const s1 = addTwoNumbers(2, 2);
const s2 = addTwoNumbers(1, 1);
const s3 = addTwoNumbers(10, 20);
console.log(s1 + s2 + s3);

//es6
//function () {}; //anonymous function
//function expression
const sumUsingES6 = function (n1, n2) {
  return n1 + n2;
};
const s4 = sumUsingES6(1, 1);
console.log(s4)
//arrow function

const arrowFunction = () => {}
