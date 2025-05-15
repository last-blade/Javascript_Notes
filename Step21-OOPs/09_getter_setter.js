/~* Uncomment the below code to see the error after executing the code */
// class User {
//     constructor(email, password){
//         this.password = password;
//         this.email = email
//     }

//     get email(){
//         return this.email; 
//     }

//     set email(value){
//         this.email = value; //OUTPUT: RangeError: Maximum call stack size exceeded; See Comment-1 below:
//     }
        // getter bana rahe hain toh setter bhi banana hi padega, otherwise error aa jaayegi, getter banane ke liye "get" and setter banane ke liye "set" keyword kaa use karte hain, or jo property get yaa set karni hai wahi same name use karna hota hai, jaise oopar mujhe "email" ki value ko get karna hai toh fir "get email" likhna padega, koi or naam nahin de sakte apni marzi se.
// }

// const u1 = new User ("prashant@google.com", "1234@")

// console.log(u1)

/*
✅Comment-1: this.email = value; iss code mein hum email ko initialize kar rahe hain, toh fir jab this.email = value; wala code execute
                hoga, tab Javascript dekhegi ki email ki value set karni hai, toh fir javascript "set email()" ko call karegi or fir
                this.email = value; run hoga kyoki email set karni hai toh yahi code hi toh internally run hoga javascript mein, 
                or fir jaise hi yeh code chalega, firse javascript dekhegi ki "set email()" call hua hai, or yeh infinite loop
                chalta hi jaayega

🧪 Visual analogy:
It's like writing:

~    function repeat() {
~        repeat(); // keeps calling itself
~    }
~    repeat();
That also causes an infinite recursion — exactly the same thing is happening inside your setter.

🔁 What's happening originally:
You had:
~   set email(value) {
~       this.email = value; // ❌ Triggers the same setter again!
~   }
this.email → JS thinks you're trying to set the email property

So it runs the same set email() function again

That causes infinite recursion

✅ Solution
✅ What changes when you rename it?
! Fixed version:
~   set email(value) {
~       this._email = value; // ✅ This is a normal property, no setter triggered
~   }
Now this._email is not the same name as the setter email

So when JS sees this._email, it doesn't look for a set _email() method

Instead, it just creates or updates a normal property called _email

^ So no recursion happens!
*/


class User2 {
    constructor(email, password){
        this.password = password;
        this.email = email
    }

    get email(){
        return this._email; 
    }

    set email(value){
        this._email = value; //OUTPUT: RangeError: Maximum call stack size exceeded; See Comment-1 below:
    }
}

const u2 = new User2("prashant@google.com", "1234@")

console.log(u2); // OUTPUT: User2 { password: '1234@', _email: 'prashant@google.com' }
console.log(u2.email); // OUTPUT: prashant@google.com


//!-------------------------------------------yahi same kaam function se bhi ho sakta hai bina class banaye----------------------------------

function Userr(username, email) {
    // First define getters/setters
    Object.defineProperty(this, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
    });

    Object.defineProperty(this, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
    });

    // Then assign values to trigger the setters
    this.username = username;
    this.email = email;
}

const u3 = new Userr("prashant", "prashant@google.com");
console.log(u3.username); // ✅ Output: prashant
console.log(u3.email);    // ✅ Output: prashant@google.com


//!-----------------------------------yahi same kaam object se bhi ho sakta hai bina class or function banaye----------------------------------

