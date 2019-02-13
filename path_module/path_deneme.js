const path=require('path');


// Basename Örneği
console.log(path.basename(__filename));

// Directroy name

console.log(path.dirname(__filename));

console.log(path.parse(__filename));

console.log(path.parse(__filename).base);

console.log(path.join(__dirname,'test','merhaba.html'));
