const http=require("node:http");

 const server=http.createServer(function(req,res){
    if(req.url==="/getsecretdata")
        res.end("ankit singh");
res.end("ankit");
}); 

server.listen(7777);  
