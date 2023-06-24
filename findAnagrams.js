function findAnagrams(s, p) {
  const mpattern = new Map();
  const mwindow = new Map();

  const result = [];
  let k = p.length;
  let n = s.length;

  for (let i = 0; i < k; i++) {
    mpattern.set(p[i], (mpattern.get(p[i]) || 0) + 1);
    mwindow.set(s[i], (mwindow.get(s[i]) || 0) + 1);
  }
  
  for (let i = k ; i <= n; i++){
    mwindow.set(s[i], (mwindow.get(s[i]) || 0) + 1);
    let isMatch = isIdentical(mpattern, mwindow);
    if (isMatch) {
      result.push(i-k);
    }
    
    mwindow.set(s[i - k ], mwindow.get(s[i - k ]) - 1);
    if (mwindow.get(s[i - k ]) === 0) {
      mwindow.delete(s[i - k ]);
    }
  }
  return result;
}

function isIdentical(a,b) {
  if (a.size !== b.size) {
    return false;
  }

  for (const [key, value] of a.entries()) {
    if (b.get(key) !== value) {
      return false;
    }
  }
  return true;
}

const _res = findAnagrams("bacdgabcda", "abcd");
console.log(_res);
