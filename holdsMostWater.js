function maxArea(height) {
  // let ans = 0;
  let max = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    let leftHeight = height[l];
    let rightHeight = height[r];
    let len = r - l;
    let minHeight = Math.min(leftHeight, rightHeight);
    let currArea = (len * minHeight);
    max = Math.max(currArea, max);
    if (leftHeight < rightHeight) l++;
    else r--;
  }
  return max;
}
9

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);
//* pseudo code for the approach
// we have left height and right height first
// we will check which one is minimum cause the height of the water will go till there only
// then while(l<r) we will initialize leftHeigh then rightHeight then max , len = r-l , minimum Height between l
//