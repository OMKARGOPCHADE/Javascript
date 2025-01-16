// let arr = [1,2,3,4,true,"omkar"];
//In Javascript there are two ways to create an array using [] and by using Array() object;
//As you can see in above array we have added numbers,boolean,and string values together in a single array.
//1. in js array can store similar as well as disimilar elements.
//2. in js arrays can be get modified after creation as well because js is dynamically typed language so in js every object can extend thier size accordingly.
//there are two types in which js arrays share thier copies.
//1. shallow copy-->gives same array reference.
//2. deep copy-->gives copy of it not reference.
// imp. array functions in js.
//1.push(),2.pop()
//1.unshift()-->uses to add value at first of array and shifts the remaining forward. also return new length of array.
//2. shift()-->delets or removes first element of array also modifies the orignal array. if array is empty returns undefined and also not modify the orignal array.
//console.log(arr);
//console.log(typeof arr);
// console.log(arr.push(10));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift(15));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// const str_Array= ["omkar","gopchade","hitesh","chaudhary"];
//as array is also object in js so it also has its protypes. in which we have plenty of protypes. e.g. arr.length-->gives length of array.
// const arr_Obj = new Array(10,20,40,30,50,60,70,80,90,100);

//console.log(arr_Obj.length);
//In js we can ask questions to array means we can find out anything by asking to is something that i want know u includes in u.
//console.log(str_Array.includes("omkar"));//return true/false if exists or not.
//we can also rettrive index of an given element using indexof() return index if value not persent then it returns -1;
//console.log(arr_Obj.indexOf(101));//it will  return -1; as 101 not persent in array.

//there are two imp methods in js called slice and splice
//1. slice() returns portion of array between given first index to last index-1;
// because it takes two parameters first from to start and end where to end.
//but first it includes and last it excludes.
//e.g. arr=[1,2,3,4] arr.slice(1,3)-->2,3 as in index 1--2 and index 2--3.
// console.log(arr_Obj.slice(1,3));
// console.log(arr_Obj);
//2.splice() returns the portion without excluding end index but it also makes changes in orignal array as well. what does it means it means ki it will make the orignal array as given parameters that much part it removes from orignal array and other holds in orignal array.
//e.g. arr[1,2,3,4,5] arr.splice(1,4) --> 2,3,4,5 as shown it removes index 1 to 4 as given parameters. and holds only remaining index 0 value -->1.
// console.log(arr_Obj.splice(1,4));
// console.log(arr_Obj);
// console.log(arr_Obj);
//3. join opertion on array. this method simply returns a string of a given array with the seprator as given in parameter by default it uses (,).
//e.g. str_Arrray['a','b','c'] let str = arr.join() --> a,b,c --> it will looks same but wait the type of this str is string now not array as it looks.
// let str = str_Array.join()
// console.log(str);

//4. Array.from() method is used create an array of given object seprated by comma(,).
//Array.from()--> returns a new array of given object. but only takes on parameter.
// console.log(Array.from(str_Obj));
//Array.of() method is used to create a array of given objects. it takes mulitple objects as a parameter.
// let str_Obj = "Virat Kohli";
// let str_Obj2 = "Anushka Kohli";
// console.log(Array.of(str_Obj,str_Obj2));
//if we do arr1.push(arr2);--> it will just add the given array as a new element of calling array because as js array can store any type of values together it treate new array as new element of previous array.
// console.log(str_Array.concat(arr));

//if we want to concat to arrays together we can use arr1.concat(arr2); but the problem with this method is we can concat only one array.
//while when we use spread operator we can concat multiple arrays together as shown below.
// as it returns new concated array we need to use a variable to store it.

// const my_New_Array = [...arr,...arr_Obj,...str_Array];
// console.log(my_New_Array);
//if we have array's inside array for multiple times and we want them all together in a single array we can use Array.flat()-->method.
//we can give a range in it if the depth is long then use infinity. but for best practices use depth.
// const aa = [1,2,3,[14,5,6,4,[12,55,77]],[33,55,6]];
// const new_array = aa.flat(Infinity);
// console.log(new_array);

// 5. fill() it simply fills the array with the given element till the start -> end given.
// if given start or end is -Ve then it will treat length()+start or length()+end.
// fill_array = arr_Obj.fill(5,2,4)
// console.log(arr_Obj);

// isArray()--> is it array or not.

// 6. lastIndexOf() --> where indexOf gives us first occurence index even if there are 2 or more occurences of same element in the array. so lastIndexOf gives us given element lastIndex if there are multiple occurences of same element in array.
// let ab = [10,20,30,40]
// console.log(ab.lastIndexOf(10));

// 7. map()--> map method is used to work with each and every element of array. map simply returns new mapped array it do not modify the orignal array.
// let maths = [1,4,9,16,25]
// console.log(maths.map(Math.sqrt));
// console.log(maths);

// 8. pop()--> it just remove the last element and returns it. also modifies orignal array.
// let ab = [10,20,30,40]
// console.log(ab.pop());
// console.log(ab);

// 9. reverse()--> it just reverse the array. also modifies the orignal array.  
// let ab = [10,20,30,40]
// console.log(ab.reverse());
// console.log(ab);

// 10. split()--> it converts string to array with given seprator.
// const st = "omkar gopchade"
// console.log(st.split(' '));

// 11. for of () --> it's type of loop to iterate each n every element of array.
// const fruits = ['apple','greps','banana']
// const uppercase = [] // empty array
// for(let a of fruits)
//     uppercase.push(a.toUpperCase());
// console.log(uppercase);

let arr = [2,2]
let arr2 = [2,2]
arr.push(arr2)
console.log(arr.includes(arr2));