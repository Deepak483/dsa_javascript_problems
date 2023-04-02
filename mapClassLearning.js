//map example practise
let map1 = new Map();
let map2 = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
console.log(map2);
map1.set("key1", "value1");
map1.set(1, "one");
map1.set(true, "value is true");
map1.set("hello", "hello hero");
console.log(map1);

console.log(map1.get("key1"));
console.log(map1.get(true));
console.log(map1.get("hello"));

if (map1.has("hello")) {
  console.log("true");
} else {
  console.log("false");
}
console.log(map1.set(3, "three"));
map1.delete(3);
console.log(map1);
console.log(map1.size);
let keys = map1.keys();
let s = 'hello'
let values = map1.values();
for (let value of values) console.log(value);
for (let i = 0; i < s.length; i++){
  console.log();
}
