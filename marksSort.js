/**
 * @param {number} n
 * @return {number[]}
 */
function marksSort(n, students) {}
let n = 3;
let students = [
  { id: 1, name: "Alan", marks: [45, 56, 21, 32, 74] },
  { id: 2, name: "Fabien", marks: [95, 94, 93, 92, 91] },
  { id: 3, name: "Gamora", marks: [85, 65, 54, 65, 76] },
];

console.log(students[0]);

students.sort((a, b) => {
  let marksA = a.marks;
  let marksB = b.marks;
  let sumA = 0,
    sumB = 0;
  for (let i = 0; i < marksA.length; i++) {
    sumA += marksA[i];
    sumB += marksB[i];
  }
  if (sumA < sumB) {
    return 1;
  } else if (sumA > sumB) {
    return -1;
  } else {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      if (a.id < b.id) {
        return -1;
      }
      return 1;
    }
  }
});
let studentId = [];
for (let i = 0; i < students.length; i++){
  studentId.push(students[i].id);
}
console.log(studentId);
console.log(students);
