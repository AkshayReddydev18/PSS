// let rows = +prompt("enter the rows:");
rows=5;
a = 0;
b = 1;

for (i = 1; i <= rows; i++) {
  fib = 0;
  res = "";
  while (i != fib) {
    res = res + a + " ";
    fib++;
    c = a + b;
    a = b;
    b = c;
  }
  console.log(res);
}
