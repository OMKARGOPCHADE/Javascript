const studentID = 231052004
var a = "omkar"
let b = 5
//studentID = 121 It is const type variable can'not be modified once created!
{
    var a = 'a' // even we created newly a in this scope it will change all var type a variables in program.
    let b = 10 // this b var has only this block scope.
    console.log(b)
}
console.table([studentID,a,b])