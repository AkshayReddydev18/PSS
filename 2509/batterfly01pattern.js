// rows=+prompt("enter the rows:");
rows=7;
for(i=1;i<=2*rows-1;i++){
    stars=(i<=rows)?i:i-(i-rows)*2;
    sp=(i<rows)?(rows-i)*2-1:2*(i-rows)-1;
    sp=(sp<0)?0:sp
    res="";
    for(j=1;j<=stars;j++){
        if(j%2==0)
        res+="0 ";
        else
        res+="1 "
    }
    if(i==rows){
        console.log(res+res.slice(2,res.length))
    }else{
    console.log(res+"  ".repeat(sp)+res);
    }
}