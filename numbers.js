//there are two ways to create a number type variable in js.
//1.not a strict type.
let number_No_Strict = 100;
// console.log(number_No_Strict);
//2.strict type to create a variable of type number using Number class
let number_With_Strict = new Number(100);
// console.log(number_With_Strict);
//while we use Number class to create a number type object it gives us sevral properties that we can use for further uses. as string has its own protypes number also have some protypes.
//some of them that we use many times.
/*
1.Number.toString()-->Changes the type of number to string.
2.Number.valueOf()-->It returns the value of calling number object.
3.Number.toPrecision()-->The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.
4.Number.toLocaleString()-->converts a big number in locality for creating for readability.
by default its locality sets to us standard for indian standard we can use 'en-IN'.
5.Number.MIN_VALUE-->maximum range
6.Number.MAX_VALUE-->minimum range
*/
// console.log(number_With_Strict.valueOf());
let otherNumber = 123.411
// console.log(otherNumber.toPrecision(4));
let local = 1000000
// console.log(local.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++|MATH LIB. IN JS|++++++++++++++++++++++++++++++
//for using in properties if maths lib in js use Math.property_name
//some important properties of maths in js.
let a = 111.33
// console.log(Math.round(a,2));
// This Math.round()-->gives us exact value of the given number by removing the decimal part of it.
// console.log(Math.min(1,3,5,7));
// The Math.min() and Math.max()-->gives us min and max value in given iterator usually we use arrays.
// console.log(Math.ceil(a));
// The Math.ceil()-->gives us the upper value by rounding with decimal's.
//console.log(Math.floor(a));
//Math.floor()-->gives us the lower value by rounding with decimal's.
// console.log(Math.sqrt(a));
//Math.sqrt()-->gives square root of given number.
// console.log(Math.random());
//Math.random()-->gives any random number between 0 to 1
//for making it from 1 to 9 we need multiply it's random given number by 10 and then we need to add 1 to it then it will give us any random number between 1 to 9.
// console.log((Math.random()*10)+1);
//for making it absolute value means without decimals use floor which gives lower values.
// console.log(Math.floor((Math.random()*10))+1);
//Math.abs()-->gives us absolute value of given number. (-6)=>6.
//for taking any random values in between two number's use below syntax.
const min = 1
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1)) + min);