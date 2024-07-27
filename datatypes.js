let str = "this is a string"
let id = 12
let flag = true
/*
Datatypes in Javascript Listed below :
1. string --> " " / ' '
2. number --> 10 
3. bigInt --> 211 to store big number.
4. boolean --> true/false.
5. symbol --> unique
6. undefined --> declared but not initilized yet.
7. null --> standalone value
8. objecct --> secondary datatype.
*/
console.log(typeof str)//string
console.log(typeof id)//number
console.log(typeof flag)//boolean
console.log(typeof BigInt)//function
console.log(typeof null)//object this is problem with js because when we print type of null it gives us object as type of null why don't no

//Primitive Data Types in Js with thier return types.
/*
1.Number=>number
2.String=>string
3.Undefined=>undefined(variable before defination)
4.Boolean=>boolean(true/false)
5.Symbol=>symbol(uses for unique value creation.)
6.null=>object
7.BigInt=>bigInt(uses for scientific values for big range values.)
*/
//References(Non-Primitive) Data Types in Js with thier return types.
/*
1.Function=>function object-->variable function let a = function(a,b){return a+b} or any other function which is used in Js.
2.Array=>object-->["omkar","mallikarjun","gopchade"]
3.object=>object-->let a ={studId=23,studName="omkar"}key-value pairs.
*/