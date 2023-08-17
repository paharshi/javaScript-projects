// const url = "https://gorest.co.in/public/v2/users" ;


// const myPromise = async() =>{
//     const reponse = await fetch(url);
//     const data= await reponse.json();
//     console.log(data)
// }
// myPromise();

// const url = "https://gorest.co.in/public/v2/users" ;//Try and catch method.

// const myPromise =async() =>{
//     try{
//         const reponse = await fetch(url);
//         const jsonData= await reponse.json();
//         console.log(jsonData)
//     }catch(error) {
//         console.log(error)
//     }
// }
// myPromise();
 
// const myPromise =()=> { //Creating a promise 

//     return new Promise((resolve, reject)=>{


//     setTimeout(()=>{
//         resolve("Resolved");
//     }, 1000);


// });}
 
// const count = true;
// let countValue = new Promise(function(resolve,reject){
//     if (count){
//         resolve("There is a count value.");
//     }else {
//         reject("There is no count value");
//     }
// });
// console.log(countValue);

// let s = new Promise(function(a,b){
//     let res = false;
//   if (res){a("This is a True.")}
//    else {b("This is not False.")}
// })
// console.log(s)
// s.then(function(e){console.log(e)})
// .catch(function(e){console.log(e)})


let a = new Promise(function(a,b){
    let res= false;
    if(res){a("True")}
    else{b("false")}
})
console.log(a)
a.then(function(val){console.log(val)})
 .catch(function(val){console.log(val)})

 
 const url = "https://gorest.co.in/public/v2/users" ;

const myPromise = async()=>{
    const reponse = await fetch(url);
    console.log(response)
    const data= await reponse.json();
    console.log(data)
}
