const numbers = [223, 444, 222, 333, 555, 66];

//array length  -> 6

// let index = 0;

// numbers[index] //number[0]

// index = index + 1
// numbers[index] //number[1]

// index = index + 1
// numbers[index] //number[2]

// index = index + 1
// numbers[index] //number[3]

// index = index + 1
// numbers[index] //number[4]

// index = index + 1
// numbers[index] //number[5] numbers[numbers.length - 1]

// console.log(numbers, numbers[1]);
// console.log(numbers.length);

console.log(numbers);

let sum = 0;

const evenArray = [];

for (let index = 0; index <= numbers.length - 1; index = index + 1) {
  console.log(index, "value -> ", numbers[index]);

  if (numbers[index] % 2 === 0) {
    evenArray.push(numbers[index]);
  }

  sum = sum + numbers[index];
}

console.log(evenArray);

//array methods

const n2s = [2, 3, 4, 5, 6, 7, 8];

console.log(n2s);

// n2s.push(12)
// n2s.unshift(1)

// n2s.pop()
// n2s.shift()

// const values = n2s.join("--")

// console.log(values);

// const gender = "Others";

// if (gender === "Male") {
//   console.log("He is a male");
// } else if (gender === "Female") {
//   console.log("She is a female");
// } else{
//   console.log("He identifies as others")
// }
