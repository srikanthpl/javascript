const http=require('http')

http.createServer((req,res)=>{
    res.write("hello")
    res.end()
}).listen(9808)
console.log("success")