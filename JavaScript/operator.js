// 1. string concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:

''''
1+2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

// numeric operaotr

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter ${counter}`);
const postDecrement = counter--;
console.log(`ppstDecrement: ${postDecrement}, counter ${counter}`);

// 4, assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// logical operator: || (or), && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// function을 제일 뒤에 배치

// && (or), finds the first truthy value
console.log(`and: ${value1 && value2 && check()}`);
// function을 제일 뒤에 배치

// often used to compress long if-statement
//nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("☺️");
  }
  return true;
}

console.log(!value1);

// 7.Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//  == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //f
console.log(ellie1 === ellie2); //f
console.log(ellie1 === ellie3); //t

// equality = puzzler
console.log(0 == false); //t
console.log(0 === false); //f 0 은 boolean 타입 아님
console.log("" == false); //f
console.log("" === false); //f ''은 boolean 타입이 아님
console.log(null == undefined); //t
console.log(null === undefined); //f 서로 다른 타입

//8. conditional operators
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("welcome, ellie!");
} else if (name === "coder") {
  console.log("you are an amazing");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  //   case "Firefox":
  //     console.log("love you!");
  //     break;
  default:
    console.log("same all!");
    break;
}

// 11.Loops
// while loop, while the condition is truthy,
// body code is executed

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variables declaration
  console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
  // i 가 0 일때 j를 0~9까지 돌리고~
  for (let j = 0; j < 10; j++) {
    //cpu에 안 좋아서 쓰는 걸 지양
    console.log(`i: ${i} j: ${j}`);
  }
}

//break 는 루프를 완전히 끝냄.
//continue 는 지금 껏만 스킵하고 다음 스테븡로 넘어감

// for (let i = 0; i < 11; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`q1.${i}`);
// }

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1.${i}`);
  }
}

for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
