//In javascript there are three types of function creation.
//1.Normal function
function f1()
{
    console.log("This is normal function.");
}
//2. Anonymous function.
const a = function (){console.log("This is Anonymous Function.");}
//3. Arrow function.
const b = ()=>{console.log("This is Arrow Function.");}
// f1()
// a()
// b()
//in javascript we can pass multiple arguments / parameters to function.
// and recieve as a single element (array) using rest operator.
//don't get confuse spred and rest are same operator's but they used in different different senarious.
function add(...a)
{
    let sum = 0;
    for(i of a) sum+=i;
    return sum;
}
// console.log(add(10,20,30,40,50,60,70,80,90,100));

//note :- in js we can access normal functions before function defination.
//but while using anonymous function we can'not do the same. we need first function defination.

//++++++++++++++++== this in js ==+++++++++++

// this holds the refernce or current context refernce of the current object.
const user={
    username:"Omkar",

    welcome:function () {
        console.log(`Hello ${this.username}`);
        console.log(this);
    }
}
// user.welcome()
// user.username="nandini"
// user.welcome()
// console.log(this);
//note :- when we use this in node enviorment it returns empty if it is not referenced by any object.
// and when we use the same in browser it returns a big object that is releated to browser because this time this is basically refer's the browser data.

//note: in arrow function we can return explicitly as well as implicitly using () how see

const addone = (m)=>{return m+1};//explicitly.
const addtwo = (b)=>(b+2);//implicitly.
// console.log(addone(10));
// console.log(addtwo(10));

//Immediately Invoked Function Expressions IIFE
//while writing two IIFE functions we need to add semicolon after first function end.
//how to create IIFE function.

// (function chai(){
//     console.log("Hello this is chai IIFE");
// })();
// (()=>{console.log("This is aur code IIFE");})()

//why IIFE for avoiding global scope polution.

// // in js function if we pass a list of values while calling and when reciving while Fn defn then also we can use that values by using predefined word arguments.
// (function example()
// {
//     let sum = 0;
//     console.log(arguments);
//     for(let a of arguments)//note: by default in for of loop first element is const if we dont use any decalring type for it.
//         {
//             sum+=a;
//         }
//         console.log(sum);
// })(10,20,30,540);