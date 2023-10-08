//For in (object)

const person={
    Cname:"sanjay",
    Csal:45000,
    age:20
}

for(let key in person){
    console.log(key  + ":" + person[key])
}