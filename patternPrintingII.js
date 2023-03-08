function patternPrintingII(n) {
  for (let i = 1; i <= n; i++) {
    let row = "* ".repeat(i);
    console.log(row);
  }
  for (let i = n - 1; i > 0; i--) {
    let row = "* ".repeat(i);
    console.log(row);
  }
}
patternPrintingII(5);
