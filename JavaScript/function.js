// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello!");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello!");
log(123);

// 2.parameters
// primitive parameters: passed by value
// object parameters: passes by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters
function showMessage(message, from = "unknown") {
  //   if (from === undefined) {
  //     from = "unknown";
  //   }
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic..
}

// first-class function
// functions are treated like any other variables
// can be assigned as a value to variables
// can be passes as an argument to other functions.
// can be returned by another function

// 1. function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous
const printYes = function () {
  console.log("yes");
};

//named
// better debugging in debugger's stack traces
// recursions

const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint");
};

// const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
  // 블럭을 쓰게 되면 리턴을 이용해서 값을 리턴 해줘야 됨.
};

// IIFE : Immediately Invoked Function Expression

// 기본형

// function hello() {
//   console.log("IIFE");
// }

// IIFE
(function hello() {
  console.log("IIFE");
});
