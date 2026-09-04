// defination -- function is a reuseable piece of code used to perform a specific task.

// input --> function --> output
// example--  input(a,b)  --> add --> a+b
// function add(a,b){
//     return a+b
// }

//   ---1--- basics-
// 1.decleration
// 2.how to call
// 3.syntax 
// 4.parameters.
// 5.return 
// 6.default parameters

// --> a function can be stored inside a variable
// const greet = function() {
//     console.log("Hello");
// };

// greet();

// -->  Anonymous Function-- a function without name called anonymous function.






//---2--- mordern functions

// --arrow function.

// insted of 
// function add(a, b) {
//     return a + b;
// }

// we write arrow functions like this--
// const add  = (a,b)=>{
//     return a+b;
// }

// even more shorter--> implicit return
// const add = (a,b)=> a+b

// arrow function with one parameter --
// const square = x => x * x;


// -- callback function-->  a function passed in another function is called callback function.

// example-->

// const numbers = [1, 2, 3];

// numbers.forEach(function log(num) {
//     console.log(num);
// });

// mordern approach-
// const numbers = [1,4,3];

// numbers.forEach(num => {
//     console.log(num)
// })




//---3--- Higher order functions.

// A function that:

// takes another function as an argument, or
// returns another function

// is a higher-order function.

// example-->
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// const add = (a, b) => a + b;

// calculate(10, 20, add);

// examples--> built in higherorder functions.
// map()
// filter()
// reduce()
// forEach()