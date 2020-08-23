// json
// javascript object notation

// 1.object to json
// Stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol('id') 심볼 포함 안 함
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}. value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. json to object
// parse
