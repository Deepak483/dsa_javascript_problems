// function appendToParent(parent, childTagType, text) {
  //   <ol id="elem">
  //      <li>Hello</li>
  //      <li>World</li>
  //  </ol>
//   const parentId = document.getElementById(parent);
//   const li = document.createElement(childTagType);
//   li.textContent = text;
//   parentId.append(li);
// }
// appendToParent('elem', 'li', 'by Deepak');
// let arr = [18, 58, 25, 12];
// function generateSortedList(arr) {
//   const sortedArr = (a, b) => {
//     return a - b;
//   };
//   return sortedArr;
// }
// const sortedValue = generateSortedList(arr);

// const pushElement = sortedArr.forEach(element => {
//     const parentId = document.getElementById('sorted-list');
//     const li = document.createElement('li');
//     li.textContent = element;
//     parentId.appendChild(li);
//   });
//   return pushElement;
// for (let i = 0; i < sortedValue.length; i++) {
//   const element = sortedValue[i];
//   appendToParent("sorted-list", "li", element);
// }
//   for (let i = 0; i < sortedValue.length; i++){
//     const currentElement = sortedValue[i];
//     appendToParent("sorted-list", "li", currentElement);
//   }

// displaySorted(sortedValue);
// const vlaue = displaySorted(sortedValue);
// console.log(vlaue);

const getTodos = (callback) => {
  
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status===200) {
      // console.log(request,request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined,data);
    } else if (request.readyState === 4) {
      // console.log(`Erorr! there is some erorr fetching response`);
      callback('could not fetch data',undefined);
    }
  });
  // https://jsonplaceholder.typicode.com/todos/
  request.open('GET', 'todo.json');
  request.send();
}
console.log(1);
console.log(2);
getTodos((err,data) => {
  console.log('callback fired');
  if (err)
    console.log(err);
  else
    console.log(data);
});
console.log(3);
console.log(4);