function validAnagram(s, t) {
  // Check if the length of the two strings are the same
  if (s.length !== t.length) {
    return false;
  }

  // Create a map to store the frequency of characters in string s
  let freq = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (freq.has(char)) {
      freq.set(char, freq.get(char) + 1);
    } else {
      freq.set(char, 1);
    }
  }

  // Check the frequency of characters in string t
  for (let i = 0; i < t.length; i++) {
    let char = t.charAt(i);
    if (!freq.has(char)) {
      return false;
    }
    freq.set(char, freq.get(char) - 1);
    if (freq.get(char) < 0) {
      return false;
    }
  }

  return true;
}
