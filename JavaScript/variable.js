"use strict";

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}

console.log(name);
console.log(globalName);

// var hoisting (move declaration from bottom to top)
// has no block scope

{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// favour immutable data type for a few reason
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, boc container
// function, first-class function
// first class ? = function can be assigned in variables,
// can bed used as parameter, and also returned

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);

// number - special numeric value: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (don't use it yet)
const bigInt = 1237832727428947293877487n;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;
console.log(`value : ${canRead}, type: ${typeof canRead}`);

// null
let nothing = null;

// undefined
let x;

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
console.log(ellie);
ellie.age = 21;
console.log(ellie);

// 5. dynamic typing
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
