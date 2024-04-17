// setTimeout(function(){
//     console.log('third');
// },3000)

// function pranjali()
// {
//     console.log('love birds');
// }
// pranjali();
// console.log('second');
// f
// function resoning()
// {
//     console.log('I am telling you that i love you or not');
//     console.log('please wait one minute');
// }
// setTimeout(function()
// {
//     console.log('yes i love you');
// },8000);
// resoning();
// let obj=new Promise(function(resolve, reject)
// {
// setTimeout(function()
// {
//     console.log('phla pyar tu mera tu hi akhiri sanam');
// },5000);
// resolve(2233);
// });

// console.log('pehla');

// let obj=new Promise(function(resolve,reject){
//     console.log('here my work is not performed');
//     reject(new Error('bhaisahab error hau'));

// });


// let pen= new Promise(function(resolve,reject)
// {
//     console.log('ppp');
//     reject(new Error('bhaisahab cake nhi ahai kuxh bhi nhi hai cake'));
// },3000);


// let o= new Promise(function(resolve,reject)
// {
//     console.log('ppp');
//     reject(new Error('bhaisahab cake nhi ahai '));
// },3000);
// console.log('make cake choclate');







//promise then or catch

// let merapromise=new Promise(function(resolve,reject){
//    setTimeout(function()
//    {
//     console.log('promise1');
//    },4000);
//    resolve(4000);

// })

// merapromise.then((value)=>{console.log('this this your feedback')});



// let meraprom=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      console.log('love me');
//     },7000)
//     resolve(200);
// })

// merapromise.then((value)=>{
//     console.log(value);
// })

// meraprom.catch((error)=>{
//     console.log('received an error');
// })


async function sum(a,b){
    console.log(a+b);
}
sum(1,3);

