// JavaScript Fundamentals Cheat Sheet

// 1. Variables
// Variables store data.
// Use let for reassignable values, const for constants, and avoid var in modern JS.

// let name = "Vikas";
// let age = 21;
// age = 22; // allowed with let

// const country = "India";
// // country = "USA"; // ❌ error

// var oldValue = "legacy"; // function-scoped, older approach

// // Scope
// // Global scope: accessible everywhere
// // Block scope: only inside { }
// // Function scope: only inside a function

// if (true) {
//   let blockVar = "inside block";
//   var functionVar = "inside if";
// }

// console.log(functionVar); // works
// // console.log(blockVar); // ❌ error

// // Hoisting
// console.log(hoisted); // undefined
// var hoisted = "value";

// // 2. Data Types
// // Primitive: String, Number, BigInt, Boolean, Undefined, Null, Symbol
// // Non-primitive: Object, Array, Function

// let fullName = "Vikas"; // String
// let score = 21; // Number
// let isStudent = true; // Boolean
// let user = { name: "Vikas", age: 21 }; // Object
// let skills = ["JavaScript", "React", "Node"]; // Array
// let x; // Undefined
// let emptyValue = null; // Null

// // JS is dynamically typed: no need to declare a type explicitly.

// // 3. Type Conversion
// String(10); // "10"
// Number("10"); // 10
// Boolean("hello"); // true
// Number(null); // 0
// Number(undefined); // NaN

// // 4. Operators
// // Arithmetic: + - * / % ** ++ --
// // Assignment: = += -= *= /= %= **=
// // Comparison: == === != !== > < >= <=
// // Logical: && || !
// // Ternary: condition ? "yes" : "no"
// // Nullish: value ?? "default"
// // Optional chaining: user?.name
// // Spread: [...arr, 4]

// let total = 5 + 2; // 7
// let adult = age >= 18 ? "Adult" : "Minor";
// let guestName = null ?? "Guest";

// // 5. Strings
// let text = "Vikas";
// text.length; // 5
// text[0]; // "V"

// // 6. Important Concepts
// // Primitive values are copied by value.
// // Objects and arrays are passed by reference.
// // Primitive types use stack memory.
// // Non-primitive types use heap memory.

// // 7. Best Practices
// // Prefer let and const over var.
// // Use === instead of ==.
// // Use const by default.
// // Keep code readable and structured.

// // Fundamentals complete