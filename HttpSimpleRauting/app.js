var http=require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'content-Type':'Text/html'});
    if(req.url=== '/home' || req.url==='/'){
        var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
        myReadStream.pipe(res);
    }else if(req.url=== '/about'){
        var myReadStream=fs.createReadStream(__dirname+'/about.html','utf8');
        myReadStream.pipe(res);
    }

    
});


server.listen(3000,'127.0.0.1');
console.log('Server 3000 nolu portta çalışıyor....');






