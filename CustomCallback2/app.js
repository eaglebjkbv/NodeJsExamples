const kontrolEt = function (arg, callback) {
    try { 
        if (typeof arg !== 'number')  throw "Sayi Değil";
        
      }
      catch(err) {
        return callback(err);
      }
    return callback(null, "Bu bir sayıdır...");
       
}

kontrolEt('deneme', function (err, data) {
   console.log("Aloooow");
    if (err)
        console.log (err);

    else
        console.log(data);
   
});
kontrolEt("aa", (err, data) => {
    if (err) 
    {
      
        console.log(err);
    } else {
        console.log(data);
    }


});