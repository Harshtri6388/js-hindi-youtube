// This section is for knowing variables and constants in javascript 
// To declare a variable use "let" keyword 
let name = "vipul Tyagi";
let age = 20;
let city = "Kolkata";

// Use "const" to declare a constant value 
const pi = 3.14;

// Use console.log() to print value in the terminal
/*
console.log("My name is"+" " + name );
console.log("I am " + age +" " + "Years Old");
console.log("I live in" +" "+ city +" "+ "city");
*/

// printing the results in tabular format - write "console.table([variable_name])"
console.table({
    name: name,
    age: age,
    city: city,
    pi: pi
});
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
