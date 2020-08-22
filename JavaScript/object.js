// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

// 1. literals and properties
const name = "ellie";
const age = 4;
print(name, age);
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasjob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. computed properties
//key should be always string
console.log(ellie.name); // 코딩하는 그 순간 해당하는 값을 받아오고 싶을 때 사용
//평상시에 .을 사용
console.log(ellie["age"]); // 우리가 정확히 어떤 키가 필요한지 모를 때 사용
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "age");

// 3. property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "stevie", age: 5 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);
//오브젝트 생성 함수는 앞에 대문자

//4. constructor function
function Person(name, age) {
  //   return {
  //     name,
  //     age,
  //   };

  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

//5. in operator: property existence check (key in obj)
console.log("name" in ellie); //true
console.log("random" in ellie); //false
console.log(ellie.random); //undefined

//6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

for (value of array) {
  console.log(value);
}

// 7. fun cloning
// object.assign(dest, [obj1, obj2, obj3..])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user); //이름 'coder'로 바뀜

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
//뒤에 나오는 애가 동일한 프로퍼티를 덮어 씀
