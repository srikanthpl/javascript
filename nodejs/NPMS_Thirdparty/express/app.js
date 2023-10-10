import express from 'express'

let app = express()

app.get("/demo",(req,resp)=>{
    resp.send("<h1>demo Doc</h1>")
})
app.get("/index",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.listen(9000,(err)=>{
    if (err) throw err
    console.log(`server running on ${9000}`)
})
