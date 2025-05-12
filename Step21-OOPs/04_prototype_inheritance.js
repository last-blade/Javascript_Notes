const Car = {
    wheels: 4,
    steering: true,
    doors: 4,
    roof: true,
}

const Mercedes = {
    engine: "R8V10 Plus",
    color: "black",
    __proto__: Car, // iss tareeke se purane zamane(i.e. outdated approach) mein hum inheritance karte thay, maine 'Mercedes' object mein "Car" ki properties access karli hain i.e. inheri kar liya hai
}

const Maybach = {
    premiumDesign: true,
    comfortable: "Very comfortable",
    // __proto__: Car,
}

Maybach.__proto__ = Car; // iss tareeke se bhi inherit kar sakte hain, "Maybach" object mein "Car" object ki property ko inherit kiya hai.

console.log(Mercedes.wheels); // OUTPUT: 4; same wahi OOPs wala inheritance hain bas, or kuch nahin hai.

console.log(Maybach.comfortable); // OUTPUT: Very comfortable

//----------------------------------------------------------------New modern way of inheritance--------------------------------------------
const Jaguar = {
    logo: "Jaguar",
    premium: true,
}

Object.setPrototypeOf(Jaguar, Car); // Inherited the property of Car in Jaguar object.
/*
yeh naya tareeka hai inheritcance kaa, but under the hood '__proto__' hi use ho raha hai, wahi oopar jo hai purane zamane wala.
*/




