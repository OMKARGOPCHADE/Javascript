// Promise
/*
Promise is something as we do promise of some work to do in time to anyone.
 so weather it could get,
 resolved, rejected, or pending.
 resolved --> given task is completed.
 rejected --> given task is incomplete.
 pending --> a given task is not done yet or not rejected yet.
*/

// const promise_work = new Promise((resolve,reject)=>{
//     const array = [1,2,3,45,6,7,8,9,10];
//     setTimeout(()=>{
//         if(array.includes(0)) resolve('completed');
//         else reject('incomplete');
//     },3000);
// });
// promise_work.then((result)=>{
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);
// });

// async and await
/*
Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
*/

let one = ()=>{
    return ('one');
}
let two = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve('Completed..');
        });
    },3000);
}
let three = ()=>{return('three');}
let callstack = ()=>{
    let valone = one();
    console.log(valone);
    let valtwo = two();
    console.log(valtwo);
    let valthree = three();
    console.log(valthree);
    console.log('without async and await');
}

let callstack2 = async ()=>{
    let valone = one();
    console.log(valone);
    let valtwo = await two();
    console.log(valtwo);
    let valthree = three();
    console.log(valthree);
    console.log('with async and await');
}
callstack();
callstack2();
clearTimeout()