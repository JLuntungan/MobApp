//Luntungan, Junior B.J

//CALLBACK
 function mandi(){
     console.log("Mandi")
};
function sarapan(callback){
     setTimeout(() => {
     console.log("Sarapan");
    callback();
    }, 3000);
};

function berangkatSekolah(){
    console.log("Berangkat Sekolah");
};

mandi();
sarapan(berangkatSekolah);



//PROMISE
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()



//FETCH
function ambilDataUSer(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((user) => console.log(user))
    
};

ambilDataUSer();

