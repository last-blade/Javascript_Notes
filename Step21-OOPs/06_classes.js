class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){ // function likhne ke liye "function" keyword likhne ki zaroorat nahin hoti hai "class" ke andar, yahi syntax hai
        return `${this.password}vgdsfbcudyrewjr832d`
    }
}

const u1 = new User("Prashant", "prashant@google.com", "Prashant@123");
console.log(u1); /* OUTPUT: User {
                                username: 'Prashant',
                                email: 'prashant@google.com',
                                password: 'Prashant@123'
                            } 
*/

console.log(u1.encryptPassword()); // OUTPUT: Prashant@123vgdsfbcudyrewjr832d
//! NOTE: Class mein bas ek hi constructor bana sakte hain, multiple constructors nahin ho sakte hain; SyntaxError: A class may only have one constructor

//-------------------------------------Pehle jab oops class wala concept nahin tha tab kaise karte thay, see below:----------------------------

function Userr(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

Userr.prototype.encryptPassword = function(){
    return `${this.password}vgdsfbcudyrewjr832d`
}

const user1 = new Userr("prashant", "prashant@netflix.com", "prashant@123");
console.log(user1);
/*
    Userr {
        username: 'prashant',
        email: 'prashant@netflix.com',
        password: 'prashant@123'
    }
*/

console.log(user1.encryptPassword());