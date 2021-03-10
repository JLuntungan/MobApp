// Asyncronus JavaScript



//callback
/*
function greetings(fullName){
    console.log(`Hi ${fullName}`);
}

function introduction(firstName, LastName, callback){
    const fullName = `${firstName} ${LastName}`;
    callback(fullName);
}

//introduction("John","Doe",greetings);
introduction("John", "Doe", (fullName) => {
    console.log(`hi ${fullName}`);
});


console.log("Satu");
setTimeout(() => {
    console.log("dua");
},2000); //akan dijalankan pada waktu yang ditentukan 
console.log("tiga");


function proses1(){
    console.log("Proses 1 selesai dijalankan")
};

function proses2(callback){
    setTimeout(() => {
    console.log("Proses 2 selesai dijalankan");
    callback();
    }, 2000);
};

function proses3(){
    console.log("Proses 3 selesai dijalankan")
};

proses1();
proses2(proses3);
//proses3();
*/
//rest condition adalah proses kedua blum selesai dijalankan tetapi,proses ketiga sudah menuntut untuk dijalankan

//PROMISE => CALLBACK HELL
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("proses 3");
            setTimeout(() => {
                console.log("Proses 4");
            }, 4000);
        }, 2000);
    }, 4000);
}, 2000);

let condition= true;
/*

function newPromise() {
    return new Promise((resolve, result) => {
    if (condition) {
        resolve("berhasil");
    }else{
        reject ("Error");
    }
});

newPromise.then((result) => {
    console.log(result);
});
}

newPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });*/

function getIDStudent(){
    return new Promise((resolve, result) => {
        resolve("12345");
    });
}

function getNameById() {
    return new Promise ((resolve, reject ) => {
        if(id === "12345") {
            resolve("Junior Luntungan");
        }else {
            reject ("Unknown ID Student");
        }
    });
}

// getIDStudent().then(id => {
//   console.log(id);
// });

getIDStudent()
    .then((id) => {
        return getNameById(id);
    })
    .then((name) => {
        console.log(name);
    }) 
    .catch ((error) => 
        console.log(error)
    );


/*
getIDStudent()
.then((id) => {
    return getNameById(id);
})
.then((name) => {
    console.log(name);
}) 
.catch ((error) => {
    console.log(error);
});


const getNameByIdAsync = async () => {
    const id = await getNameById();
    const name = await getNameById(id);
    console.log(name);
};

getNameByIdAsync();
*/

fetch('http://api.tvmaze.com/seasons/1/episodes')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));