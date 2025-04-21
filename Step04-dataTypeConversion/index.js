const score = "33";

console.log(typeof score); //Output: string
console.log(typeof (score)); //Output: string

const valueInNumber = Number(score); 
console.log(typeof valueInNumber) //Output: number
console.log(valueInNumber);// Output: 33

//-------------------------------------------------------------------------------------------------------------------------------

// agar main "33abc" ko number mein convert karun toh kya output aayega
const randomValue = "33abc"
console.log(typeof score); //Output: string
console.log(typeof (score)); //Output: string

const value = Number(randomValue); 
console.log(typeof value) //Output: number
console.log(value);// Output: NaN (not a number)

//-------------------------------------------------------------------------------------------------------------------------------

//null ki value print karenge ab
const a = null;
console.log(a);//Output: null
const convertedNull = Number(a);
console.log(convertedNull) //Output: 0

const b = undefined;
console.log(b); //Ouptut: undefined
const convertedUndefined = Number(b);
console.log(convertedUndefined)//Output: NaN

//-------------------------------------------------------------------------------------------------------------------------------

const isLoggedIn = 1;
const booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)//Output: true

const name = "";
const booleanName = Boolean(name);
console.log(booleanName)//Output: false; empty string hai "name" variable mein isliye false aaya, agar string mein kuch hota toh true aata.

//-------------------------------------------------------------------------------------------------------------------------------

console.log(1 + "2"); //Output: 12
console.log("1" + 2); //Output: 12
console.log(1 + 2 + "3"); //Output: 33
console.log(1 + "2" + "2"); //Output: 122
console.log(true); //Output: true
console.log(+true); //Output: 1
console.log(-true); //Output: -1
console.log(+false); //Output: 0
console.log(-false); //Output: -0
console.log(+"") //Output: 0

//-------------------------------------------------------------------------------------------------------------------------------

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); //Output: "x:4, y:3"

let c = 3;
const d = ++c;

console.log(`a:${c}, b:${d}`); //Output: "a:4, b:4"

//-------------------------------------------------------------------------------------------------------------------------------

console.log(String > Number) /* JavaScript tries to convert both sides into primitives to make the comparison work:
                                "String" > Number
                                => "String" > "function Number() { [native code] }"

                                "S" has a higher ASCII value than "f", so:
                                "S" > "f" => true
                            */
                           
console.log(null > 0); //Output: false; null is converted to a number → 0; So: 0 > 0 → false
console.log(null == 0); //Output: false; null is only loosely equal to undefined, not to numbers, strings, booleans, etc. i.e. javascript allow nahin karti hai ki null == string, number, boolean ho, but undefined ho sakta hai null == undefined is true
console.log(null >= 0); //Output: true; In comparisons (>=, <=, etc), JavaScript converts null to 0; So: 0 >= 0 → true

console.log("2" === 2) //false; checking value and datatype also
console.log("2" == 2) //true; only checking value, not the datatype

console.log("2" > 1); //true; converting  "2" into a number i.e., 2 > 1 is true