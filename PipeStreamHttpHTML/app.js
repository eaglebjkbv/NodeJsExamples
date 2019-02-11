var http=require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    console.log('istenilen sayfa .'+req.url);
    res.writeHead(200,{'Content-Type':'Text/Html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(res);


});

server.listen(3000,'127.0.0.1');
console.log("Server 3000 nolu portta çalışıyor...");