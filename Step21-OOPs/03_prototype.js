const myName = "Prashant        ";
console.log(myName.trim());

const heroes = ["Thor", "Superman"];

let heroPower = {
    thor: "Hammer",
    superman: "Laser beam",

    getSupermanPower: function(){
        console.log(`Superman power is ${this.superman}`)
    }
}

Object.prototype.prashant = function(){
    console.log("Prashant method is present in all objects like array, objects, strings.")
}

heroPower.prashant(); // OUTPUT: Prashant method is present in all objects like array, objects, strings.
// Object → inherits from Object.prototype → can access prashant()

heroes.prashant(); // OUTPUT: Prashant method is present in all objects like array, objects, strings.
// Array → inherits from Array.prototype → inherits from Object.prototype → can access prashant()

const str = "Hello world";
str.prashant();  // OUTPUT: Prashant method is present in all objects like array, objects, strings.
// String primitive → temporarily boxed to String object → inherits from String.prototype → which inherits from Object.prototype
// → can access prashant()


/*
! IMPORTANT Read carefully each and every line
--> jaise ki browser mein inspect karenge or fir hum suppose array, object, string create karenge, toh fir hum fir wahan dekhenge
    ki yeh teeno hi objects hain(jo ki hum pehle se jaante hain), and fir hum print karayenge maanlo array ko hi print kara rahe
    hain, fir hum dekhenge browser ke console mein dropdown wala button press karke, ki wahan par "ptototypes" wale section woh 
    sab ke sab methods mentioned hain jo hum apply kar sakte hain arrya par, like map, slice, splice, etc. toh predefined methods
    jo hain wahan par hum dekh sakte hain 'prototypes' ke andar, toh aise hi hum bhi uss prototype ke andar apna khud kaa custom
    method bhi uss 'prototype' ke andar inject kar sakte hain jaise slice, map, etc methods hain wahan par.

--> Or khud kaa custom method 'prototype' mein inject karne ke liye humein ek code likhna padega bas.
~    Object.prototype.your_custom_method_name = function(){
        body of function
~        console.log("Prashant method is present in all objects like array, objects, strings.")
~    }

^ Toh oopar code se humne kiya kya hai ki ab jitne bhi objects honge, like array, object, string, yeh sab custom method ko access
^    kar sakte hain, jaise ki oopar dekhenge toh humne "prashant" naam kaa method banaya hai and "Object" ke prtotype mein inject
^   kar diya hai apna khud kaa method, ab string bhi ek object hai, array bhi object hai and object khud object hai hi, toh ab 
^   main array par, string par, object par "prashant" method ko apply kar sakta hoon, jaise ki "slice()" method ko main string
^   and array dono par apply kar sakta hoon, kyoki slice method jo hai object ke protoype mein inject hai or main fir access kar
^   sakta hoon.

--> toh ab humne top-level ki hierarchy(i.e. object, kyoki string, object, array, yeh teeno hi object hain, isliye top-level par
    object hi hai hierarchy mein) mein hi apna prototype inject kar diya hai, isliye ab teeno hi "prashant" naam ke method
    ko access kar sakte hain

--> Oopar maine jo code likha hai, maine "prashant" method ko string, array and object dono par apply kiya kyoki maine direct 
    object ke prototype mein inject kar diya hai or ab teeno (array, string, object) access kar sakte hain prashant method ko.
    ! see below:-
    1. heroPower.prashant(); // OUTPUT: Prashant method is present in all objects like array, objects, strings.

    2. heroes.prashant(); // OUTPUT: Prashant method is present in all objects like array, objects, strings.

    3. const str = "Hello world";
    str.prashant();


!💡 BONUS UNDERSTANDING:
-> Every object in JS is linked to a prototype.

-> Array.prototype, Object.prototype, String.prototype are all parent objects that hold default methods.

-> When you access something like heroes.slice(), JavaScript doesn't find it directly on heroes, so it looks up the prototype chain.

-> That’s why we say: all non-null objects inherit from Object.prototype.    
*/



//!--------------------------------Kewal array ke prototype mein hi custom-method inject karna ho toh-----------------------------------------

Array.prototype.heyPrashant = function(){
    console.log("hey prashant")
}

const arr2 = [1,2,3,4,5];
arr2.heyPrashant(); // OUTPUT: hey prashant

const str2 = "Hello";
str2.heyPrashant(); // OUTPUT: TypeError: str2.heyPrashant is not a function; string access nahin kar sakti "heyPrashant()" method ko, see explaination below:

/* ab yeh "heyPrashant()" custom method kewal array ke andar hi hai, string, and object koi bhi access nahin kar sakta, jaise ki 
    oopar kar paa rahe thay, string, array, object inn teeno se, since humne top-level hierarchy(i.e. Object) mein hi inject kar 
    diya tha apna custom method, lekin ab yahan par kewal main "Array" mein hi inject kiya hai custom method ko bas, or array hi 
    acces kar sakta hai iss method ko kewal.
*/
