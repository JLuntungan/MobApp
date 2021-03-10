/*
const person = {
    firstName : "Junior",
    lastName : "Luntungan",
    age : 20,
};

person.address = "Minahasa Utara";

console.log(person);

// var tidak mengenal block scoping

var judulBuku = "Harry Potter";

if(judulBuku === "Harry Potter"){
    var pengarang = "J.K. Rowling";
}
console.log(pengarang);

let people ={
    namaSaya : "Junior",
    umur : 20,
    alamat:"minahasa utara",
};

//string literal
let kalimat = `hello nama saya ${people.namaSaya}, umur saya ${people.umur}tahun, alamat saya di ${people.alamat}`;
console.log(kalimat);

//ARROW FUNCTION

//function declaration
function sayHello(){}

//function Ekspression
const sayHello2 = function () {};

const sayHello3 = () => {
    return `hello world`;
}
console.log(sayHello3())

const sayHello4 = (params1, params2) => `Hello ${params1} ${params2}`;
console.log(sayHello4("junior","luntungan"));


const display = (param1, param2 ,param3) => {
    const numbers = {param1, param2, param3};
    console.log(numbers);
}
display(1,2,3);


//REST PARAMETER

const display = (param1, param2, ...rest) => {
    console.log(param1,param2,rest);
}
display(1, 2, 3, 4, 5, 6, 7);
*/

//SPREAD OPERATOR
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

//const newArr = [...arr1];
const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr6 = [...arr1, ...arr2, ...arr3];

console.log(combineArr6);


let person = {
    firstName : "Junior",
    lastName : "Luntungan",
    age : 20,
};

person = {
    ...person,
    address: "Minahasa Utara",
    job: "Mahasiswa",
};

console.log(person);


const obj = { a:1, b:2};
const obj2 = { c:3, d:4};
