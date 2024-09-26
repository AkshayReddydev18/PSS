obj=[{"name":"sushanth","marks":{"m1":60,"m2":70,"m3":90,}},
    {"name":"sushanth","marks":{"m1":50,"m2":70,"m3":60,}}];
    for(i of obj){
        sum=0;
        for(j in i.marks){
            sum=sum+i.marks[j]
        }
        i.Totalmarks=sum;
    }
    console.log(obj)