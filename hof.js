// Higher order function or callback function.
// any function calling another function or any function is having another function as parameter or returns any other function is called as callback function.
// e.g
// let arr = ['one','two','three','four'];
// arr.forEach((element )=> {
//     console.log(element);
// });
// as u see in above example forEach function is calling another arrow function in the form parameter. which is printing each time value of array one-by-one.

//callback functions
/*
1. setTimeOut();
2. setInterval();
3. map();
4. filter();
5. reduce();
6. sort();
7. find();
8. forEach();
9. reverse();
*/

// 1. setTimeout()--> this function takes two parameter's one is callback fn and another is time in milisecond's after which it performs the task whatsoever written inside the callback Fn.
// let names = ['omkar','mallikarjun','gopchade'];
// setTimeout(() => {
//     console.log(names);
// }, 3000);
//after 3 seconds it will print the array names on the console.

// 2. setInterval() --> this Fn is quite different then previous one because it not only takes the same parameter's as previous Fn but also do the given task after every seconds given in the parameter. let's understand with an example.
// let names = ['omkar','mallikarjun','gopchade'];
// setInterval(()=>{
// console.log(names);
// },4000); 

//3. map() --> mapping with each value of the given itrerator. e.g array
// let names = ['omkar','mallikarjun','gopchade'];
// names.map((value)=>{
//     console.log(`${value},sir`);
// });

// 4. reduce()--> this Fn is quite difficult to understand. 
// reduce takes a callback Fn. the callback takes accumlator, current , and optional initial value and returns a single value as a result. it is good practice to define an initial value for the accumlator value. if we do not specify this parameter by default takes array first value as a parameter.if our array an a empty array js will throw an array.

// let choclates = [1,2,3,4,5,6,7,8,9,10];
// let sum = choclates.reduce((accumlator,current)=>{
//     return accumlator + current
// },0);
// console.log(sum);

// 5. filter() --> this Fn just does the filtering of the values which it has.

// let cities = ['degloor','mumbai','pune','gurgaon','noida','hydrabad','bengloor'];
// // filter out the cities which has loor as it's end.
// let new_arr = cities.filter((val)=>{
//     return val.includes('loor');
// });
// console.log(new_arr);

// destrucring spred and rest.

let a =  [1,2,3,4,5,6,7,8];
// let [one,two,three,four,five,six,seven,eight] = a;
// console.log(one,two,three,four,five,six,seven,eight);
// let [one,two,three,,,six,seven,eight] = a; //skkiping four and five.
// console.log(one,two,three,six,seven,eight);

let [one,two,three,...rest] = a;
console.log(rest);//taking rest values as array using rest operator.

//spred --> this simply do combining a collection of data into chunk of data so that it can be easily passed through a Fn.

//rest is used collect a collection of data in the form variables to combining it into a single collection.