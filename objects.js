//singleton
//object.Create()

//symbol
const my_sym = Symbol("Mykey1")
//object literals
const jsobj={
    name:"omkar",
    id:23,
    age:20,
    location : "mumbai",
    [my_sym]:"mykey1"
}
//there are two types two use object elements by using (.) and using [" "]
// as object keys also treated as string while we use datatypes like symbol that its better to use [] while accessing object elements because is we use symbol's as usual like other keys it treat as same as other not as symbol so better to use [] while creating inside object and also while using.

// console.log(jsobj["name"]);
// console.log(jsobj["id"]);
// console.log(jsobj["age"]);
// console.log(jsobj["location"]);
// console.log(jsobj[my_sym]);
// how to make changes in object elements.
jsobj.age = 19
// console.log(jsobj.age);
//how to make unchangeable object by using Object.freeze(object_name) if after we used freeze we try to make changes it don't show any error but no fruther changes can possible in object.
Object.freeze(jsobj)
jsobj.age = 20
// console.log(jsobj.age);

//in Js we can create objects by using multiple ways.
// object types in js are singleton object and object literals
//how to create singleton object in using constructor.
const obj1 = new Object();//singleton object.
const obj2 = {} // Non-singleton object.
obj2.name = "omkar"
obj2.last_name="gopchade"
obj2.id=10
obj2.email="omkar@google.com"
// console.log(obj2);
// As we can merge arrays in js we can also merge objects in js.
//1.using Object.assign(target,object1,object2,etc.)
//all the objects are concatinated to target object and also a new object is returned by assign() method.
// its better to use {}(empty) object as target to avoid affect of any object and take a new object to assign the value Object.assign() returns.
// const new_Obj = Object.assign({},obj2,jsobj)
// console.log(new_Obj); 
//using spred operator as used in array.-->{...obj1,...obj2,...etc}
const new_Obj = {...jsobj,...obj2}
//note when we have same keys in two different objects and we are trying to  concat them together then the second object which has same key as fist object the value of second object is overide on the same key.
// console.log(new_Obj);
// how to create nested objects..?
const _nest_Obj = {
    _nest_Obj_2:{
        _nest_Obj_3:{
            name:"Deepraj",
            last_name:"Jadhav"
        }
    }
}
//we can access element's of nested objects as follows.
// console.log(_nest_Obj._nest_Obj_2._nest_Obj_3.name);
// console.log(_nest_Obj._nest_Obj_2._nest_Obj_3.last_name);

//if we want to retrive keys of object we can retrive as below.
// console.log(Object.keys(obj2));
//it returns array of given object keys.
//same as keys we can access values as follows.
// console.log(Object.values(obj2));
//we can also access key->value as bundled together.
// console.log(Object.entries(obj2));
// console.table(obj2)

//if we want to see weather a given key is present in object or not. we can use below method or property of object.
// console.log(obj2.hasOwnProperty('name1'));//returns true/false

//Object de-structure
// we can create a altername for object elements.how see
const  {name:a}=obj2
// console.log(`name:${obj2.name} || a:${a}`);

// for in loop
// for accesing values of object we can use for in loop.
const UserName = {
    name:'omkar',
    user:'om123',
    role:'software engineer'
};
// for (let i in UserName) console.log(UserName[i]);

// in javascript all objects are instances of ojects. a typical object inherits propertis of object (including methods). with the help of object.create() mehtod.
// e.g 
const newObj = Object.create(UserName);
// console.log(newObj);//although it look like an empty object . but the thing is it just hides the properties of the object.
// console.log(newObj.name);//here is the proof that it looks like an empty but it has all the properties of the inherited object.

// everything in js is treated as an object.
// an every object has thier own prototypes.
// e.g
// console.log(Object.getPrototypeOf(newObj));

// also we can define an a object as enmurable or non-enmurable.
// let's see how we can do that.
// const obj = Object.create({})//empty object 
// Object.defineProperty(obj , 'book' , {
//     // icon : '\/\/' ,
//     // this thing is not work directly for making it usefull we have to use getters and setters properties.
//     get : ()=> '\/\/',
//     enumerable : true // for making this object iterable we have to use this enumerable property and also it has to be true.
// });
// console.log(obj);
// for (const i in obj) console.log(obj[i]);

// in js objects arrow functions has no designed context while using this for current object context.
// e.g
obj = {
    comics:'marvel',
    pen:'',
    setPen: function(){
        this.pen+='pentonic'
    },
    setPen2:()=>{
        this.pen+='hey'
    }
};
// obj.setPen();
// console.log(obj); this is working properly.
// obj.setPen2();
// console.log(obj); no this is not working pen is not updated.
// now we know where to use arrow fn and where to use normal fn in objects.