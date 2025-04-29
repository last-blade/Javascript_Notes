/*
Object ko 2 tareeke se create kar sakte hain
1. By constructor [NOTE: constructor se jo object banaya jaata hai woh 'singleton' object hota hai]
    Object.create

2. By object literals
    const myObj = {};    
*/

const user = {
    name: "Prashant",
    age: 18,
    email: "prashant@google.com",
    "full name": "Prashant Tyagi"
};

//Two methods to access the object values
//1. using dot(.)
console.log(user.name);

//2. using square brackets and insert the "key" name in string format, because behind the scenes JS mein 'key' ko string hi consider kara jaata hai, isliye maine neeche square brackets mein "name" ko string mein pass kiya hai
console.log(user["name"]);

/*
humein second method use karna chahiye waise, woh isliye kyoki maine oopar 'user' object mein key kaa naam "full name" rakha hai
or oopar se string mein, toh isko hum dot(.) se toh bilkul bhi access nahin kar sakte hain, toh iske liye hum 
key name ko square brackets mein pass karte hain or fir access kar paayenge uss key ki value ko.
*/

console.log(user["full name"]); //OUTPUT: Prashant Tyagi
//----------------------------------------------------------------------------------------------------------------------------------------

//How to write symbol datatype in object
const mySymbol = Symbol("Hello");

const obj = {
    [mySymbol]: "world" 
}

console.log(obj[mySymbol]); // OUTPUT: world
user["name"] = "SRK";
        // OR
user.name = "SRK";
console.table(user.name);

//----------------------------------------------------------------------------------------------------------------------------------------
//How to freeze object, i.e. koi bhi user object ki values change naa kar paaye, toh iske liye hum 'freeze' method use karte hain
//Syntax: Object.freeze(your_object_name)
Object.freeze(user);
user.age = 20; //OUTPUT: Error nahin aayegi, or change bhi nahin hoga object ke andar kuch
console.log(user.age); //OUTPUT: 18

//----------------------------------------------------------------------------------------------------------------------------------------
const myObj = {
    name: "Prashant",
    age: 18,
    email: "prashant@google.com",
}
myObj.greetings = function(){
    console.log("Hello user")
}

console.log(myObj.greetings); //OUTPUT: [Function (anonymous)]; Returning function not executing the function
console.log(myObj.greetings()); //OUTPUT: Hello user undefined

/*
'Hello user' and 'undefined' print ho raha hai, why ?
aisa isliye ho raha hai jab hum user.greeting() function ko call kar rahe hain toh fir function ke andar jo console.log laga hua hai
usse toh "Hello user" print ho raha hai, but function kuch return nahin kar raha hai, isliye jo function call jo ho raha hai
console.log ke andar woh bhi toh kuch print karega, jab kuch return hi nahin kar raha hai function toh fir 'undefined' print 
ho raha hai.
*/

myObj.greetings(); //OUTPUT: Hello user; ab 'undefined' print nahin ho raha hai kyoki ab main console.log ke andar call nahin kar raha hoon funciton ko.

myObj.otherFunction = function(){
    console.log(`Hello my name is ${this.name}`);
}

myObj.otherFunction(); //OUTPUT: Hello my name is Prashant