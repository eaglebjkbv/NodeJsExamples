
console.log(__filename);

class Hayvan{
    constructor(ad,kilo){
        this.ad=ad;
        this.kilo=kilo;
        
    }
    selamla()
    {
        console.log(`Köpeğin Adı :${this.ad}`);
    }

}
module.exports=Hayvan;
