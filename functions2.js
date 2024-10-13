// +++++++++ Part1 E-s5++++++++
var a = 10; // There is no variable scope for this type of variables we can use or redeclare var type variables.
console.log(`ES-5 Var type variable a value:${a}`);
//as shown below we are using the same name for storing diffrenet data in E-S5 there is no option for this.
var a = 20;
const b = 20; //after declaration and defination there is no further modifications can happen.
console.log(`E-S5 Variables Var a value:${a} and b value:${b}`);
// ++++++++ Part2 E-S6 ++++++
//letter on javascript intoduces new keyword called let which is used to create a variable. by including feature of variable scope.
let m = 20;
console.log(m);
//let m = 90;
console.log(m);
//as shown we have redeclared var m with by using let it is producing error that means we can'not reuse let type variable's within same scope.
//++++++ Normal Function with thier 4 types ++++++

//1.function with no return and no parameters.
function add() {
  console.log(
    `Hi, i am type of function which can'not take any parameters and no return!`
  );
}
//2. function with return but no parameters.
function add1() {
  let a = 10;
  let b = 20;
  return a + b;
}
//3. function with no return but with parameters.
function add2(a, b) {
  console.log(a + b);
}
//4. function with return and parameters.
function add3(a, b) {
  return a + b;
}
// +++++ Aynonoms funtion with thier 4types ++++++
//1.function with no return and no parameters.
let f1 = function () {
  console.log(
    `Hi, i am type of function which can'not take any parameters and no return!`
  );
};
//2. function with return but no parameters.
let f2 = function () {
  let a = 10;
  let b = 20;
  return a + b;
};
//3. function with no return but with parameters.
let f3 = function (a, b) {
  console.log(a + b);
};
//4. function with return and parameters.
let f4 = function (a, b) {
  return a + b;
};
// ++++++ arrow function with thier 4 types ++++
//1.function with no return and no parameters.
let k1 = () => {
  console.log(
    `Hi, i am type of function which can'not take any parameters and no return!`
  );
};
//2. function with return but no parameters.
let k2 = () => {
  let a = 10;
  let b = 20;
  return a + b;
};
//3. function with no return but with parameters.
let k3 = (a, b) => {
  console.log(a + b);
};
//4. function with return and parameters.
let k4 = (a, b) => {
  return a + b;
};
let a1 = () => {
  //function calls
  console.log(" Normal Function with thier 4 types");
  console.log("1.function with no return and no parameters.");
  add();
  console.log("2. function with return but no parameters.");
  console.log(add1());
  console.log("3. function with no return but with parameters.");
  add2(60, 70);
  console.log(add3(80, 90));
  console.log("4. function with return and parameters.");
  console.log("Aynonoms funtion with thier 4types");
  console.log("1.function with no return and no parameters.");
  f1();
  console.log("2. function with return but no parameters.");
  console.log(f2());
  console.log("3. function with no return but with parameters.");
  f3(1020, 1030);
  console.log("4. function with return and parameters.");
  console.log(f4(520, 530));
  console.log("arrow function with thier 4 types ");
  console.log("1.function with no return and no parameters.");
  k1();
  console.log("2. function with return but no parameters.");
  console.log(k2());
  console.log("3. function with no return but with parameters.");
  k3(90, 100);
  console.log("4. function with return and parameters.");
  console.log(k4(60, 50));
};
console.log("Loding...");
setTimeout(a1, 2000);
