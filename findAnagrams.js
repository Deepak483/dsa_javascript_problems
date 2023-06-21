function findAnagrams(s, p) {
  const mpattern = new Map();
  const wpattern = new Map();

  const result = [];
  let k = p.length;
  let n = s.length;
  for (let i = 0; i < k; i++) {
    if (mpattern.has(p[i])) {
      mpattern.set(p[i], mpattern.get(p[i]) + 1);
    } else {
      mpattern.set(p[i], 1);
    }
  }
  for (let i = 0; i < k-1; i++){
    if (wpattern.has(s[i])) {
      wpattern.set(s[i], wpattern.get(s[i]) + 1);
    } else {
      wpattern.set(s[i], 1);
    }
  }
  for (let i = k - 1; i < n; i++){
    if (wpattern.has(s[i])) {
      wpattern.set(s[i], wpattern.get(s[i]) + 1);
    } else {
      wpattern.set(s[i], 1);
    }
    let isMatch = isIdentical(mpattern, wpattern);
    if (isMatch) {
      result.push(i-k+1);
    }
    wpattern.set(s[i - k + 1], wpattern.get(s[i - k + 1]) - 1);
  }
}
