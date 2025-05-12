function createUser(username, age){
    this.username = username
    this.age = age
}

console.log(createUser.prototype); // OUTPUT: {}; empty object why ?
/*
--> In JavaScript, every function (except arrow functions) automatically has a prototype object.
--> That {} is just the default prototype object — JavaScript gives it to every function. It's like an empty toolbox that you can fill later.

🧠 Why does it exist?
The purpose of this prototype is:
➡️ When you create a new object using new, JavaScript uses that prototype object to set up inheritance.

📦 What happens when you use new createUser()?
~ const user1 = new createUser("Prashant", 24);
Behind the scenes, JavaScript does this:

1. It creates a new empty object: {}.

2. It sets user1.__proto__ = createUser.prototype.

3. It runs the createUser function with this pointing to the new object.

4. It returns the new object.

! So:
~ console.log(user1.__proto__ === createUser.prototype); // true
This is the connection: the newly created object’s prototype (__proto__) is the same as the function’s prototype.


🔧 How to use it?
You can add shared methods to the prototype so all objects created using new can access them.

~ createUser.prototype.sayHi = function() {
~   console.log("Hi, I am " + this.username);
~ };
~ 
~ const user1 = new createUser("Prashant", 24);
~ user1.sayHi(); // Hi, I am Prashant
~ 
~ const user2 = new createUser("SRK", 25);
~ user2.sayHi(); // Hi, I am SRK
This saves memory because the function is shared via prototype — not duplicated in every object.

*/

// 🔧 below i have created my own custom(i.e., greet) method like slice(), map(), splice(), etc
createUser.prototype.greet = function () {
  console.log(`Hello, I am ${this.username} and I'm ${this.age} years old.`);
};

const user1 = new createUser("Prashant", 18);
user1.greet(); // ✅ Hello, I am Prashant and I'm 18 years old.

/*
^--> When you add methods to the .prototype, you're doing exactly what JavaScript does internally for things like slice(), splice(), etc.

Let me break it down:
🧠 Built-in Example:
When you do:
~ const arr = [1, 2, 3];
~ arr.slice();
This works because:
~ console.log(Array.prototype.slice); // ✅ function slice() { [native code] }
*/