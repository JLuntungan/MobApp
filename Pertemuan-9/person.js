const fullname = "Junior Luntungan";

const person = {
    firstName : "Junior",
    lastName : "Luntungan",
    age : 20,
};

const display = ({firstName, lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
};

export { fullname , person , display };