// Wap the inverted right angled triangles with alphabets
// n=+prompt("enter the rows:")
n = 7;
for (i = n; i >= 1; i--) {
  left = "";
  right = "";
  spaces = "";
  for (j = 0; j < i; j++) {
    left += String.fromCharCode(65 + j);
  }
  for (j = i - 1; j >= 0; j--) {
    if (i == n && j == i - 1) continue;
    right = right + String.fromCharCode(65 + j);
  }
  let sp = (n - i) * 2 - 1;
  for (k = 1; k <= sp; k++) {
    spaces+=" ";
  }console.log(left+spaces+right)
}
