let n = 6,
  b = 3;
let arr = [1, 2, 1, 3, 4, 3];

function countDistinctElements(n, b, arr) {
  const result = [];
  const mp = new Map();
  if (n < b) return result;
  for (let i = 0; i < b - 1; i++) {
    if (!mp.has(arr[i])) {
      mp.set(arr[i], 1);
    } else {
      mp.set(arr[i], mp.get(arr[i] + 1));
    }
  }

  for (let i = b - 1; i < n; i++) {
    if (!mp.has(arr[i])) {
      mp.set(arr[i], 1);
    } else {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    }
    result.push(mp.size);

    //drop the last element
    mp.set(arr[i - b + 1], mp.get(arr[i - b + 1] - 1));
    if (mp.get(arr[i - b + 1])===0) {
      mp.delete(arr[i - b + 1]);
    }
  }
  return result;
}

const ans = countDistinctElements(n, b, arr);
console.log(ans);
