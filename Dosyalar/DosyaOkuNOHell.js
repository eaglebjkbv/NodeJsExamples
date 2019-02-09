const path=require('path');
const fs=require('fs');

var file=path.join(__dirname,'./test','deneme.txt');
function DosyaOku(err,data){
    if(err) throw err;
        console.log(data);
}
function Durum(err,stat){
    if(err) 
        console.log(err.message);
    if(stat.isFile()) 
        fs.readFile(file,'utf8',DosyaOku)
}
function DosyaVarmi(exists){
    if(exists) 
        fs.stat(file,Durum)
}


fs.exists(file,DosyaVarmi);
