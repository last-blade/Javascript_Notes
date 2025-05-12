function User(username, age) {
    this.username = username;
    this.age = age;
}

const user1 = new User("Prashant", 18); /* "new" keyword ek constructor hai jo ki ek naya instance create karta hai object ka, 
                                            memory block mein. The new keyword in JavaScript is used to create a new instance of 
                                            an object from a constructor function or class(matlab ki yeh "new" keyword constructor 
                                            function ko call karta hai naya object kaa instance banane ke liye). It allocates 
                                            memory and sets up the prototype chain so the new object can inherit from the 
                                            constructor's prototype.
                                        */
const user2 = new User("SRK", 18);

console.log(user1); // User { username: 'Prashant', age: 18 }
console.log(user2); // User { username: 'SRK', age: 18 }

/*
Agar main "new" keyword kaa use nahin karta "user1" and "user2" ko create karne ke liye, toh fir dono (user1 & user2) ke dono same
memory share karte i.e., agar "user1" mein kuch changes karta toh fir woh changes "user2" mein bhi reflect hote, i.e., koi separate
memory nahin hoti dono ki.

Toh iss cheez se bachne ke liye hi "new" keyword kaa use kiya hai.

~🔧 How it works under the hood (simplified):
!When you do:
^ const person = new Person();

!The new keyword does 4 things:
✔️Creates a new empty object: {}
✔️Links it to the constructor’s prototype: obj.__proto__ = Person.prototype
✔️Calls the constructor with this set to the new object(i.e. first step mein ek empty object (i.e. {}) create hone ke baad, jo hum 
    arguments pass karte hain, woh saare arguments empty object mein set ho jaate hain, like username: "prashant", age: 18, aisa 
    kuch hota hai bas.)
✔️Returns the object (unless the constructor returns its own object)
*/

//another example--------------------------------------------------------------------------------------------------------------------------
function Person(name) {
  this.name = name;
}

const p1 = new Person("Prashant");
console.log(p1.name); // "Prashant"

console.log(p1 instanceof Person); // OUTPUT: True; kyoki "p1" jo banaya hai woh Person se hi toh banaya hai
console.log(p1.constructor); // OUTPUT: [Function: Person]; "p1" kaa constructor toh "Person" hi hai isliye output mein "Person" aaya hai.