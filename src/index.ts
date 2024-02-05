console.log(`Hello TypeScript`);
let age = 33;
age = 40;
if (age < 50) {
  age += 10;
}
//age = `dhfhf`;
let sales = 123_456_7890;
let course = `TypeScript`;
let is_publish = true;
let adder = sales + 1000000000;
console.log(adder);

let array = [1, 2, 3, 4];

let numString = array.map((n) => n.toString());
console.log(numString);

const enum Size {
  Small = 2,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
