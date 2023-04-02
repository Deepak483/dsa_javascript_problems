let obj = {
  'name': 'Anil',
  true:'this is body of object'
}
console.log(obj);
let data = new Map();
data.set('name', 'Anil');
data.set(true, 'this is body of map object');
console.log(data);
let s = 'hello';
let freq = new Map();
for (let i = 0; i < s.length; i++){
  let char = s.charAt(i);
  console.log(char);
  if (freq.has(char)) {
    freq.set(char)
  }
}