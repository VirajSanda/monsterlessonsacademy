const str = `{
  "name": "Jack",
  "age": 30,
  "isProgrammer": true,
  "colors": ["black", "white"]
}`;

const obj = JSON.parse(str);
console.log(JSON.stringify(obj));
