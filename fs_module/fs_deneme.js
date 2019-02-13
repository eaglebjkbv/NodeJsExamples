const fs=require('fs');
const path=require('path');
// Klasör Oluşturma
// fs.mkdir(path.join(__dirname,'test'),{},function(err){
// fs.mkdir(path.join(__dirname,'test2'),{},err=>{
//     if(err) throw err;
//     console.log('Klasör Oluşturuldu');
// });

// Dosya oluşturma ve yazma
// fs.writeFile(path.join(__dirname,'test2','merhaba.txt'),'Merhaba Dünya',err=>{
//     if(err) throw err;
//     console.log('Dosya yazıldı...');
//     fs.appendFile(path.join(__dirname,'test2','merhaba.txt'),'Selamlar',err=>{
//         if(err) throw err;
//         console.log('Dosyaya Eklendi');
//     });
// });

// Dosyadan okuma
fs.readFile(path.join(__dirname,'/test2','merhaba.txt'),'utf8',function(err,data){
        if(err) throw err;
        console.log('Dosya içindekiler :'+data);
    });
    
