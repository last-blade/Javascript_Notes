function hello(username){
    this.username = username
    console.log("called"); // OUTPUT: called
}

function person(username, age){
    hello(username)
    this.age = age
}

const p1 = new person("Prashant", 18);
console.log(p1); // OUTPUT: person { age: 18 }; lekin 'username' print nahin ho raha hai iss object mein, kyoki maine toh username bhi set kiya hai lekin doosre method ki help lekar kiya hai.
/*
sabse oopar jo function banaya hai "hello()" naam se, hum uss function ke "this" mein username ko set kar rahe hain i.e., 
"hello" function mein jo this likha hua hai woh "hello" function context hi lega, i.e., hello function ke this mein set ho 
raha hai "username", par humein toh "person" function ke this mein set karna hai 'username'.

❌ Why username isn't set?
When you call hello(username), it's a regular function call, so this inside hello refers to global object (in non-strict mode) or undefined (in strict mode).

So this.username = username runs in the wrong context — not in the person()'s object.

! Solution below:-

--> oopar jo function likha hua hai 'person', usmein maine 'hello' function ko execute karaya hai, toh execute karte time humein
    '.call' keyword kaa use karna hai or 'person' function kaa 'this' bhi argument mein send karna hai, see below

    const p2 = new person(this, username);

--> bina ".call" ke hum "this" ko as an argument send nahin kar sakte thay, jaise humne neeche 'hello.call(this, username)' mein kiya hua hai,
    bina, aur "this" jo hai "user" function kaa send hua hai, or fir yeh this jo hai oopar "hello" wale function ke paas gaya hai
    and then wahan jo hai ab "user" function kaa context use hoga, naa ki "hello" function kaa, toh yeh faayeda hai ".call" kaa.
*/

function user(username, age){
    hello.call(this, username)
    this.age = age;
}

const u1 = new user("Prashant", 18);
console.log(u1); // OUTPUT: user { username: 'Prashant', age: 18 }

/*
💡 What is .call()?
func.call(thisArg, arg1, arg2, ...)
.call() is a method used to invoke a function with an explicitly specified this value.

It allows you to borrow another function and run it in a different object’s context.
*/