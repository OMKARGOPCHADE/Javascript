let age = 20
//let normal_String = "hey, hello my name is omkar and my age is: "+age;
//avoid to write string as written in above case.always use backticks instead of double quotes.
let normal_String = `hey, hello my name is omkar and my age is:${age}`
//by writing in this way we can easily use any variables in between, by using template litrals-->${var_Name}
//console.log(normal_String);
//ways to create a string.
//1.let str_Var=``|""|''
//2.let str_VarUsingStringObject = new String(`hello`); also u can use "",''.
const gameName = new String(`hello dear`);
//console.log(gameName.__proto__);
//By using String method we can create a string var(object) which has all the properties or protypes of String with a (.) we can access all of them!
//it's a prototype of string if we want to see the properties of this string object we can use varName.__proto__ and we can see all the properties in browser console.
/* String has plenty of inbulit methods(protoypes). some imp. methods of them.
1.String.trim()-->it removes all the extra white spaces of starting and ending part of string.
2.String.replace()-->it replaces first occurence of given data with existing data.
if we want to replace all the occurences we can use replaceAll() prototype.
3. String.split()-->it creates a array from string by using the given delimeter or separator.
4.toUpperCase() and toLowerCase()
5.substring()-->it takes to parameter's starting and ending to create new substring from orignal
*/
const newGameName = `"   hey hello om     "`
// console.log(newGameName);
// console.log(newGameName.trim());
//Loops in Js
/*
1.for--loop
2.while---loop
3.do-while--loop
4.for-in--loop-->gives index or key of iterator
5.for-of--loop-->gives value of index or key
6.for-Each--loop-->uses for working on each element of array.
*/
let arr = [1,2,3,4,5,6];
for (i in arr)
{
    console.log(`index of ${arr[i]}:${i}`);
}
let obj =
{
    name:'omkar',
    rollNo:23
}
for(key in obj)
    {
        console.log(`${key}:${obj[key]}`);
    }
for(value of arr) console.log(value);