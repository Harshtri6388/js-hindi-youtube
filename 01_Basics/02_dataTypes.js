// JavaScript has 8 main data types.
/* Primitive Data Types
1. String: Used to store text. 
2. Number: Used to store numbers, both integers and decimals. It also includes NaN and Infinity.
3. BigInt: Used to store very large integers. Add n at the end of the number.
4. Boolean: Represents only two values: true or false. Mainly used for conditions and decision-making.
5. Undefined: A variable has been declared but has not been assigned a value.
6. Null: Represents an intentional absence of a value.
7. Symbol: Used to create unique identifiers. Every Symbol is unique.
Non-Primitive Data Type
8. Object: Used to store multiple related values as key-value pairs.
*/
let name = "Vipul";

let age = 20;
let price = 99.99;

let bigNumber = 12345678901234567890n;

let isStudent = true;

let city;
//console.log(city); // undefined

let car = null;

let id = Symbol("id");

let student = {
    name: "Vipul",
    age: 20,
    city: "Kolkata"
};
console.table({
    name: name,
    age: age,
    price: price,
    bigNumber : bigNumber,
    isStudent : isStudent,
    car : car,
    id : id
});
console.table({student});

// console.log(typeof Value), returns the type of the value 
console.log(typeof isStudent); // returns boolean 

// ⚠️ Important: null is actually a primitive data type, but typeof null returns "object" because of a historical JavaScript bug/quirk.
console.log(typeof car);  // returns object

