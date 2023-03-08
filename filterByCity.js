let arr = [
  { name: "John", city: "delhi" },
  { name: "Peter", city: "bangalore" },
  { name: "Mike", city: "Bangalore" },
  { name: "Rachel", city: "Hyderabad" },
];
function filterByCity(arr) {
  let filterValue = arr.filter((obj) => {
    if (
      obj.city.toLowerCase() === "bangalore" ||
      obj.city.toLowerCase() === "hyderabad"
    ) {
      return obj;
    }
  });
  return filterValue;
}
console.log(filterByCity(arr));
