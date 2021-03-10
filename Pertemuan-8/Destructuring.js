// DESTRUCTURING - Pertemuan 8

// Array (caranya , ambil sebagian item, deklarasi & assigment terpisah, Default value, rest operator)

//let umur;
//const arrPerson =['john', 'Doe', 35, true, 'Minahasa Utara'];

//const firstName = arrPerson[0];
//const lastName = arrPerson[1];
//const umur = arrPerson[2];
//const isMarried = arrPerson[3];

//const [, ,umur]=arrPerson;

//let [, ,umur, isMarried, address]=arrPerson;
//let [firstName, lastName, ...rest]=arrPerson;

//console.log(firstName, lastName);
//console.log(rest);
//console.log(umur, isMarried, address);

// Object (caranya , ambil sebagian aitem , deklarasi & assignment terpisah ,default value, resto operator)
/*
// CARA LAMA
const objPerson = {
    firstName = 'Junior';
    lastName = 'Luntungan';
    umur = 20;
    isMarried = false;
};

const firstName = objPerson.firstName;
const lastName = objPerson.lastName;
const umur = objPerson.umur;
const isMarried = objPerson.isMarried;

console.log(firstName,lastName,umur,isMarried);


const objPerson = {
    firstName : "Junior",
    lastName : "Luntungan",
    umur : 20,
    isMarried : false,
};
//const { umur : age } = objPerson;

//const {firstName, lastName, umur, isMarried} = objPerson;
//console.log(firstName,lastName);
//console.log(umur);

//let {firstName, lastName, address = "Minahasa Utara"}= objPerson;
let {firstName, lastName, ...rest}= objPerson;
console.log(firstName,lastName, rest);

//cara 1
//const display = (props) => 
//`hello nama saya ${props.firstName} ${props.lastName}`;

//cara 2
const display = ({firstName,lastName}) => 
`hello nama saya ${firstName} ${lastName}`;

console.log(display(objPerson));
*/

const student = {
    fullName : "John",
    address : "Manado",
    age : 25,
};

const displayStudentInformation = (props) => {
    console.log(`Student Name : ${props.fullName}, Alamat ${props.address}`);
};
displayStudentInformation(student);

/*
const displayStudentInformation = ({fullname, address}) => {
    console.log(`Student Name : ${fullName}, Alamat ${address}`);
};
displayStudentInformation(student);
*/