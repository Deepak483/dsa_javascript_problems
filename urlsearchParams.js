const queryStr = 'name=Deepak&age=40&occupation=Software+Developer';
console.log(queryStr);

const url = new URLSearchParams(queryStr);
console.log(url.toString());

for (const [key, value] of url) {
  console.log(key, value);
}