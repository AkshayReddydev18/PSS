obj1={"england":"london","usa":"wasington dc","india":"delhi"};
temp={};
for(i in obj1){
    value=i;
    key=obj1[i];
    temp[key]=value
}
console.log(temp)