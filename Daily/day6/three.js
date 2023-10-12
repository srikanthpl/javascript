var enames = ["Sanjay","Sasi","Sasi","Surya","susil","Sanjay","susil"]
var new_names=[]

for(i=0;i<=enames.length-1;i++){
    if(new_names.indexOf(enames[i])==-1){
        new_names.push(enames[i])
    }
}
console.log(new_names)