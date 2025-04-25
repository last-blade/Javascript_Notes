/*
Template literals:  Template literals are a newer way to define strings in JavaScript, using backticks 
                    ` instead of single ' or double " quotes.

String Interpolation: String interpolation is the process of embedding variables or expressions into a string. 
                        It's a feature that template literals provide.
*/

const name = "Prashant";

console.log(`My name is ${name}`);
console.log(name[0])// Output: P
/*
String ek object hai, and string mein har ek letter key-value pair mein hota hai, i.e., 
0: "P"
1: "r"
.
.
.
7: "t"
*/

const course = new String("PHD");
console.log(course);
/* OUTPUT: (in browser) see below, key value pairs mein stored hai string i.e. string is an object
String {'PHD'}
0: "P"
1: "H"
2: "D"
*/

console.log(name.toUpperCase());
console.log(name.charAt(5));//Output: a
console.log(name.indexOf("t")); //Output: 7; jo letter hai hi nahin string, usko find karenge toh -1 aayega
console.log(name.substring(0, 4)); //Output: Pras; kewal 0 se lekar 3 tak ke characters aayenge bas, 4th index include nahin hoga. waise toh 5 letter aane chahiye thay, 0 to 4 means total 5 characters