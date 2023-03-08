let date = "05/11/2002";
// let dateArray = date.split('/');
console.log(dateArray);

// let dDate = dateArray[0];
// console.log(dDate);
// let dMonth = dateArray[1];
// let dYear = dateArray[2];

// let newDateObject = new Date(dYear, dMonth - 1, dDate);
console.log(newDateObject);
let todayDate = new Date();

// let differenceInMilliseconds = todayDate.getTime() - newDateObject.getTime();
console.log(differenceInMilliseconds);
// let numOfDays = parseInt(differenceInMilliseconds / (60 * 60 * 24 * 1000));
console.log(numOfDays);

function getNumberOfDays(date) {
  let dateArray = date.split("/");
  let dDate = dateArray[0];
  console.log(dDate);
  let dMonth = dateArray[1];
  let dYear = dateArray[2];
  let newDateObject = new Date(dYear, dMonth - 1, dDate);
  let todayDate = new Date();
  let differenceInMilliseconds = todayDate.getTime() - newDateObject.getTime();
  let numOfDays = parseInt(differenceInMilliseconds / (60 * 60 * 24 * 1000));
  return numOfDays;
}
