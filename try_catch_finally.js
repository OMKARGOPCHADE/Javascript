// this concept is just like an exception handling.
// in js threre are three main types of errors are available
/*
1.TypeError
2. Reference Error
3. Syntax Error
*/
try{
    console.log(a + b);
    // trying to use undeclared varibles.
}
catch(err){
    console.log(err.name);//reference error
}
finally{
    console.log('This is going to execute anyhow means whatever the result is error free or not it will work.');
}