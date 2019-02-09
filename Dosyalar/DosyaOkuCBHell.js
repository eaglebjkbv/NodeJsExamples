const path=require('path');
const fs=require('fs');

var dosya=path.join(__dirname,'./test','deneme.txt');

fs.exists(dosya,exists=>{

    if(exists)
        fs.stat(dosya,(err,status)=>{
            if(err) 
                throw err;
            if(status.isFile()){
                fs.readFile(dosya,'utf8',(err,data)=>{
                    if(err) throw err;
                    console.log(data);
                });
            }    
        });

});
