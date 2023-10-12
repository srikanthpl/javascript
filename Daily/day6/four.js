var ids = [10,10,20,20,40,20,40,50,]
new_ids=[]

for (let i=0;i<=ids.length-1;i++){
    if(new_ids.indexOf(ids[i])==-1){
        new_ids.push(ids[i])
    }

}
console.log(new_ids)