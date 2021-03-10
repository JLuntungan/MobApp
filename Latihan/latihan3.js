// Luntungan, Junior B.J

// 1. Class
// class Orang {
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }
//     bekerja(){
//         console.log(`${this.nama} sedang bekerja seperti biasa`);
//     }
// }

// 2. Inheritance
class Orang {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
    tidur(){
        console.log(`${this.name} sedang tidur`);
    }
    makan(){
        console.log(`${this.name} sedang makan`);
    }
}
const user1 = new Orang ("Junior", 20);
user1.bekerja();
 
class Pelajar extends Orang{
    constructor(nama , umur, namaSekolah){
        super(nama,umur);
        this.namaSekolah  = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
    }
}
const user = new Pelajar("John", 17, "Unklab");
console.log(user);