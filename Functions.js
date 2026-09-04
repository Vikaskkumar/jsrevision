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


//foreach()--->  it not creates a new array

// let arr = [1,3,5,7];
// arr.forEach(num=>{
//     console.log(num);
// })


//map()---> mostly used in react. _----> it creates a new array.
// example-->
// let numbers = [2,4,6];

// let squares = numbers.map(num =>{
//     return num*num;
// })

// console.log(squares)


//filter --> gives a new arry with filtration.
// ex->
// let numbers = [2,3,4,5,6,7,8];
// let even = numbers.filter(num=>{
//     if(num % 2 == 0){
//         return num
//     }
// })

// let odd = numbers.filter(num=>{
//     if(num % 2 != 0){
//         return num
//     }
// })

// console.log(`even numbers = ${even}`)
// console.log(`odd numbers = ${odd}`)


//reduce()---> it gives a single value
// const numbers = [1, 2, 3, 4];

// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log(total);






//rest operator---
// example-->
// function sum(...numbers){
//     return numbers.reduce((total,num)=>{
//         return total + num;
//     })
// }

// console.log(sum(2,3,4,1))




//IIFE---> immediately invoked function expression --> it will automatically called when we run program.

// (function greeting(){
//     console.log("hello")
// })();









//-----3-----advance functions ------

// 3.1 Closures ⭐⭐⭐

// A closure happens when an inner function remembers variables from its outer function even after the outer function has finished executing.

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3


// Closures are important for:

// Data privacy
// Counters
// Function factories
// React hooks concepts
// Callbacks
// Event handlers


//recurstion --> function calls itself.
// example ---> factorial.-->
// function factorial(num){
//     if(num == 0 || num == 1){
//         return 1
//     }
//     else{
//         return num * factorial(num-1);
//     }
// }

// console.log(factorial(4))


// 3.5 call()
// call() lets you call a function with a specific this.----> or simply it allows us to pass a object to a function.

// function greet(){
//     console.log(this.name);
// }

// const user = {
//     name:"vikas"
// }

// greet.call(user)



//apply
//bind


