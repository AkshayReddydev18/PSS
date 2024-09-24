// let rows= +prompt("enter the rows:")
rows = 8;
for (i = 1; i <= rows; i++) {
  res = "";
  alpha = 65;
  for (k = 1; k <= rows - i; k++) {
    res = res + " ";
  }
  for (j = 1; j <= i; j++) {
    res = res + String.fromCharCode(alpha) + " ";
    alpha++;
  }
  console.log(res);
}
