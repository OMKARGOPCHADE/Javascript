//Date and Time is a Object in Js
//In Js. we can retrive current date by using date object also we can create our own date object by mentioning the date in Date() as a parameter;
// the date is calulated from jan 1 1970, utc.
let new_Date = new Date();
// console.log(new_Date.toString());
// //to print approptiate date
// console.log(new_Date.toLocaleString());
// //create date format readble and also used to manipluate date object further
// console.log(new_Date.toISOString());
// console.log(new_Date.toJSON());
//how to create own date object?
let myDate = new Date("01-29-2023");
console.log(myDate.toString());