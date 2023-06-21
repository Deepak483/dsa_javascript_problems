function backspaceStringCompare(s, t) {
  const s1 = [];
  const s2 = [];
  let str1 = "";
  let str2 = "";

  //* iterating over the first string 
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && s1.length > 0) s1.pop();
    else if (s[i] !== "#") s1.push(s[i]);
  }
  //* iterating over the second string
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#" && s2.length > 0) s2.pop();
    else if (t[i] !== "#") s2.push(t[i]);
  }
  //* poping the element from the string and storing it in new string variable
  while (s1.length > 0) {
    str1 += s1.pop();
  }
  //* same for second string t
  while (s2.length > 0) {
    str2 += s2.pop();
  }
  //* finally returing the true if they match or false
  return s1 === s2;
}
let s = "as#sddff#";
let t = "aa#sddf";
let res = backspaceStringCompare(s, t);
console.log(res);
