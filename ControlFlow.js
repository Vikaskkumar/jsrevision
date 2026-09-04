// 1.conditionals

// if
// else
// else if
// nested if
// switch 
// ternary operator
// truthy- falsy values



// if 
// let login = true;
// if(login){
//     console.log("loggedin")
// }


// let age = 30;
// if(age >= 18){
//     console.log("you can vote")
// }
// else{
//     console.log("you can not vote")
// }


// let marks = 78;
// if(marks >= 90){
//     console.log("grade A")
// }
// else if(marks >= 60){
//     console.log("grade B")
// }
// else{
//     consolge.log("grade C")
// }


// let age = 20;
// let haslicence = true;

// if(age > 18){
//     if(haslicence){
//         console.log("you can drive")
//     }
// }



// let day = 2;

// switch(day){
//     case 1:
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday")
//         break;

//     case 3:
//         console.log("wednesday")
//         break;

//     default:
//         console.log("invalid")
// }



// Ternary operator
// let age = 20;
// let result = age > 18 ? "adult" : "Minor";
// console.log(result)

// condition ? valueIfTrue : valueIfFalse;



// truthy and falsy value

// truthy value acts like true
//falsy value acts like false


// 1. Truthy -- [ "hello", 23, "0", [], {}, true, -5 ]

// 2. Falsy  -- [ false, 0, -0, 0n, "", null, undefined, NaN ]






// 2. loops

// for loop

// let arr = [2,5,3,7,8];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// star patterns.
// 1.square
// ****
// ****
// ****
// let count = 4;
// for ( let i = 0;i<=count;i++){
//     let row = ""
//     for (let j=0;j<=count;j++){
//         row = row + "* "
//     }
//     console.log(row)
// }

// 2.Right Triangle

// *
// **
// ***
// ****

// let count = 5;
// for(let i =0;i<count; i++){
//     let row = "";
//     for(let j=0;j<i;j++){
//         row = row + "*";
//     }
//     console.log(row)
// }

// while loop

// let n=5;
// while (n > 1)
// {
//     console.log("hello");
//     n = n-1;
// }

// do while loop
// let n=5;
// do{
//     console.log("hello");
//     n= n-1
// }
// while (n>1)

// for - of loop. --- for of used for array and strings. or iterable items. 

// let numbers = [10, 20, 30, 40, 50];
// for (let num of numbers) {
//     console.log(num);
// }

// let fruits = ['apple','banana','grapes'];
// for(let fruit of fruits){
//     console.log(fruit)
// }


// let name = "vikas";

// for(let char of name){
//     console.log(char)
// }



// for...of → values
// for...in → keys/indexes


// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2024,
//     color: "Black"
// };

// for( let key in car){
//     console.log(key)
// }


// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2024,
//     color: "Black"
// };

// for( let key in car){
//     console.log(`key = ${key}  and value = ${car[key]}`)
// }

