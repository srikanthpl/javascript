const fs = require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 
    let employees=JSON.parse(data)
    for(emp of employees){
        console.log(emp.name)
    }
})