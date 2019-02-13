var express=require('express');
var bodyParser = require('body-parser')

var app=express();
// MiddleWares
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');
app.use('/assets',express.static('public'));

// Statik routing http://127.0.0.1:3000 
app.get('/',(req,res)=>{
    var kisiler=[   {ad:'Serra',soyad:'Vardal'},
                    { ad:'Burak',soyad:'Vardal'}
                ];
                var cumle={cumle:'Çok Güzel oldu'}
    res.render('index',{kisiler:kisiler,cumle:cumle});
});
// dinamik routing örn: http://127.0.0.1:3000/profile/1234
app.get('/profile/:id',(req,res)=>{
    var id=req.params.id;
    res.render('profile',{id:id});

});
// form sayfası....
app.get('/form',urlencodedParser,(req,res)=>{
    res.render('form');
});
// post methodu yani form doldurulduğunda çağırılacak sayfa...
app.post('/form',urlencodedParser,(req,res)=>{
    console.log(req.body); // Forma girilen bilgiler...
    res.render('form-success',{data:req.body}); // Form dataları form-succes.ejs dosyasına gönderiliyor.
});


app.listen(3000);
console.log("3000 Nolu port dinleniyor...")