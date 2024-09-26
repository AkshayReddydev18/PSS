// num=prompt("enter the numbers with spacces: ").split(" ")
num=("2,5,17,3,5,5,13,3,3");
num=num.split(",");
emp={};
for(i of num){
    if(emp[i]){
        emp[i]=emp[i]+1;
    }
    else{
        emp[i]=1;
    }
}
console.log(emp);
for(i in emp){
    if(emp[i]==1){
        console.log('uni:'+i)
    }
    else{
        console.log('dup:'+i)
    }
}