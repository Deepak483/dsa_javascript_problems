//try-catch
function errorHandler(x) {
  try {
    return getX(x);
  }
  catch (error) {
    return error;
  }
}
function getX(x) {
    if(x == 5) {
        return new Error("Error Occured");
    }
    return x;
}
//exceptions-throw
function isAlphabet(X) {
  if (checkAlphabet(X)) {
   return 'Yes';
 } else {
   throw 'Not Alphabet';
 }

};

function checkAlphabet(X) {

let n = X.charCodeAt(0);

let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);



// You can Google about what is ASCII code to know more about

// why are we using numbers like 65, 91, 97 & 123



if (strStartsWithALetter) {

// Yes, it starts with an alphabet

return true;

} else {

// No, it doesnt start with an alphabet

return false;

} 

}
//objects
function personDetail(a, b) {
  let nameObject = {
    firstName: a,
    lastName: b,
    fullName: `${a} ${b}`,
  };
  return nameObject;
}
//Date-functions
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
//Arrays and arrow functions
let modify = (array) => {
  let newArray = [];
   array.forEach((element, index) => {
     if (element === 0) {
       newArray.push(element);
     }
     else if (isPrime(element)) {
       newArray.push(element + 1);
     } else {
       newArray.push(element * 2);
     }
   });
   return newArray;
 }
 
 function isPrime(n) {
 
 if(n == 0 || n == 1) {
 
     return false;
 
 }
 
 for(let i = 2 ; i*i <= n ; i++) {
 
     if(n%i == 0) {
 
         return false;
 
     }
 
 }
 
 return true;}
 
//foreach
function convertArray(arr) {
  let newArr = [];
const result = arr.forEach((ele,index) => {
newArr.push(ele*[index+1]) 
});
return newArr;
}
//high order map
function findLength(arr) {
  arr = arr.map((str) => {
    if (str ===undefined || str === null) {
      return 0;
    } else {
      const value = str.length;
      return value;
    }
  });
  return arr;
}
//high order filter
function filterByCity(arr) {
  let filterValue = arr.filter((obj) => {
  if (obj.city.toLowerCase() === "bangalore" || obj.city.toLowerCase() ==='hyderabad') {
    return obj;
  }
});
return filterValue;
}


