const names = ["John D", "Paul", "George", "Ringo", "John C"];

for (let index = 0; index <= names.length - 1; index++) {
  const element = names[index];

  // console.log(element)
}

//forEach
const newNamesForEach = names.forEach((element) => {
  // console.log(element)
});

// console.log(newNamesForEach);

//map
const newNamesMap = names.map((ele) => {
  if (ele === "John") {
    return ele + " Harrison";
  } else {
    return ele + " Lennon";
  }
});

// console.log(newNamesMap);
// console.log(names, "-> original");

// console.log(names);

const filteredNames = names.filter((ele) => {
  // console.log(ele)

  if (ele == "John") return ele;
});

// console.log(filteredNames)

const findEle = names.find((ele) => {
  // console.log(ele)

  return ele.includes("John");
});

// console.log(findEle)

// const nameA = "John Cena"

// console.log(nameA.includes("Dena"))

//pass by value -> string, number, boolean
let a = 5;

let b = a;

b = 10;

// console.log(b, "-> b");
// console.log(a, "-> a");

//pass by reference -> array, object

const s1 = {
  name: "Rike",
  address: "Bhaktapur",
  age: 25,
};

// const s2 = s1;

//spread operator

const s2 = { ...s1 };

s2.age = 30;

// console.log(s1)

// console.log(s2 , "-> s2")
// console.log(s1 , "-> s1")

const arr = ["RIke", "Ashmin"];

// const arr2 = arr

const arr2 = [...arr];

arr2[0] = "Hello";

// console.log(arr, "-> arr")
// console.log(arr2, "-> arr2")

//Desctructuring

const obj = {
  name: "Rike",
  address: "Bhaktapur",
  age: 25,
};

// const name = obj.name;
// const address = obj.address;
// const age = obj.age;

const { name, address, age } = obj;

// console.log(name, address,age)

const names2 = ["John D", "Paul", "George", "Ringo", "John C"];

// const ss1 = names2[0];
// const ss2 = names2[1];
// const ss3 = names2[2];

const [ss1,ss2 , ss3] = names2;

console.log(ss1, ss2, ss3)
