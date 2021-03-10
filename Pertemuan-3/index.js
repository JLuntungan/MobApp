// console.log("Hello World!");
// console.log("Welcome to Mobile Programming Class");

let hello = "Hello World !!!";
hello = "Welcome";

let age = 18;
age += 2;

let namaDepan = "Junior";
let namaBelakang = "Luntungan";

let namaLengkap = namaDepan + " " + namaBelakang + ". Usia saya adalah " + age;

let apakahSudahMenikah = false;

let alamat;

console.log(hello);
console.log(age);
console.log(apakahSudahMenikah);
console.log(alamat);
console.log(namaLengkap);

console.log(10 == "10"); // Loose Equality
console.log(10 === "10"); // Strict Equality - 3 sama dengan lebih strict karena dia memperhatikan tipe datanya juga

let angka = 10;
let hasil = angka %2 === 0 ? "Genap" : "Ganjil";

// if (angka % 2  === 0) {
//   hasil = "Genap";
// } else {
//   hasil = "Ganjil";
// }

console.log(hasil);

//Function

// Function Declaration
function ucapkanSalam(salam) {
  return salam;
}

const salam = ucapkanSalam("Selamat sore, ini function declaration");
console.log(salam);

// Function Expression
const ucapkanSalam2 = function () {
  return "Selamat sore, ini function expression";
};

console.log(ucapkanSalam2());