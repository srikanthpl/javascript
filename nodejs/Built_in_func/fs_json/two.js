const fs = require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
    console.log(typeof data)
})