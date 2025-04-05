// in js when any function call happens it takes place inside the callstack.
/*
    eventloop is just something when there are lot's of work is do and in between some fn is getting more time to complete a task then js will say hey u required more time to complete ur work then take ur time i will do my other pending work. 
*/
// e.g
function one()
{
    setTimeout(()=>{
        console.log('inside one i took 3 seconds to complete my task.');
    },3000)
    console.log('hello inside one');
}
function two()
{
    console.log('hello inside two');
}
function three()
{
    console.log('hello inside three');
}
one();
two();
three();
// as called fn's in a sequence it will start working but while it come to fn call one.
/*
 it will print the console.log('hello inside one');
 but wait we have before that setTimeout( ) kind of thing right so ya as i said it will give time to acomplish it's work. and start working on pending work so that other two and three fn's get's called and printed first then control come back to settimeout().

 this is what event loop is.
*/