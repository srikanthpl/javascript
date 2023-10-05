// const fs=require("fs")

// let data=fs.readFile("one.txt","utf-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })


const fs=require("fs")

let data=fs.readFile("one.txt","utf-8",(err,data)=>{
    if (err) throw err
    fs.writeFile("two.txt",data,(err)=>{
        if (err) throw err
        console.log("successfully done")
    })
})