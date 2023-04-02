// import { sayHi } from "./export.js";
// alert("HI");
// sayHi("john");

const params = new URLSearchParams('q=search+string&version=1&person=Eric');
// console.log(params);
console.log(params.get('q'));
// console.log(params.get('version'));
// console.log(params.get('person'));

// console.log(Array.from(params
// ));
// for (let p of params) {
//   console.log(p);
// }

// params.set('version', '2');
// params.append('person', 'Deepak');
// params.set('person', 'ramu');
// params.delete('person');
// console.log(params);

// const url = new URL('https://example.com?username=Deepak&foo=1&bar=2');
// // console.log(url.searchParams);
// const params = new URLSearchParams(url.search);
// console.log(params);

const number = '0-2';
const splitedValue = number.split('-');
console.log(splitedValue);
const low = parseInt(splitedValue[0]);
console.log(low);
const high = parseInt(splitedValue[1],10);
console.log(high);