function removeListedValues(arr, without) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j<without.length; j++){
      if (arr[j] != arr[i]) {
        newArray.push(arr[i]);
      }
    }
  }
  // console.log(newArray);
  return newArray;
}

let arr = [1, 2, 2, 3, 1, 2];
let without = [2, 3];
//sample output:
//[1,1]
const value = removeListedValues(arr, without);
console.log(value);
