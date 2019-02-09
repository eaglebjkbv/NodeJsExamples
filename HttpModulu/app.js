var http=require('http');



var server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','Text/html');
    res.end('<h1>Merhaba Dünya</h1>');

});

server.listen(3000,'localhost',()=>{
    console.log('Server Çalışıyor....')
});

