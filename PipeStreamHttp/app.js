var http=require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Text/Plain'});
    var readStream=fs.createReadStream(__dirname+'/oku.txt','utf8');
    readStream.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log("Server çalışıyor....");