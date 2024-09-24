// let rows= +prompt("enter the rows:")
rows=6;
for(i=1;i<=rows;i++){
    res="";
    num=i
    for(j=1;j<=i;j++){
            res=res+num+" "
            num=num-1
    }
    console.log(res)
}
