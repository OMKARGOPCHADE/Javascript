let str_Number = undefined
let is_Number = Number(str_Number)
// console.log(typeof is_Number)
// console.log(is_Number);
//1. "33" => type:number,value:33
//2. "33abc" => type:number,value:NaN-->Not an Number
//3. true => type:number,value=1
//4. undefined => type:number, value=NaN
//In Js everything you convert in number that is converted but according to value that is stored.
//In Js fo type they use small letters like-->number,string,boolean,etc.
//but while converting use first letter of every type captial such as Number(),String(),etc.
let isLoggedIn = Boolean("")
// console.log(isLoggedIn);
//1. 1=>true; 0=>false
//2. emptystring("")=>false; something in it("ab")=>true;
//In Js Boolean()is used to convert value into Boolean but be in mind everyting that is somthing value as given above example is treated as true. and anything that is not an value that is treated as false.
let number = undefined
let str = String(number)
// console.log(str);
// console.log(typeof str);
//1. 33=>33, type=string
//2. undefined=> undefined ,type=string
// In Js whatever you convert in string using String() is treated as string.

let a = 33
console.log(++a);
console.log(a);
console.log(12+"2");//122
console.log(1+2+"3");//33
console.log("1"+2+4);//124
