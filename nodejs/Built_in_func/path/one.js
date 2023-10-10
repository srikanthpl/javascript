const fs = require('fs')
let data=fs.readFile('C:/Users/ELCOT/Desktop/New folder/JAVASCRIPT/nodejs/emp.json', 'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})
