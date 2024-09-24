// let rows= +prompt("enter the rows:")
rows = 6;
alpha = 65;
pos = 1;
for (i = 1; i <= rows; i++) {
  res = "";
  for (j = 1; j <= i; j++) {
    if (pos % 2 == 0) {
      res = res + String.fromCharCode(alpha).toLowerCase() + " ";
    } else {
      res = res + String.fromCharCode(alpha) + " ";
    }
    alpha++;
    pos++;
  }
  console.log(res);
}
