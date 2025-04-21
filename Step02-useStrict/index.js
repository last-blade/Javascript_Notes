"use strict" // isko likhne se hum javascript ke newer version ko use kar sakte hain

a = 10;
console.log("value", a) /* without "use strict" ke error nahin aayegi or print ho jaayegi "a" ki value or jab 
                            ki error aani chahiye kyoki "a" jo hai defined nahin hai, like 'let a;'......hum ne 
                            yahan par "a" ko define kare bina hi initialize kar diya, and baaki languages mein aisa 
                            hota toh error aati,.....lekin iss cheez ko theek karne ke liye hum "use strict" kaa 
                            istemaal karte hain, or fir jab run karenge code ko toh fir "Reference error" aayegi 'ReferenceError: a is not defined'
                        */

function example() {
    x = 10; // ✅ No error, but x becomes global — dangerous!
}

function example() {
    "use strict";
    // strict mode only inside this function
}

//Without "use strict"
function showThis() {
    console.log(this); // 👉 In non-strict mode, this refers to the global object (window in browsers)
}
  
showThis(); // Output: Window (in browsers)
  
//with 'use strict'
function showThis() {
  console.log(this); // 👉 In strict mode, "this" is undefined
}
showThis(); // Output: undefined


/*
🔍 What is Strict Mode?
Strict mode is a way to opt in to a restricted version of JavaScript. It was introduced in ECMAScript 5 (ES5).

✅ Benefits of "use strict":
Catches silent errors
E.g., assigning to undeclared variables throws an error.

Makes debugging easier
It prevents the use of potentially problematic syntax.

Disallows reserved keywords
Like let, package, interface, etc., for variable names.

Prevents this from defaulting to the global object
Useful in functions where this would otherwise be window.
*/