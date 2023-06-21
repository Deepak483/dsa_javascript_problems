function bookReading(n, h, a) {
  let l = 1, r = Math.max(...a);
  let result = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (canReadAllbooks(a, h, mid)) {
      result = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
}
function canReadAllbooks(piles,h,k) {
  let hours = 0;
  for (let i = 0; i < piles.length; i++){
    hours += Math.ceil(piles[i] / k);

    if (hours > h)
      return false;
  }
  return true;
}
let h = [4, 8, 3, 6, 7, 11];
let n = h.length;


