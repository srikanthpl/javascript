const fs =require('fs')
const path= require('path')
let fileName = path.join(__dirname,"emp","pe","emp.json")
fs.readFile(fileName,'utf-8',(data)=>{
    console.log(data)
})
