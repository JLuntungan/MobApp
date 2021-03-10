// OOP in JavaScript
// Object Literal

const mobil = {
    merek : " Toyota",
    warna : " Putih",
    nyalakanMobil: function(){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    },
};

const mobil2 = {
    merek : " Toyota",
    warna : " Putih",
    nyalakanMobil: function(){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    },
};

mobil.nyalakanMobil();
mobil2.nyalakanMobil();

//Object Class
class Mobil {
    constructor(merek, warna){
        this.merek = merek;
        this.warna = warna;
    }

    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} warna ${this.warna} sudah menyala`);
    }
}

// const mobil1 = new Mobil("Toyota", "Putih");
// const mobil3 = new Mobil("Daihatzu", "Merah");
// mobil1.nyalakanMobil();
// mobil3.nyalakanMobil();

//Inheritance
class Toyota extends Mobil{
    constructor(merek, warna, mesin){
        super(merek, warna);
        this.mesin = mesin;
    }

    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} warna ${this.warna} sudah menyala`);
    }
    
    matikanMobil(){
        console.log(`Mobil dengan merek ${this.merek} warna ${this.warna} sudah dimatikan`);
    }
}

const agya = new Toyota("Agya","Putih","1000cc");
const avanza = new Toyota("Avanza", "Merah", "1300cc");

agya.nyalakanMobil();
agya.matikanMobil();
avanza.nyalakanMobil();

