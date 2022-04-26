const http=require('http')

const server =http.createServer((req,res)=>{
  console.log("heloo");
  res.end('home page')
})

server.listen(5000,()=> console.log("lisa