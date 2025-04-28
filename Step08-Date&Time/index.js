const myDate = new Date();

console.log(myDate); //OUTPUT: 2025-04-28T17:02:23.360Z

console.log(myDate.toString()); //OUTPUT: Mon Apr 28 2025 22:32:23 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //OUTPUT: Mon Apr 28 2025

console.log(myDate.toLocaleString()); //OUTPUT: 28/4/2025, 10:32:23 pm

console.log(myDate.toLocaleDateString()); //OUTPUT: 28/4/2025

console.log(myDate.toLocaleTimeString()); //OUTPUT: 10:32:23 pm

console.log(typeof myDate); // OUTPUT: Object

const randomDate = new Date(2023, 0, 5); // javascript mein month jo hai "0" se start hote hain, like 0->jan, 1->feb, 2->march...
console.log(randomDate.toDateString()); // OUTPUT: Sun Feb 05 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp); //OUTPUT: 1745860378633; milliseconds hain yeh 1 JAN 1970 se leke ab tak ki

console.log(Date.now()/1000); //Conversion of milliseconds to seconds, lekin ismein decimals mein aa jaati hai value, isliye math.floor
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDay()); //OUTPUT: 1; '1' kaa matlab -> MONDAY
console.log(myDate.getMonth()); //OUTPUT: 3; '3' kaa matlab -> April

const myDay = myDate.toLocaleString("default", {
    weekday: "long", //ctrl + space press karke suggestion aa jaati hain
    month: "2-digit",
    hour:"numeric"
});

console.log(myDay); // OUTPUT: 04 Monday, 10 pm