const kontrolEt = function (arg, callback) {
    if (typeof arg !== 'number') {
        //throw "Bu bir sayi değil";
        
       return callback("Bu bir sayı değildir");

    }
    return callback(null, "Bu bir sayıdır...");
}

kontrolEt('deneme', function (err, data) {
    if (err) {

        console.log(err);

    } else {
        console.log(data);
    }
});
kontrolEt(15, (err, data) => {
    if (err) 
  
    {
        
        console.log(err);
    } else {
        console.log(data);
    }


});