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
