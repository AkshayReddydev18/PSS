// rows = +prompt("enter the rows: ");
rows=5;
alpha = 65;
for (i = 1; i <= rows; i++) {
  res = "";
  for (j = 1; j <= i; j++) {
    res = String.fromCharCode(alpha) + " " + res;
    alpha++;
  }
  for (k = 1; k <= rows - i; k++) {
    res = "  " + res;
  }
  console.log(res);
}
