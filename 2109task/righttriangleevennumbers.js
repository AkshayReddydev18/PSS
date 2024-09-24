// rows=+prompt("enter the rows:");
rows=5;
for(i=1;i<=rows;i++){
    res="";
    num=i*2;
    dec=rows
    for(j=1;j<=i;j++){
        res=res+num+" ";
        dec=dec-2;
        num=num+rows+dec
    }
    console.log(res)
}
