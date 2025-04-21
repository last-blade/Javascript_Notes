/*
Two types of datatypes

-> Primitive Datatypes
1. String
2. Number
3. Bigint
4. Symbol
5. Undefined
6. Null

-> Non-primitive datatypes
1. Object
2. Array
3. Function 
*/


let x = null;
console.log(typeof x); //Output: Object; 'null' toh primitive datatype hai, and output mein non-primitive(object) show ho raha hai, why ? Brendan Eich (creator of JavaScript) admitted it's a legacy bug.

let y = undefined;
console.log(typeof y); // Output: undefined