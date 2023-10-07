//  const fs = require("fs")
//  fs.readFile("emp.json","utf-8",(err,data)=>{
//      if (err) throw err
//      fs.writeFile("four.json",JSON.parse(data),(err)=>{
//      if (err) throw err 
//      console.log("successs")
//      })
//      })
    //  for(emp of employees){
    //      console.log(emp.email)
    //  }
 
// // const fs = require('fs')

// // fs.readFile('emp.json','utf-8',(err,data)=>{
// //     if(err) throw err 
// //     let employees=JSON.parse(data)
// //     for(emp of employees){
// //         console.log(emp.ename)
// //     }
// // })

// const fs = require('fs')
// fs.readFile("emp.json","utf-8",(err,data)=>{
//     if (err) throw err
//     fs.writeFile('user.json',JSON.stringify(data),(err)=>{
//     if(err) throw err 
//     console.log("Success")
// })
// })

// const fs = require('fs')

// fs.readFile('emp.json','utf-8',(err,data)=>{
//     let employees = JSON.parse(data)
//     console.log(employees[ename=10])
  // console.log(typeof employees)
    // employees = JSON.stringify(data)
    // console.log(employees)
    // console.log(typeof employees)

const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname,"views","two.txt"),(err,data)=>{
    if (err) throw err
    fs.writeFile(path.join(__dirname,"views","five.txt"),data,(err)=>{
        if (err) throw err
        console.log("success")
    })
})
// const path = require('path')

// console.log(path.join(__dirname))
